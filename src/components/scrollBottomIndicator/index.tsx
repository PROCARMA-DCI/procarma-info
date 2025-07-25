import { ScrollIndicator } from "@/app/_page_component/home/ScrollWrapper";
import { useEffect, useState, useRef } from "react";

const MyComponent = () => {
  const [showIndicator, setShowIndicator] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleActivity = () => {
      setShowIndicator(false);

      // Clear previous timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timer to show indicator after 2 seconds
      timeoutRef.current = setTimeout(() => {
        setShowIndicator(true);
      }, 2000);
    };

    // Attach listeners
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("wheel", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("wheel", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      {showIndicator && (
        <ScrollIndicator showIndicator={true} className="left-0 translate-0" />
      )}
    </div>
  );
};

export default MyComponent;
