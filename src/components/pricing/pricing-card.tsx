"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { PricingCard as PricingCardType } from "@/constants/agency-pricing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  card: PricingCardType;
}

export function PricingCard({ card }: PricingCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 24 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={
        shouldReduceMotion ? undefined : { y: -8 }
      }
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-6 backdrop-blur-xl transition-colors duration-300 sm:p-8",
        card.popular
          ? "border-violet-500/50 bg-card shadow-2xl shadow-violet-500/10 lg:-translate-y-4"
          : "border-border bg-card/60 hover:border-violet-500/30"
      )}
    >
      {card.popular && (
        <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
          <Sparkles className="h-3 w-3" />
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold text-foreground sm:text-2xl">
        {card.name}
      </h3>

      <div className="mt-4 flex items-baseline gap-1">
        <span
          className={cn(
            "font-black tracking-tight text-foreground",
            card.price.length > 10
              ? "text-2xl sm:text-3xl"
              : "text-4xl sm:text-5xl"
          )}
        >
          {card.price}
        </span>
      </div>

      {card.delivery && (
        <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
          Delivery: {card.delivery}
        </p>
      )}

      {card.bestFor && card.bestFor.length > 0 && (
        <div className="mt-5 border-t border-border pt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Best For
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {card.bestFor.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <Button
        asChild
        size="lg"
        variant={card.popular ? "default" : "outline"}
        className="mt-6 w-full"
      >
        <Link href="/contact">{card.cta}</Link>
      </Button>

      <ul className="mt-6 space-y-3 border-t border-border pt-6">
        {card.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-500 dark:text-violet-400" />

            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
