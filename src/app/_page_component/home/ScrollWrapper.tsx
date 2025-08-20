"use client";
import { LottieWeb } from "@/components/Animation/lottie-web"; // Assuming this path is correct
import { cn } from "@/lib/utils";
import { ClassNameType } from "@/utils/types";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface Section {
  id: string;
  title?: string;
}

// helper hook to check screen size
function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // lg breakpoint
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsLarge(e.matches);

    // set initial
    setIsLarge(mediaQuery.matches);

    // listener
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isLarge;
}

interface ScrollIndicatorProps {
  showIndicator: boolean;
  className?: ClassNameType;
}

// Scroll Indicator
export const ScrollIndicator = ({
  showIndicator,
  className,
}: ScrollIndicatorProps) => (
  <div
    className={cn(
      `fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-500`,
      showIndicator ? "opacity-100" : "opacity-0",
      className
    )}
  >
    <div className="flex flex-col items-center text-gray-600">
      <div className="w-full h-20">
        {/* Ensure LottieWeb component is correctly implemented and '/json/mouse.json' is accessible */}
        <LottieWeb src="/json/mouse.json" />
      </div>
      {/* <ChevronDown className="w-6 h-6 animate-bounce" /> */}{" "}
      {/* Removed to match original code */}
    </div>
  </div>
);

const ScrollWrapper = ({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean;
}) => {
  const [activeSection, setActiveSection] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState<boolean>(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const isLargeScreen = useIsLargeScreen();

  // Define scroll sections
  const scrollSections = [
    { id: "first-screen" },
    { id: "training-ecosystem" },
    { id: "lifecycle-management" },
    { id: "customer-engagement" },
    { id: "one-platform" },
    { id: "carousel-section" },
    { id: "evolve-retention" },
  ];

  useEffect(() => {
    if (loading) return; // ✅ only run on large

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = scrollSections.findIndex(
              (section) => section.id === entry.target.id
            );
            if (sectionIndex !== -1) {
              setActiveSection(sectionIndex);
              setShowScrollIndicator(sectionIndex === 0);
            }
          }
        });
      },
      {
        threshold: 0.7,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observerRef.current = observer;

    scrollSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading, isLargeScreen]);
  // ✅ Render differently per screen size
  // if (!isLargeScreen) {
  //   return <>{children}</>; // small screen → no scroll logic
  // }

  return (
    <div className="">
      {!loading && <ScrollIndicator showIndicator={showScrollIndicator} />}
      {children}
    </div>
  );
};

export default ScrollWrapper;
