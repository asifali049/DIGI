"use client";

import type { ElementType } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: ElementType;
  title: string;
  description: string;
  features: readonly string[];
  className?: string;
};

const hoverAnimation = {
  y: -10,
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  className,
}: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={
        shouldReduceMotion
          ? undefined
          : hoverAnimation
      }
      transition={{
        duration: 0.3,
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl",
        "border border-border",
        "bg-background/70 backdrop-blur-xl",
        "p-6 sm:p-8",
        "transition-all duration-500",
        "hover:border-primary/40 hover:shadow-2xl",
        className
      )}
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0",
          "bg-linear-to-br",
          "from-primary/10 via-transparent to-transparent",
          "opacity-0 transition-opacity duration-500",
          !shouldReduceMotion &&
            "group-hover:opacity-100"
        )}
      />

      <div className="relative flex flex-1 flex-col">
        <header>
          <div
            aria-hidden="true"
            className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:mb-6 sm:h-14 sm:w-14"
          >
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>

          <h3 className="text-balance text-xl font-semibold leading-tight sm:text-2xl">
            {title}
          </h3>
        </header>

        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8">
          {features.map((feature) => (
            <li
              key={feature}
              className="list-none rounded-full border border-border px-3 py-1 text-center text-xs leading-5"
            >
              {feature}
            </li>
          ))}
        </ul>

        <footer className="mt-auto pt-8 sm:pt-10">
          <div className="flex items-center text-sm font-medium text-primary">
            Learn More

            <ArrowRight
              aria-hidden="true"
              className={cn(
                "ml-2 h-4 w-4 shrink-0 transition-transform duration-300",
                !shouldReduceMotion &&
                  "group-hover:translate-x-2"
              )}
            />
          </div>
        </footer>
      </div>
    </motion.article>
  );
}