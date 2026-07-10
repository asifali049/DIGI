"use client";

import { motion, useReducedMotion } from "framer-motion";

import { technologyStack } from "@/constants/technology-stack";

export function TechnologyStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="technology-stack-heading"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent"
      />

      <div className="container relative">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Technology Stack
          </span>

          <h2
            id="technology-stack-heading"
            className="mt-5 text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Modern Technologies
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            We use reliable, scalable, and future-proof technologies to build
            products that perform today and remain maintainable tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          {technologyStack.map((group, index) => (
            <motion.article
              key={group.category}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
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
                      y: -6,
                    }
              }
              className="group flex h-full flex-col rounded-3xl border border-border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-2xl sm:p-8"
            >
              <h3 className="text-balance text-xl font-semibold leading-tight sm:text-2xl">
                {group.category}
              </h3>

              <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                {group.technologies.map((tech) => (
                  <motion.li
                    key={tech}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.08,
                          }
                    }
                    className="list-none rounded-full border border-border bg-background px-3 py-2 text-center text-xs font-medium transition-colors hover:border-primary hover:text-primary sm:px-4 sm:text-sm"
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}