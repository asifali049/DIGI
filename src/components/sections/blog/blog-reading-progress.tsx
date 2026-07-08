"use client";

import { useEffect, useRef, useState } from "react";

export function BlogReadingProgress() {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;

        const documentHeight =
          document.documentElement.scrollHeight -
          window.innerHeight;

        if (documentHeight <= 0) {
          setProgress((previous) =>
            previous === 0 ? previous : 0
          );
          return;
        }

        const nextProgress = Math.min(
          100,
          Math.max(
            0,
            (scrollTop / documentHeight) * 100
          )
        );

        setProgress((previous) =>
          previous === nextProgress
            ? previous
            : nextProgress
        );
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-100 h-1 bg-transparent"
    >
      <div
        className="h-full bg-primary transition-[width] duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}