"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

import { useMounted } from "@/hooks/use-mounted";

export function CustomCursor() {
  const mounted = useMounted();

  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");

    if (!media.matches) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 10);
      mouseY.set(event.clientY - 10);
    };

    window.addEventListener("mousemove", handleMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (!mounted || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x,
        y,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-99999
        hidden
        h-5
        w-5
        rounded-full
        bg-primary
        mix-blend-difference
        will-change-transform
        md:block
        [@media(pointer:coarse)]:hidden
      "
    />
  );
}