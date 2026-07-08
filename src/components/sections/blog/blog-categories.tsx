"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Development",
  "Design",
  "AI",
  "Business",
  "startup",
  "Marketing",
  "Case Studies",
] as const;

interface BlogCategoriesProps {
  value: string;
  onChange: (category: string) => void;
}

export function BlogCategories({
  value,
  onChange,
}: BlogCategoriesProps) {
  return (
    <section className="py-6 sm:py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {categories.map((category) => {
            const isActive = value === category;

            return (
              <Button
                key={category}
                type="button"
                variant={isActive ? "default" : "outline"}
                onClick={() => onChange(category)}
                aria-pressed={isActive}
                className={cn(
                  "min-h-10 rounded-full px-4 text-sm transition-all duration-300 sm:px-5",
                  !isActive && "hover:-translate-y-0.5"
                )}
              >
                {category}
              </Button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}