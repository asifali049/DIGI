"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

export function CTABackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Top Left Glow */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 20, 0],
                y: [0, -20, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          -top-32
          h-96
          w-96
          rounded-full
          bg-primary/20
          blur-[120px]
          will-change-transform
        "
      />

      {/* Bottom Right Glow */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -25, 0],
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-40
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-blue-500/15
          blur-[150px]
          dark:bg-cyan-400/10
          will-change-transform
        "
      />

      {/* Center Glow */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.25, 0.5, 0.25],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[100px]
          will-change-transform
        "
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          opacity-[0.04]
          text-foreground
        "
        style={{
          backgroundImage: `
            linear-gradient(to right,currentColor 1px,transparent 1px),
            linear-gradient(to bottom,currentColor 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Noise */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          text-foreground
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,currentColor 1px,transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
    </>
  );
}