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
          : {
              y: -12,
            }
      }
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[32px]",
        "border border-border/70",
        "bg-card/70 backdrop-blur-2xl",
        "p-6 sm:p-8",
        "transition-all duration-500",
        "hover:border-primary/40",
        "hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)]",
        className
      )}
    >
      {/* Gradient Glow */}

      <div
        aria-hidden
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          "bg-gradient-to-br from-primary/10 via-transparent to-cyan-400/5",
          !shouldReduceMotion &&
            "group-hover:opacity-100"
        )}
      />

      {/* Top Accent */}

      <div
        aria-hidden
        className={cn(
          "absolute left-0 top-0 h-1 w-full",
          "bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-400",
          "scale-x-0 origin-left transition-transform duration-500",
          !shouldReduceMotion &&
            "group-hover:scale-x-100"
        )}
      />

      <div className="relative flex flex-1 flex-col">
        <header>
          <motion.div
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: 6,
                    scale: 1.08,
                  }
            }
            transition={{
              duration: 0.25,
            }}
            className={cn(
              "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl",
              "bg-primary/10 text-primary",
              "ring-1 ring-primary/10"
            )}
          >
            <Icon className="h-7 w-7" />
          </motion.div>

          <h3 className="text-balance text-2xl font-bold leading-tight tracking-tight">
            {title}
          </h3>
        </header>

        <p className="mt-5 text-base leading-8 text-muted-foreground">
          {description}
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "rounded-full border border-border",
                "bg-background/70",
                "px-3 py-1.5",
                "text-xs font-medium",
                "transition-colors duration-300",
                "group-hover:border-primary/20"
              )}
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-10">
          <div
            className={cn(
              "inline-flex items-center",
              "font-semibold text-primary"
            )}
          >
            Learn More

            <ArrowRight
              className={cn(
                "ml-2 h-4 w-4 transition-transform duration-300",
                !shouldReduceMotion &&
                  "group-hover:translate-x-2"
              )}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}