"use client";

import { motion } from "framer-motion";

import { industries } from "@/constants/industries";

export function Industries() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Industries
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Solutions for Every Industry
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            We build digital products tailored to the unique challenges of
            different industries, combining modern technology with
            business-focused solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group flex h-full flex-col rounded-3xl border bg-background/70 p-6 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:shadow-2xl sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-tight sm:mt-6 sm:text-2xl">
                  {industry.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
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