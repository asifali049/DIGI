"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { caseStudies } from "@/constants/case-studies";

export function CaseStudies() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="case-studies-heading"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Case Studies
          </span>

          <h2
            id="case-studies-heading"
            className="mt-5 text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Real Problems.
            <br />
            Real Solutions.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            Every project starts with a business challenge. Our focus is to
            deliver measurable outcomes through thoughtful design and scalable
            engineering.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
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
                duration: 0.6,
              }}
              className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 100vw,
                         (max-width:1024px) 90vw,
                         50vw"
                  className={[
                    "object-cover transition-transform duration-700",
                    !shouldReduceMotion && "group-hover:scale-105",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              </div>

              <div>
                <h3 className="text-balance text-2xl font-bold leading-tight sm:text-3xl">
                  {study.title}
                </h3>

                <section className="mt-6 sm:mt-8">
                  <h4 className="font-semibold text-primary">
                    Challenge
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {study.challenge}
                  </p>
                </section>

                <section className="mt-6 sm:mt-8">
                  <h4 className="font-semibold text-primary">
                    Solution
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {study.solution}
                  </p>
                </section>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3">
                  {study.results.map((result) => (
                    <div
                      key={result}
                      className="rounded-2xl border border-border bg-background/60 p-4 text-center backdrop-blur sm:p-5"
                    >
                      <p className="text-sm font-medium leading-6">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}