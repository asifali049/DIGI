"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  distance?: number;
  duration?: number;
}

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  distance = 60,
  duration = 1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "left":
        x = -distance;
        break;
      case "right":
        x = distance;
        break;
      case "down":
        y = -distance;
        break;
      default:
        y = distance;
    }

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        x,
        y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [delay, direction, distance, duration]);

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
}