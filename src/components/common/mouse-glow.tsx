"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

import { useMounted } from "@/hooks/use-mounted";

export function MouseGlow() {
  const mounted = useMounted();

  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  useEffect(() => {
    if (
      shouldReduceMotion ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }



    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 200);
      mouseY.set(event.clientY - 200);
    };

    window.addEventListener("mousemove", handleMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  const isEnabled =
    mounted &&
    !shouldReduceMotion &&
    !window.matchMedia("(pointer: coarse)").matches;

  if (!isEnabled) {
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
        z-0
        h-100
        w-100
        rounded-full
        bg-primary/15
        blur-[120px]
        will-change-transform
      "
    />
  );
}