import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  initialVisible?: boolean;
}

/**
 * Custom IntersectionObserver hook that re-triggers animations both on entering
 * and exiting the viewport, adhering to high accessibility and progressive enhancement.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', initialVisible = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState<boolean>(initialVisible);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Re-triggers both when scrolling into and out of view
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
