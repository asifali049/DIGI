"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe2 } from "lucide-react";

import { serviceAreas } from "@/constants/service-areas";

export function ServiceAreas() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="service-areas-heading"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Service Areas
          </span>

          <h2
            id="service-areas-heading"
            className="mt-5 text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Working With Clients Worldwide
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            We deliver high-quality digital products remotely for businesses
            across multiple industries and regions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceAreas.map((area, index) => (
            <motion.article
              key={area.title}
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
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
              >
                <Globe2 className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <h3 className="mt-5 text-balance text-xl font-semibold leading-tight sm:mt-6 sm:text-2xl">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}