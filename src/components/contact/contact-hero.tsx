"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative overflow-hidden border-b"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent"
      />

      <div className="container mx-auto px-4 relative py-16 sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-36">
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
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Contact Us
          </span>

          <h1
            id="contact-hero-heading"
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Let&apos;s Build
            <br />
            Something Amazing
          </h1>

          <p className="mx-auto mt-6 max-w-2xl px-1 text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
            Whether you have an idea, a product to improve, or a business to
            grow, our team is ready to help you create modern digital
            experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}