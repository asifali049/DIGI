"use client";

import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import { portfolio } from "@/constants/portfolio";
import { ProjectCard } from "./project-card";

const categories = [
  "All",
  "Healthcare",
  "Agency",
  "Food",
  "Education",
  "Real Estate",
  "AI",
] as const;

export function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const projects = useMemo(() => {
    const featured = portfolio.filter((item) => item.featured);

    if (activeCategory === "All") {
      return featured;
    }

    return featured.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Featured Work
          </span>

          <h2
            id="featured-projects-heading"
            className="mt-5 text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Selected Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            Explore some of our most impactful digital products built for
            startups, enterprises, and growing businesses.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={[
                  "rounded-full border border-border px-4 py-2 text-xs font-medium transition-all",
                  "min-h-10 whitespace-nowrap",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-primary",
                  "focus-visible:ring-offset-2",
                  "sm:px-5 sm:text-sm",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:border-primary",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        <motion.div
          layout={!shouldReduceMotion}
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.length > 0 ? (
              projects.map((project) => (
                <motion.div
                  key={project.id}
                  layout={!shouldReduceMotion}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.95,
                        }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          scale: 0.95,
                        }
                  }
                  transition={{
                    duration: 0.35,
                  }}
                  className="h-full"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full rounded-2xl border border-border bg-card p-10 text-center"
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                      }
                }
                animate={{
                  opacity: 1,
                }}
              >
                <h3 className="text-lg font-semibold">
                  No featured projects found
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Try selecting another category.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}