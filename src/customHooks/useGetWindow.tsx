"use client";
import { useEffect, useRef, useState } from "react";
import { debounce } from "./useDebounce";

interface returnProps {
  width: number;
  height: number;
  scrollY: number;
  clientWindow: Window | undefined;
  condition: boolean;
}
type EventType = "resize" | "scroll";
const useGetWindow = (
  events?: EventType[],
  conditionFunc?: (w: Window) => boolean
): returnProps => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);
  const [clientWindow, setClientWindow] = useState<Window>();
  const [condition, setCondition] = useState(false);

  const handleEventRef = useRef(
    debounce(() => {
      if (conditionFunc) {
        if (conditionFunc(window)) {
          setCondition(true);
        } else {
          setCondition(false);
        }
      } else {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        setScrollY(window.scrollY);
        setClientWindow(window);
      }
    }, 100)
  );
  useEffect(() => {
    const handleEvent = handleEventRef.current;
    if (events && events.length > 0) {
      events.forEach((event) => {
        window.addEventListener(event, handleEvent);
      });
      handleEvent();
      return () => {
        events.forEach((event) => {
          window.removeEventListener(event, handleEvent);
        });
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { width, height, scrollY, clientWindow, condition };
};

export default useGetWindow;
