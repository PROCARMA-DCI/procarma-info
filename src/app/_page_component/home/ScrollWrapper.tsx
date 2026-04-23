"use client";
import { LottieWeb } from "@/components/Animation/lottie-web";
import { cn } from "@/lib/utils";
import { ClassNameType } from "@/utils/types";
import type React from "react";
import { useEffect, useRef, useState } from "react";

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsLarge(e.matches);

    setIsLarge(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isLarge;
}

interface ScrollIndicatorProps {
  showIndicator: boolean;
  className?: ClassNameType;
}

export const ScrollIndicator = ({
  showIndicator,
  className,
}: ScrollIndicatorProps) => (
  <div
    className={cn(
      `fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-500`,
      showIndicator ? "opacity-100" : "opacity-0 pointer-events-none",
      className,
    )}
  >
    <div className="flex flex-col items-center text-gray-600">
      <div className="w-full h-20">
        <LottieWeb src="/json/mouse.json" />
      </div>
    </div>
  </div>
);

const INACTIVITY_DELAY = 5000;

const ScrollWrapper = ({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean;
}) => {
  const [activeSection, setActiveSection] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeSectionRef = useRef(0);

  const isLargeScreen = useIsLargeScreen();

  const scrollSections = [
    { id: "first-screen" },
    { id: "training-ecosystem" },
    { id: "lifecycle-management" },
    { id: "customer-engagement" },
    { id: "one-platform" },
    { id: "carousel-section" },
    { id: "evolve-retention" },
  ];

  const clearTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }
  };

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const sectionIndex = scrollSections.findIndex(
            (section) => section.id === entry.target.id,
          );
          if (sectionIndex === -1) return;

          // Section changed — always hide indicator and clear any running timer
          clearTimer();
          setShowScrollIndicator(false);
          setActiveSection(sectionIndex);
          activeSectionRef.current = sectionIndex;

          if (sectionIndex === 0) {
            // First section: show immediately, no timer needed
            setShowScrollIndicator(true);
          } else if (sectionIndex === scrollSections.length - 1) {
            // Last section: never show indicator, even on inactivity
            setShowScrollIndicator(false);
          } else {
            // Any other section: show after 5s of staying on it
            inactivityTimerRef.current = setTimeout(() => {
              // Only show if user is still on this same section
              if (activeSectionRef.current === sectionIndex) {
                setShowScrollIndicator(true);
              }
            }, INACTIVITY_DELAY);
          }
        });
      },
      {
        threshold: 0.7,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observerRef.current = observer;

    scrollSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      clearTimer();
    };
  }, [loading, isLargeScreen]);

  return (
    <div className="">
      {!loading && <ScrollIndicator showIndicator={showScrollIndicator} />}
      {children}
    </div>
  );
};

export default ScrollWrapper;
