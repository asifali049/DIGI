"use client";

import { motion, useReducedMotion } from "framer-motion";

import { projectTechnologies } from "@/constants/project-technologies";

export function ProjectTechnologies() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="project-technologies-heading"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Our Technology
          </span>

          <h2
            id="project-technologies-heading"
            className="mt-5 text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Technologies Behind Our Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            Every solution is engineered using modern, scalable, and
            production-ready technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {projectTechnologies.map((group, index) => (
            <motion.article
              key={group.title}
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
                      y: -6,
                    }
              }
              className="flex h-full flex-col rounded-3xl border border-border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-xl sm:p-8"
            >
              <h3 className="text-xl font-semibold leading-tight text-balance sm:text-2xl">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-2 text-center text-xs font-medium transition-colors hover:border-primary hover:text-primary sm:px-4 sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}