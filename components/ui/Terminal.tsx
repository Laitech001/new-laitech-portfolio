"use client";

import { useEffect, useRef, useState } from "react";
import type { TerminalLine } from "@/types";

interface TerminalProps {
  sequence: TerminalLine[];
}

interface RenderedLine {
  type: TerminalLine["type"];
  text: string;
  done: boolean;
}

export default function Terminal({ sequence }: TerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [lines, setLines] = useState<RenderedLine[]>(() =>
    prefersReducedMotion
      ? sequence.map((line) => ({ ...line, done: true }))
      : []
  );
  const [showCursor, setShowCursor] = useState(prefersReducedMotion);
  const started = useRef(prefersReducedMotion);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || started.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            runSequence();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();

    async function runSequence() {
      for (let i = 0; i < sequence.length; i++) {
        const line = sequence[i];

        if (line.type === "cmd") {
          setLines((prev) => [...prev, { ...line, text: "", done: false }]);
          for (let c = 0; c < line.text.length; c++) {
            await wait(28 + Math.random() * 30);
            setLines((prev) => {
              const next = [...prev];
              next[next.length - 1] = {
                ...next[next.length - 1],
                text: line.text.slice(0, c + 1),
              };
              return next;
            });
          }
          await wait(220);
        } else {
          setLines((prev) => [...prev, { ...line, done: true }]);
          await wait(320);
        }
      }
      setShowCursor(true);
    }
  }, [sequence]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div ref={containerRef} className="relative">
      <div
        className="overflow-hidden rounded-3xl border border-line-strong shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(160deg, color-mix(in srgb, var(--panel) 85%, var(--electric) 4%), var(--panel-2))",
        }}
      >
        <div className="flex items-center gap-3 border-b border-line px-4.5 py-3.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </div>
          <span className="ml-1 font-mono text-xs text-text-faint">
            build — production
          </span>
        </div>

        <div
          ref={bodyRef}
          className="min-h-70 overflow-hidden px-5 py-5.5 font-mono text-[13.5px] leading-[1.9] sm:min-h-60"
        >
          {lines.map((line, i) => {
            const isLast = i === lines.length - 1;
            if (line.type === "cmd") {
              return (
                <div key={i} className="flex flex-wrap items-baseline gap-2.5">
                  <span className="shrink-0 text-ice">$</span>
                  <span className="text-text">
                    {line.text}
                    {isLast && showCursor === false && (
                      <span className="animate-blink ml-0.5 inline-block h-3.75 w-1.75 translate-y-0.5 bg-ice align-text-bottom" />
                    )}
                  </span>
                </div>
              );
            }
            return (
              <div
                key={i}
                className={`block pl-5 ${
                  line.type === "ok"
                    ? "text-success"
                    : line.type === "metric"
                      ? "font-semibold text-ice"
                      : "text-text-dim"
                }`}
              >
                {line.text}
                {isLast && showCursor && (
                  <span className="animate-blink ml-1.5 inline-block h-3.75 w-1.75 translate-y-0.5 bg-ice align-text-bottom" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute -bottom-4.5 right-6 flex items-center gap-2 rounded-full border border-line-strong bg-ink px-4 py-2.5 font-mono text-xs font-medium text-success shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        0 critical issues
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
