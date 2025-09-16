import { useEffect } from "react";

export default function useScrollToHash(offset: number = 0) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (!hash) return;

    let tries = 0;
    const timer = setInterval(() => {
      const el = document.querySelector(hash) as HTMLElement | null;
      if (el || tries > 20) {
        clearInterval(timer);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }
      tries++;
    }, 100);

    return () => clearInterval(timer);
  }, []);
}
