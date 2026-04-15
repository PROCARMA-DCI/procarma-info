"use client";

import { Wrapper } from "@/components/Layout";
import { Heading, Paragraph, Title } from "@/components/typography/Typography";
import { Suspense, useEffect, useRef, useState } from "react";
import { customerEngagementContents } from "./CustomerEngagement";

export const ScrollVideos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const vid0Ref = useRef<HTMLVideoElement>(null);
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRefs = [vid0Ref, vid1Ref];

  const switchVideo = (index: number) => {
    videoRefs.forEach((ref, i) => {
      const video = ref.current;
      if (!video) return;
      if (i === index) {
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
      }
    });
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  useEffect(() => {
    let currentIndex = 0;
    let isInView = false;

    // 1. Scroll handler — only switch when index changes
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section || !isInView) return;
      const rect = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / totalScroll));
      const next = progress < 0.5 ? 0 : 1;
      if (next !== currentIndex) {
        currentIndex = next;
        switchVideo(next);
      }
    };

    // 2. IntersectionObserver — start/reset when component enters view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (entry.isIntersecting) {
          // reset to first video every time component comes into view
          currentIndex = 0;
          switchVideo(0);
        } else {
          // pause all when out of view
          videoRefs.forEach((ref) => ref.current?.pause());
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // 3. Visibility API — pause when tab goes to background
    const onVisibilityChange = () => {
      if (document.hidden) {
        videoRefs.forEach((ref) => ref.current?.pause());
      } else if (isInView) {
        videoRefs[activeIndexRef.current]?.current?.play();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
    };
  }, []);

  const videos = ["/video/part1.webm", "/video/part2.webm"];

  return (
    <div ref={sectionRef} style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen">
        <Wrapper>
          <section className="w-full pt-16">
            <div className="text-center lg:mb-18 mb-10">
              <Title>CUSTOMER ENGAGEMENT</Title>
            </div>

            <div className="p-2">
              <div className="relative flex flex-col lg:flex-row justify-between items-center max-h-full">
                {/* Video */}
                <div className="max-w-full lg:max-w-[60%] flex-1 rounded-lg flex">
                  <div className="origin-center mb-20 lg:mb-0 w-full">
                    <Suspense>
                      {videos.map((src, index) => (
                        <video
                          key={src}
                          ref={videoRefs[index]}
                          muted
                          playsInline
                          className="w-full h-full object-cover transition-opacity duration-500"
                          style={{
                            opacity: activeIndex === index ? 1 : 0,
                            display: activeIndex === index ? "block" : "none",
                          }}
                        >
                          <source src={src} type="video/webm" />
                        </video>
                      ))}
                    </Suspense>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:max-w-[30%] h-full lg:flex flex-col lg:space-y-20 z-10 hidden">
                  {customerEngagementContents.map((item, index) => (
                    <div
                      key={index}
                      className="space-y-4 transition-all duration-500"
                      style={{
                        opacity: activeIndex === index ? 1 : 0.2,
                        transform:
                          activeIndex === index
                            ? "translateX(0)"
                            : "translateX(10px)",
                      }}
                    >
                      <Heading className="text-2xl md:text-4xl font-bold">
                        {item.heading}
                      </Heading>
                      <Paragraph className="text-xl">
                        {item.paragraph}
                      </Paragraph>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Wrapper>
      </div>
    </div>
  );
};
