"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

export function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: FAQItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-card/70
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-primary/20
      "
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-4
          text-left
          transition-colors
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary/40
          focus-visible:ring-offset-2
          focus-visible:ring-offset-background
          sm:px-6
          sm:py-5
        "
      >
        <span
          className="
            flex-1
            text-base
            font-semibold
            leading-7
            text-foreground
            sm:text-lg
          "
        >
          {question}
        </span>

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: open ? 180 : 0,
                }
          }
          transition={{
            duration: 0.2,
          }}
          className="shrink-0 text-muted-foreground"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={
              shouldReduceMotion
                ? undefined
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden"
          >
            <p
              className="
                px-5
                pb-5
                text-sm
                leading-7
                text-muted-foreground
                sm:px-6
                sm:pb-6
                sm:text-base
              "
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}