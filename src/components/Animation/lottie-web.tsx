"use client";
import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { ClassNameType } from "@/utils/types";
import { Skeleton } from "../ui/skeleton";

type LottieWebProps = {
  animationData?: unknown;
  src?: string;
  className?: ClassNameType;
  style?: React.CSSProperties;
  assetsPath?: string;
};

export const LottieWeb = ({
  animationData,
  src,
  style,
  className,
  assetsPath = "/images/",
}: LottieWebProps) => {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const animationInstance = useRef<AnimationItem | null>(null);
  const [loadedAnimationData, setLoadedAnimationData] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    // Load JSON from `src` if provided
    const loadAnimation = async () => {
      setIsLoading(true);
      if (src) {
        try {
          const response = await fetch(src);
          const json = await response.json();
          if (isMounted) {
            setLoadedAnimationData(json);
            setIsLoading(false);
          }
        } catch (err) {
          console.error("Failed to load Lottie animation from src:", err);
          setIsLoading(false);
        }
      } else {
        setLoadedAnimationData(animationData);
        setIsLoading(false);
      }
    };

    loadAnimation();

    return () => {
      isMounted = false;
    };
  }, [src, animationData]);

  useEffect(() => {
    if (animationContainer.current && loadedAnimationData) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: loadedAnimationData,
        assetsPath: assetsPath,
      });
    }

    return () => {
      animationInstance.current?.destroy();
    };
  }, [loadedAnimationData]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      {isLoading && (
        <Skeleton className="bg-gray-200 h-full w-full rounded-xl" />
      )}
      <div
        ref={animationContainer}
        style={{
          padding: 0,
          margin: 0,
          display: isLoading ? "none" : "inline-block",
          lineHeight: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      />
    </div>
  );
};
