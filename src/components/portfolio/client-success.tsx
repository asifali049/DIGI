"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

import { clientSuccess } from "@/constants/client-success";

export function ClientSuccess() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="client-success-heading"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Client Success
          </span>

          <h2
            id="client-success-heading"
            className="mt-5 text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Trusted by Growing Businesses
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            Every successful project is built on collaboration,
            transparency, and measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {clientSuccess.map((item, index) => (
            <motion.article
              key={item.id}
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
                      y: -8,
                    }
              }
              className="flex h-full flex-col rounded-3xl border border-border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-xl sm:p-8"
            >
              <div
                className="mb-5 flex gap-1 sm:mb-6"
                aria-label={`${item.rating} out of 5 stars`}
              >
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                “{item.review}”
              </blockquote>

              <footer className="mt-auto border-t border-border pt-6">
                <h3 className="text-balance text-xl font-semibold sm:text-2xl">
                  {item.company}
                </h3>

                <p className="mt-1 text-sm font-medium text-primary">
                  {item.project}
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.author} • {item.industry}
                </p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}