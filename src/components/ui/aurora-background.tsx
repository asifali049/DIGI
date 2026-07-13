"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-200px] top-[-120px] h-[520px] w-[520px] rounded-full bg-violet-600/30 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-180px] top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute bottom-[-240px] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]"
      />
    </div>
  );
}