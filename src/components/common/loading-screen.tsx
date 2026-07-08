"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-5xl font-bold tracking-tight"
            >
              Digital Agency
            </motion.div>

            <div className="h-1 w-56 overflow-hidden rounded-full bg-border">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-primary"
              />
            </div>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="text-sm text-muted-foreground"
            >
              Crafting premium digital experiences...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}