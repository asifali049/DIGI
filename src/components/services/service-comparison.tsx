"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

import { serviceComparison } from "@/constants/service-comparison";

export function ServiceComparison() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="service-comparison-heading"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center lg:mb-20">
          <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            Compare Solutions
          </span>

          <h2
            id="service-comparison-heading"
            className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Choose the Right Solution
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:leading-8">
            Every business has different requirements. Here&apos;s a quick
            comparison to help you choose the best starting point.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {serviceComparison.map((service, index) => (
            <motion.article
              key={service.title}
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
              <h3 className="text-balance text-xl font-semibold leading-tight sm:text-2xl">
                {service.title}
              </h3>

              <dl className="mt-5 space-y-4 text-sm text-muted-foreground sm:text-base">
                <div>
                  <dt className="inline font-semibold text-foreground">
                    Timeline:
                  </dt>{" "}
                  <dd className="inline">{service.duration}</dd>
                </div>

                <div>
                  <dt className="inline font-semibold text-foreground">
                    Ideal For:
                  </dt>{" "}
                  <dd className="inline">{service.idealFor}</dd>
                </div>
              </dl>

              <ul className="mt-8 flex flex-1 flex-col gap-4">
                {service.includes.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    />

                    <span className="text-sm leading-6 sm:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}