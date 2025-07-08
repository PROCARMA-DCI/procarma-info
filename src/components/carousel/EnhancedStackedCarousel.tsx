"use client";

import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CarouselSlide {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  videoUrl?: string;
  videoType?: "vimeo" | "youtube" | "direct";
  videoThumbnail?: boolean;
}

interface StackedCarouselProps {
  slides: CarouselSlide[];
  className?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
}

export function EnhancedStackedCarousel({
  slides,
  className,
  autoplay = false,
  autoplayInterval = 5000,
}: StackedCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<{
    [key: string]: boolean;
  }>({});
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [videoThumbnails, setVideoThumbnails] = useState<{
    [key: string]: string;
  }>({});
  const [thumbnailsLoading, setThumbnailsLoading] = useState<{
    [key: string]: boolean;
  }>({});

  const scrollPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const scrollNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const scrollTo = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  // Helper function to detect video type from URL
  const getVideoType = (url: string): "vimeo" | "youtube" | "direct" => {
    if (url.includes("vimeo.com") || url.includes("player.vimeo.com")) {
      return "vimeo";
    } else if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return "youtube";
    }
    return "direct";
  };

  // Extract video ID from URL
  const extractVideoId = (
    url: string,
    type: "vimeo" | "youtube"
  ): string | null => {
    switch (type) {
      case "vimeo":
        const vimeoMatch = url.match(
          /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/
        );
        return vimeoMatch ? vimeoMatch[1] : null;

      case "youtube":
        const youtubeMatch = url.match(
          /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
        );
        return youtubeMatch ? youtubeMatch[1] : null;

      default:
        return null;
    }
  };

  // Get thumbnail from video URL
  const getVideoThumbnail = async (
    videoUrl: string,
    videoType: "vimeo" | "youtube" | "direct"
  ): Promise<string | null> => {
    try {
      switch (videoType) {
        case "youtube":
          const youtubeId = extractVideoId(videoUrl, "youtube");
          if (youtubeId) {
            // Try high quality thumbnail first, fallback to medium quality
            const highQualityUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
            const mediumQualityUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

            // Check if high quality thumbnail exists
            try {
              const response = await fetch(highQualityUrl, { method: "HEAD" });
              if (response.ok) {
                return highQualityUrl;
              }
            } catch {
              // Fallback to medium quality
            }
            return mediumQualityUrl;
          }
          break;

        case "vimeo":
          const vimeoId = extractVideoId(videoUrl, "vimeo");
          if (vimeoId) {
            try {
              const response = await fetch(
                `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`
              );
              const data = await response.json();
              return data.thumbnail_url || null;
            } catch (error) {
              console.warn("Failed to fetch Vimeo thumbnail:", error);
              // Fallback to Vimeo's direct thumbnail URL pattern
              return `https://vumbnail.com/${vimeoId}.jpg`;
            }
          }
          break;

        case "direct":
          // For direct video URLs, we'll create a video element to capture a frame
          return new Promise((resolve) => {
            const video = document.createElement("video");
            video.crossOrigin = "anonymous";
            video.currentTime = 1; // Seek to 1 second

            video.onloadeddata = () => {
              const canvas = document.createElement("canvas");
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;

              const ctx = canvas.getContext("2d");
              if (ctx) {
                ctx.drawImage(video, 0, 0);
                const thumbnailUrl = canvas.toDataURL("image/jpeg", 0.8);
                resolve(thumbnailUrl);
              } else {
                resolve(null);
              }
            };

            video.onerror = () => resolve(null);
            video.src = videoUrl;
          });

        default:
          return null;
      }
    } catch (error) {
      console.warn("Failed to extract video thumbnail:", error);
      return null;
    }
    return null;
  };

  // Load thumbnails for videos without images
  useEffect(() => {
    const loadThumbnails = async () => {
      for (const slide of slides) {
        if (
          slide.videoUrl &&
          !slide.image &&
          !videoThumbnails[slide.id] &&
          !thumbnailsLoading[slide.id]
        ) {
          setThumbnailsLoading((prev) => ({ ...prev, [slide.id]: true }));

          const videoType = slide.videoType || getVideoType(slide.videoUrl);
          const thumbnail = await getVideoThumbnail(slide.videoUrl, videoType);

          if (thumbnail) {
            setVideoThumbnails((prev) => ({ ...prev, [slide.id]: thumbnail }));
          }

          setThumbnailsLoading((prev) => ({ ...prev, [slide.id]: false }));
        }
      }
    };

    loadThumbnails();
  }, [slides, videoThumbnails, thumbnailsLoading]);

  // Helper function to get embed URL
  const getEmbedUrl = (slide: CarouselSlide): string => {
    if (!slide.videoUrl) return "";

    const videoType = slide.videoType || getVideoType(slide.videoUrl);

    switch (videoType) {
      case "vimeo":
        if (slide.videoUrl.includes("player.vimeo.com")) {
          return `${slide.videoUrl}?autoplay=1&muted=1&controls=1&loop=1`;
        }
        const vimeoId = extractVideoId(slide.videoUrl, "vimeo");
        return `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&controls=1&loop=1`;

      case "youtube":
        const youtubeId = extractVideoId(slide.videoUrl, "youtube");
        return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${youtubeId}`;

      default:
        return slide.videoUrl;
    }
  };

  // Get the appropriate thumbnail image
  const getThumbnailImage = (slide: CarouselSlide): string => {
    if (slide.image) {
      return slide.image;
    }
    if (slide.videoUrl && videoThumbnails[slide.id]) {
      return videoThumbnails[slide.id];
    }
    // Fallback placeholder
    return "/placeholder.svg?height=450&width=800";
  };

  // Toggle video play state
  const toggleVideoPlay = (slideId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setIsVideoPlaying((prev) => ({
      ...prev,
      [slideId]: !prev[slideId],
    }));

    const slide = slides.find((s) => s.id === slideId);
    if (slide?.videoUrl) {
      setAutoplayPaused(!isVideoPlaying[slideId]);
    }
  };

  // Autoplay functionality - pause when video is playing
  useEffect(() => {
    if (!autoplay || autoplayPaused) return;

    const interval = setInterval(() => {
      scrollNext();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, scrollNext, autoplayPaused]);

  // Reset video playing state when slide changes
  useEffect(() => {
    setIsVideoPlaying({});
    setAutoplayPaused(false);
  }, [selectedIndex]);

  // Calculate slide position and styling for stacked effect
  const getSlideStyles = (index: number) => {
    const distance = index - selectedIndex;
    const totalSlides = slides.length;

    let adjustedDistance = distance;
    if (Math.abs(distance) > totalSlides / 2) {
      adjustedDistance =
        distance > 0 ? distance - totalSlides : distance + totalSlides;
    }

    const absDistance = Math.abs(adjustedDistance);

    if (absDistance === 0) {
      return {
        transform: "translateX(0%) translateZ(0px) scale(1) rotateY(0deg)",
        zIndex: 30,
        opacity: 1,
      };
    } else if (absDistance === 1) {
      const translateX = adjustedDistance > 0 ? "25%" : "-25%";
      const translateZ = "-80px";
      const rotateY = adjustedDistance > 0 ? "-10deg" : "10deg";
      return {
        transform: `translateX(${translateX}) translateZ(${translateZ}) scale(0.88) rotateY(${rotateY})`,
        zIndex: 20,
        opacity: 1,
      };
    } else if (absDistance === 2) {
      const translateX = adjustedDistance > 0 ? "40%" : "-40%";
      const translateZ = "-160px";
      const rotateY = adjustedDistance > 0 ? "-18deg" : "18deg";
      return {
        transform: `translateX(${translateX}) translateZ(${translateZ}) scale(0.75) rotateY(${rotateY})`,
        zIndex: 10,
        opacity: 1,
      };
    } else {
      const translateX = adjustedDistance > 0 ? "50%" : "-50%";
      return {
        transform: `translateX(${translateX}) translateZ(-200px) scale(0.65)`,
        zIndex: 0,
        opacity: 1,
      };
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main Carousel Container with 3D perspective */}
      <div
        className="relative w-full flex items-center justify-center px-8 md:px-16 aspect-video"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "center center",
          height: "420px",
          overflow: "visible",
        }}
      >
        {/* Slides Container */}
        <div className="relative w-full max-w-3xl h-full">
          {slides.map((slide, index) => {
            const slideStyles = getSlideStyles(index);
            const isActive = index === selectedIndex;
            const embedUrl = getEmbedUrl(slide);
            const thumbnailImage = getThumbnailImage(slide);
            const isLoadingThumbnail = thumbnailsLoading[slide.id];

            return (
              <div
                key={slide.id}
                className="absolute inset-0 w-full h-full transition-all duration-700 ease-out cursor-pointer"
                style={{
                  ...slideStyles,
                  transformStyle: "preserve-3d",
                  isolation: "isolate",
                }}
                onClick={() => scrollTo(index)}
              >
                <div
                  className="w-full h-full rounded-3xl"
                  style={{
                    mask: "radial-gradient(ellipse at center, black 99%, transparent 100%)",
                    WebkitMask:
                      "radial-gradient(ellipse at center, black 99%, transparent 100%)",
                    contain: "layout style paint",
                  }}
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
                    {/* Video Content */}
                    {slide.videoUrl ? (
                      <div className="absolute inset-0">
                        {isActive && isVideoPlaying[slide.id] ? (
                          <iframe
                            src={embedUrl}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title={slide.title}
                          />
                        ) : (
                          <>
                            {/* Video Thumbnail */}
                            <div className="absolute inset-0">
                              {isLoadingThumbnail ? (
                                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                                </div>
                              ) : (
                                <div
                                  className="absolute inset-0 bg-cover bg-center"
                                  style={{
                                    backgroundImage: `url(${thumbnailImage})`,
                                  }}
                                />
                              )}
                            </div>
                            {/* Play/Pause Button */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                              <button
                                className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/30 hover:bg-black/70 transition-all"
                                onClick={(e) => toggleVideoPlay(slide.id, e)}
                                disabled={isLoadingThumbnail}
                              >
                                {isVideoPlaying[slide.id] ? (
                                  <Pause
                                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                                    fill="currentColor"
                                  />
                                ) : (
                                  <Play
                                    className="w-8 h-8 md:w-10 md:h-10 ml-1 text-white"
                                    fill="currentColor"
                                  />
                                )}
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      /* Image Content */
                      <div className="absolute inset-0">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${thumbnailImage})` }}
                        />
                        {slide.videoThumbnail && (
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/30 backdrop-blur-sm border border-white/30 hover:bg-black/50 transition-all cursor-pointer">
                              <Play
                                className="w-6 h-6 md:w-8 md:h-8 ml-1 text-white"
                                fill="currentColor"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-8 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "bg-blue-500 scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            )}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
