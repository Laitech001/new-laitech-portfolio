"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  count: number;
  suffix?: string;
}

export default function AnimatedCounter({ count, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [value, setValue] = useState(() => (prefersReducedMotion ? count : 0));
  const hasAnimated = useRef(prefersReducedMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 1400;
            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * count));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [count]);

  return (
    <span ref={ref} className="font-display text-[28px] font-bold text-text">
      {value}
      {suffix}
    </span>
  );
}
