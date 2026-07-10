"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface PricingToggleProps {
  yearly: boolean;
  onChange: (value: boolean) => void;
}

export function PricingToggle({
  yearly,
  onChange,
}: PricingToggleProps) {
  return (
    <div
      role="tablist"
      aria-label="Pricing plan"
      className="
        inline-flex
        max-w-full
        items-center
        rounded-full
        border
        border-border
        bg-card
        p-1
        shadow-sm
      "
    >
      <button
        type="button"
        role="tab"
        aria-selected={!yearly}
        onClick={() => onChange(false)}
        className={clsx(
          "relative flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6",
          !yearly
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {!yearly && (
          <motion.div
            layoutId="pricing-toggle"
            className="absolute inset-0 rounded-full bg-primary"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        )}

        <span className="relative z-10 whitespace-nowrap">
          Monthly
        </span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={yearly}
        onClick={() => onChange(true)}
        className={clsx(
          "relative flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6",
          yearly
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {yearly && (
          <motion.div
            layoutId="pricing-toggle"
            className="absolute inset-0 rounded-full bg-primary"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        )}

        <span className="relative z-10 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          <span className="whitespace-nowrap">
            Yearly
          </span>

          <span
            className="
              whitespace-nowrap
              rounded-full
              bg-green-500/15
              px-2
              py-0.5
              text-[10px]
              font-semibold
              text-green-700
              dark:text-green-400
              sm:text-xs
            "
          >
            Save 20%
          </span>
        </span>
      </button>
    </div>
  );
}