"use client";
import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LottieWeb = ({ animationData }: { animationData: any }) => {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    }

    return () => {
      animationInstance.current?.destroy();
    };
  }, [animationData]);

  return <div ref={animationContainer} />;
};
