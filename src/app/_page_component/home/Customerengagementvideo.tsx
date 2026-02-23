"use client";

import { Heading, Paragraph, Title } from "@/components/typography/Typography";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ScrollVideoProps {
  /**
   * Path to the video file (e.g. "/videos/hero.mp4")
   */
  src: string;

  /**
   * How many viewport heights the scroll section takes.
   * More = slower scrub through the video. Default: 4
   */
  scrollLength?: number;

  /**
   * Video duration in seconds. If omitted the component reads it from metadata.
   * Providing it avoids a small flash on first render.
   */
  videoDuration?: number;

  /**
   * Tailwind / inline classes applied to the <video> element wrapper.
   * Use this to control size. Default: full-width 16/9 rounded-2xl
   */
  videoClassName?: string;

  /**
   * Extra class on the outer sticky wrapper (the 100vh container).
   */
  className?: string;
}

/**
 * ScrollVideo
 * -----------
 * Sticky 100 vh section. As the user scrolls through `scrollLength` viewports:
 *   1. Video scrubs frame-by-frame (currentTime driven by scroll progress)
 *   2. Opacity fades from 0 → 1 in the first 25 % of scroll
 *   3. A subtle scale pop 0.92 → 1 adds depth
 *
 * Usage:
 *   <ScrollVideo src="/videos/hero.mp4" scrollLength={5} videoDuration={12} />
 */
export function ScrollVideo({
  src,
  scrollLength = 8,
  videoDuration,
  videoClassName = "",
  className = "",
}: ScrollVideoProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState<number>(videoDuration ?? 0);

  // ── scroll progress [0, 1] over the full sticky section ──────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for silky scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Opacity: 0 → 1 over first 25 % of scroll
  const opacity = useTransform(smoothProgress, [0, 0.25], [0, 1]);

  // Scale: subtle pop-in
  const scale = useTransform(smoothProgress, [0, 0.3], [0.92, 1]);

  // ── drive video currentTime from scroll ──────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMeta = () => {
      if (!videoDuration) setDuration(video.duration);
    };

    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1 && !videoDuration) {
      setDuration(video.duration);
    }
    return () => video.removeEventListener("loadedmetadata", onMeta);
  }, [videoDuration]);

  useEffect(() => {
    if (!duration) return;

    return smoothProgress.on("change", (v) => {
      const video = videoRef.current;
      if (!video) return;
      const target = v * duration;
      // Only update if difference is noticeable (avoids jitter)
      if (Math.abs(video.currentTime - target) > 0.01) {
        video.currentTime = target;
      }
    });
  }, [smoothProgress, duration]);

  const contents = [
    {
      heading: "Loyalty Programs",
      paragraph:
        "Reward repeat visits, service appointments, and referrals—keeping your dealership top of mind. They create a sense of value and connection that drives long-term customer retention and brand loyalty.",
    },
    {
      heading: "Gamification",
      paragraph:
        "By incorporating game-elements—such as challenges, badges, leaderboards, and point systems—dealerships can increase customer visits, boost brand loyalty, and encourage repeat service appointments.",
    },
  ];

  return (
    /**
     * Outer section — height = scrollLength × 100vh
     * This is what creates the scroll "room" for the sticky frame.
     */
    <div
      ref={sectionRef}
      className={`relative w-full ${className}`}
      style={{ height: `${scrollLength * 100}vh` }}
    >
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
        <div className="text-center   ">
          <Title>CUSTOMER ENGAGEMENT</Title>
        </div>
        {/* ── Dark vignette — covers the FULL width including content ── */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0, 0.25], [1, 0]) }}
          className="absolute inset-0 bg-black/10 pointer-events-none z-20 py-10"
        />

        <motion.div
          style={{ opacity, scale }}
          className={`relative w-full max-w-[1900px] mx-auto  px-2 lg:px-10 [@media(min-width:1500px)]:px-[120px] ${videoClassName}`}
        >
          <div className="flex items-center gap-8 ">
            {/* Video */}
            <video
              ref={videoRef}
              src={src}
              muted
              playsInline
              preload="auto"
              className="w-full h-auto  object-cover max-w-full  lg:max-w-[70%] flex-1 rounded-lg flex"
            />

            {/* Content — fades in with same opacity as video */}
            <div className="w-full lg:max-w-[30%] h-full lg:flex flex-col lg:space-y-20 z-10 hidden">
              {contents.map((item, index) => (
                <div className="space-y-4" key={index}>
                  <Heading className="text-2xl md:text-4xl font-bold">
                    {item.heading}
                  </Heading>
                  <Paragraph className="text-xl">{item.paragraph}</Paragraph>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
