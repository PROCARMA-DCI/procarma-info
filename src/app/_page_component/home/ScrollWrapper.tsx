"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { LottieWeb } from "@/components/Animation/lottie-web"; // Assuming this path is correct
import { ClassNameType } from "@/utils/types";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  title?: string;
}

interface ScrollNavProps {
  activeSection: number;
  sections: Section[];
}

// Scroll Navigation Component (kept as is, but commented out in ScrollWrapper)
const ScrollNav = ({ activeSection, sections }: ScrollNavProps) => {
  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center space-x-4 backdrop-blur-sm">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(index)}
          className={`w-8 h-1 transition-all duration-300 ${
            activeSection === index
              ? "bg-gray-700"
              : "bg-gray-400 hover:bg-gray-600"
          }`}
          title={section.title}
        />
      ))}
    </div>
  );
};

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
  // Use a Map to store references to section DOM elements
  const sectionElementsRef = useRef<Map<string, HTMLElement>>(new Map());

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

  // Effect for IntersectionObserver to determine active section
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const sectionIndex = scrollSections.findIndex(
  //             (section) => section.id === entry.target.id
  //           );
  //           if (sectionIndex !== -1) {
  //             setActiveSection(sectionIndex);
  //             // When a new section becomes active, initially show the indicator
  //             // unless it's the last section. The scroll listener will then hide it if scrolled past 30%.
  //             setShowScrollIndicator(sectionIndex < scrollSections.length - 1);
  //           }
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.7, // Section is active when 70% visible
  //       rootMargin: "0px 0px -10% 0px",
  //     }
  //   );
  //   observerRef.current = observer;

  //   scrollSections.forEach((section) => {
  //     const element = document.getElementById(section.id);
  //     if (element) {
  //       observer.observe(element);
  //       sectionElementsRef.current.set(section.id, element); // Store the element reference
  //     }
  //   });

  //   return () => {
  //     if (observerRef.current) {
  //       observerRef.current.disconnect();
  //     }
  //   };
  // }, [loading]); // Dependency on loading to re-run observer setup if loading state affects DOM

  // // Effect for scroll listener to control indicator visibility based on 30% scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentSectionId = scrollSections[activeSection]?.id;
  //     if (!currentSectionId) return;

  //     const currentSectionElement =
  //       sectionElementsRef.current.get(currentSectionId);
  //     if (!currentSectionElement) return;

  //     const sectionTop = currentSectionElement.offsetTop;
  //     const sectionHeight = currentSectionElement.offsetHeight;
  //     const scrollY = window.scrollY;

  //     // Calculate the point where 30% of the section has been scrolled past
  //     const thresholdPoint = sectionTop + sectionHeight * 0.3;

  //     // Determine if the indicator should be shown:
  //     // 1. Scroll position is before the 30% threshold of the current section.
  //     // 2. It's not the very last section.
  //     const shouldShow =
  //       scrollY < thresholdPoint && activeSection < scrollSections.length - 1;

  //     setShowScrollIndicator(shouldShow);
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);
  //   // Call handler once on mount to set initial state correctly
  //   handleScroll();

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [activeSection, scrollSections]); // Re-run when activeSection changes or sections array changes (though sections is constant here)
  useEffect(() => {
    if (loading) return;

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
  }, [loading]);
  return (
    <>
      <div className="lg:block hidden">
        {!loading && (
          <>
            {/* Scroll Navigation (commented out as per original code) */}
            {/* <ScrollNav activeSection={activeSection} sections={scrollSections} /> */}
            {/* Scroll Indicator */}
            <ScrollIndicator showIndicator={showScrollIndicator} />
          </>
        )}
        {children}
      </div>
      <div className="lg:hidden block">{children}</div>
    </>
  );
};

export default ScrollWrapper;
