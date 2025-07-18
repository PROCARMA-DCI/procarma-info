import { LottieWeb } from "@/components/Animation/lottie-web";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface Section {
  id: string;
  title?: string;
}

interface ScrollNavProps {
  activeSection: number;
  sections: Section[];
}
// Scroll Navigation Component
const ScrollNav = ({ activeSection, sections }: ScrollNavProps) => {
  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center space-x-4   backdrop-blur-sm">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(index)}
          className={`w-6 h-1 transition-all duration-300 ${
            activeSection === index
              ? "bg-blue-600"
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
}
// Scroll Indicator
const ScrollIndicator = ({ showIndicator }: ScrollIndicatorProps) => (
  <div
    className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-500 ${
      showIndicator ? "opacity-100" : "opacity-0"
    }`}
  >
    <div className="flex flex-col items-center text-gray-600">
      {/* <span className="text-sm mb-2">Scroll down</span>
      <ChevronDown className="w-6 h-6 animate-bounce" /> */}
      <div className="w-full h-20">
        <LottieWeb src="/json/mouse.json" />
      </div>
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
    <div>
      {!loading && (
        <>
          {/* Scroll Navigation */}
          <ScrollNav activeSection={activeSection} sections={scrollSections} />

          {/* Scroll Indicator */}
          <ScrollIndicator showIndicator={showScrollIndicator} />
        </>
      )}
      {children}
    </div>
  );
};

export default ScrollWrapper;
