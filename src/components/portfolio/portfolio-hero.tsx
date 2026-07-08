"use client";

import { motion } from "framer-motion";

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 bg-liner-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container relative py-16 sm:py-20 md:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Our Portfolio
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
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

          <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 md:mt-16 md:grid-cols-4">
            <div className="min-w-0">
              <h3 className="text-2xl font-bold sm:text-3xl">
                150+
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Projects Delivered
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-2xl font-bold sm:text-3xl">
                30+
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Industries
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-2xl font-bold sm:text-3xl">
                98%
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Client Satisfaction
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-2xl font-bold sm:text-3xl">
                12+
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Countries
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}