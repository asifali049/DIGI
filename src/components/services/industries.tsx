"use client";

import { motion, useReducedMotion } from "framer-motion";

import { industries } from "@/constants/industries";

export function Industries() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="industries-heading"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center lg:mb-20">
          <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            Industries
          </span>

          <h2
            id="industries-heading"
            className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Solutions for Every Industry
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:leading-8">
            We build digital products tailored to the unique challenges of
            different industries, combining modern technology with
            business-focused solutions.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:gap-8
            xl:grid-cols-3
          "
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.96,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: "easeOut",
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                      }
                }
                className="
                  group
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-border
                  bg-card/60
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-primary/30
                  hover:shadow-2xl
                  sm:p-8
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-balance text-xl font-semibold leading-tight sm:text-2xl">
                  {industry.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground sm:text-base md:leading-8">
                  {industry.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}