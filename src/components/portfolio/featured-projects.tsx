"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Featured Work
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Selected Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            Explore some of our most impactful digital products built for
            startups, enterprises, and growing businesses.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:text-sm ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}