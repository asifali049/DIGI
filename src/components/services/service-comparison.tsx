"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { serviceComparison } from "@/constants/service-comparison";

export function ServiceComparison() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Compare Solutions
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Choose the Right Solution
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            Every business has different requirements. Here&apos;s a quick
            comparison to help you choose the best starting point.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {serviceComparison.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="flex h-full flex-col rounded-3xl border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-2xl sm:p-8"
            >
              <h3 className="text-xl font-semibold leading-tight sm:text-2xl">
                {service.title}
              </h3>

              <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                <p>
                  <strong className="text-foreground">
                    Timeline:
                  </strong>{" "}
                  {service.duration}
                </p>

                <p>
                  <strong className="text-foreground">
                    Ideal For:
                  </strong>{" "}
                  {service.idealFor}
                </p>
              </div>

              <div className="mt-6 flex flex-1 flex-col space-y-4 sm:mt-8">
                {service.includes.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm leading-6 sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}