"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: React.ElementType;
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
  return (
    <motion.article
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-background/70 p-6 backdrop-blur-xl",
        "transition-all duration-500 hover:border-primary/40 hover:shadow-2xl",
        "sm:p-8",
        className
      )}
    >
      <div className="absolute inset-0 bg-liner-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:mb-6 sm:h-14 sm:w-14">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>

        <h3 className="text-xl font-semibold leading-tight sm:text-2xl">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
          {features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border px-3 py-1 text-xs leading-5"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8 sm:pt-10">
          <div className="flex items-center text-sm font-medium text-primary">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}