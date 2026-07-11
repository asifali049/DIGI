"use client";

import { motion, useReducedMotion } from "framer-motion";

import { serviceBenefits } from "@/constants/service-benefits";

export function ServiceBenefits() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="service-benefits-heading"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center lg:mb-20">
          <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            Why Choose Us
          </span>

          <h2
            id="service-benefits-heading"
            className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Built for Quality. Designed for Growth.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:leading-8">
            Every project is crafted with performance, accessibility,
            maintainability, and long-term business value in mind.
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
          {serviceBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
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
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
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
                  hover:shadow-xl
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
                    group-hover:scale-110
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-balance text-xl font-semibold leading-tight sm:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground sm:text-base md:leading-8">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}