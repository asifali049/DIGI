"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PortfolioHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="relative overflow-hidden border-b"
    >
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container relative py-16 sm:py-20 md:py-28 lg:py-36">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 32,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex shrink-0 rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Our Portfolio
          </span>

          <h1
            id="portfolio-heading"
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building Digital
            <br />
            Products That
            <span className="text-primary"> Deliver Results.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl px-1 text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
            Explore a curated selection of websites, SaaS platforms,
            mobile applications, AI products, dashboards, and enterprise
            software crafted with modern technologies and premium user
            experiences.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 md:mt-16 md:grid-cols-4">
            <div className="min-w-0">
              <dt className="text-sm leading-6 text-muted-foreground">
                Projects Delivered
              </dt>
              <dd className="mt-2 text-2xl font-bold sm:text-3xl">
                150+
              </dd>
            </div>

            <div className="min-w-0">
              <dt className="text-sm leading-6 text-muted-foreground">
                Industries
              </dt>
              <dd className="mt-2 text-2xl font-bold sm:text-3xl">
                30+
              </dd>
            </div>

            <div className="min-w-0">
              <dt className="text-sm leading-6 text-muted-foreground">
                Client Satisfaction
              </dt>
              <dd className="mt-2 text-2xl font-bold sm:text-3xl">
                98%
              </dd>
            </div>

            <div className="min-w-0">
              <dt className="text-sm leading-6 text-muted-foreground">
                Countries
              </dt>
              <dd className="mt-2 text-2xl font-bold sm:text-3xl">
                12+
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}