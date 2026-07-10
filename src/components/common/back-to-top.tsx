"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const isVisible = window.scrollY > 500;

      setVisible((prev) =>
        prev === isVisible ? prev : isVisible
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.button
          type="button"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                }
          }
          transition={{
            duration: 0.25,
          }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed
            bottom-6
            right-4
            z-[9999]
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-border
            bg-background/80
            text-foreground
            shadow-xl
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-110
            hover:bg-primary
            hover:text-primary-foreground
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary/40
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background
            active:scale-95
            sm:right-6
          "
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}