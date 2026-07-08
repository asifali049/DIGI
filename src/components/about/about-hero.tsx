"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-36">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
            About Our Agency
          </span>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Building premium digital experiences for ambitious businesses.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
            We combine strategy, design, and engineering to create websites,
            SaaS products, mobile apps, and enterprise software that help
            companies scale faster.
          </p>
        </motion.div>
      </div>
    </section>
  );
}