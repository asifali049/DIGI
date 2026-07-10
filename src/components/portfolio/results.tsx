"use client";

import { motion, useReducedMotion } from "framer-motion";

import { results } from "@/constants/results";

export function Results() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="results-heading"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Results
          </span>

          <h2
            id="results-heading"
            className="mt-5 text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Numbers That Speak
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            We focus on measurable outcomes that help businesses grow,
            improve performance, and deliver better user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((item, index) => (
            <motion.article
              key={item.label}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.08,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -8,
                    }
              }
              className="flex h-full flex-col rounded-3xl border border-border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-xl sm:p-8"
            >
              <h3 className="text-4xl font-bold text-primary sm:text-5xl">
                {item.value}
              </h3>

              <h4 className="mt-5 text-balance text-xl font-semibold leading-tight sm:mt-6 sm:text-2xl">
                {item.label}
              </h4>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}