"use client";

import { motion, useReducedMotion } from "framer-motion";

import { serviceProcess } from "@/constants/service-process";

export function ServiceProcess() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="service-process-heading"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center lg:mb-20">
          <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            Our Process
          </span>

          <h2
            id="service-process-heading"
            className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            From Idea to Launch
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:leading-8">
            Every project follows a structured workflow to ensure quality,
            transparency, and predictable delivery.
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-6 top-0 hidden w-px bg-border sm:block md:left-7"
          />

          <ol className="space-y-8 sm:space-y-10 lg:space-y-12">
            {serviceProcess.map((item, index) => (
              <motion.li
                key={item.step}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 32,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: "easeOut",
                }}
                className="relative flex flex-col gap-5 sm:flex-row sm:gap-6 lg:gap-8"
              >
                {/* Step Number */}
                <div
                  aria-hidden="true"
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-base font-bold text-primary shadow-lg sm:h-14 sm:w-14 sm:text-lg"
                >
                  {item.step}
                </div>

                {/* Card */}
                <article className="flex-1 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-xl sm:p-8">
                  <h3 className="text-balance text-xl font-semibold leading-tight sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base md:leading-8">
                    {item.description}
                  </p>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}