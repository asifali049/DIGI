"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, shouldReduceMotion ? 300 : 1800);

    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {loading && (
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 1 }
          }
          exit={
            shouldReduceMotion
              ? {}
              : { opacity: 0 }
          }
          transition={{
            duration: 0.6,
          }}
          className="
            fixed
            inset-0
            z-999999
            flex
            items-center
            justify-center
            bg-background
          "
        >
          <div className="flex flex-col items-center gap-6 px-6 text-center sm:gap-8">
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      scale: 0.8,
                      opacity: 0,
                    }
              }
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                text-3xl
                font-bold
                tracking-tight
                text-foreground
                sm:text-4xl
                lg:text-5xl
              "
            >
              Digital Agency
            </motion.div>

            <div className="h-1 w-44 overflow-hidden rounded-full bg-border sm:w-56">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.6,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-primary"
              />
            </div>

            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0 }
              }
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                max-w-xs
                text-sm
                text-muted-foreground
                sm:max-w-md
              "
            >
              Crafting premium digital experiences...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}