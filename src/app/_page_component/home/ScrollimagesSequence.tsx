"use client";

import { Heading, Paragraph, Title } from "@/components/typography/Typography";
import { useCallback, useEffect, useRef, useState } from "react";

interface ScrollImageSequenceProps {
  totalFrames?: number;
  getFrameUrl?: (index: number) => string;
  scrollLength?: number;
  className?: string;
}

const CONTENTS = [
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

export function ScrollImageSequence({
  totalFrames = 93,
  getFrameUrl = (i) => `/frames/${i}.jpg`,
  scrollLength = 600,
  className = "",
}: ScrollImageSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const imgElRef = useRef<HTMLImageElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [ready, setReady] = useState(false);
  const [activeContent, setActiveContent] = useState(0);
  const [currentSrc, setCurrentSrc] = useState<string>("");

  // Smooth frame interpolation — just updates the img src
  const animateToTarget = useCallback(() => {
    const diff = targetFrameRef.current - currentFrameRef.current;
    if (Math.abs(diff) < 0.5) {
      currentFrameRef.current = targetFrameRef.current;
      const img = imagesRef.current[Math.round(currentFrameRef.current)];
      if (img) setCurrentSrc(img.src);
      rafRef.current = null;
      return;
    }
    currentFrameRef.current += diff * 0.3;
    const frameIndex = Math.max(
      0,
      Math.min(totalFrames - 1, Math.round(currentFrameRef.current)),
    );
    const img = imagesRef.current[frameIndex];
    if (img) setCurrentSrc(img.src);
    rafRef.current = requestAnimationFrame(animateToTarget);
  }, [totalFrames]);

  // Scroll handler
  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollTotal = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / scrollTotal));

      targetFrameRef.current = Math.round(p * (totalFrames - 1));
      setActiveContent(p < 0.5 ? 0 : 1);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animateToTarget);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalFrames, animateToTarget]);

  // Preload all frames
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFrameUrl(i + 1);
      img.onload = img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === 1) {
          setCurrentSrc(imgs[0].src);
        }
        if (loaded === totalFrames) setReady(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [totalFrames, getFrameUrl]);

  const progress = Math.round((loadedCount / totalFrames) * 100);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        height: `${scrollLength}vh`,
        width: "100%",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
        className="w-full max-w-[1900px] mx-auto px-2 lg:px-10 [@media(min-width:1500px)]:px-[120px] flex flex-col"
      >
        {/* Title */}
        <div className="text-center relative z-30 pt-4 flex-shrink-0">
          <Title>CUSTOMER ENGAGEMENT</Title>
        </div>

        {/* Image left, content right */}
        <div className="flex w-full flex-1 min-h-0">
          {/* Image — left side, naturally responsive */}
          <div className="flex-1 min-w-0 min-h-0 flex items-center justify-center overflow-hidden">
            {currentSrc && (
              <img
                ref={imgElRef}
                src={currentSrc}
                alt="frame"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            )}
          </div>

          {/* Content — right side */}
          <div className="hidden lg:flex flex-col justify-center gap-20 w-[30%] flex-shrink-0 pl-10">
            {CONTENTS.map((item, index) => (
              <div
                key={index}
                className="space-y-4 transition-opacity duration-500"
                style={{ opacity: activeContent === index ? 1 : 0.3 }}
              >
                <Heading className="text-2xl md:text-4xl font-bold">
                  {item.heading}
                </Heading>
                <Paragraph className="text-xl">{item.paragraph}</Paragraph>
              </div>
            ))}
          </div>
        </div>

        {/* Loading overlay */}
        {!ready && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              color: "rgba(255,255,255,0.6)",
              fontFamily: "monospace",
              fontSize: 13,
            }}
          >
            <div>loading frames</div>
            <div
              style={{
                width: 200,
                height: 2,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 2,
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: 2,
                  transition: "width 0.1s",
                }}
              />
            </div>
            <div>
              {loadedCount} / {totalFrames}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
