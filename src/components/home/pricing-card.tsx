"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  features: string[];
  popular?: boolean;
  cta: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  yearly: boolean;
}

export function PricingCard({
  plan,
  yearly,
}: PricingCardProps) {
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "relative flex h-full flex-col rounded-3xl border bg-background/60 p-6 backdrop-blur-xl transition-all sm:p-7 lg:p-8",
        plan.popular
          ? "border-primary shadow-2xl"
          : "border-border"
      )}
    >
      {plan.popular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground shadow-lg sm:px-4 sm:py-2 sm:text-xs">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold sm:text-2xl">
        {plan.name}
      </h3>

      <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
        {plan.description}
      </p>

      <div className="mt-8 wrap-break-words">
        {price === null ? (
          <span className="text-4xl font-bold sm:text-5xl">
            Custom
          </span>
        ) : (
          <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
            <span className="text-4xl font-bold leading-none sm:text-5xl">
              ₹{price.toLocaleString()}
            </span>

            <span className="text-sm text-muted-foreground sm:text-base">
              /{yearly ? "year" : "month"}
            </span>
          </div>
        )}
      </div>

      <div className="mt-8 flex-1 space-y-4">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3"
          >
            <Check
              className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary"
            />

            <span className="text-sm leading-6 text-muted-foreground">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={clsx(
          "mt-8 min-h-12 w-full rounded-xl px-6 py-3 text-sm font-semibold transition-all sm:mt-10 sm:text-base",
          plan.popular
            ? "bg-primary text-primary-foreground hover:opacity-90"
            : "border hover:bg-accent"
        )}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
}