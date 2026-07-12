"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui";

export function PortfolioCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="portfolio-cta-heading"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10" />

      <div className="container mx-auto px-4 relative sm:px-6 lg:px-8">
        <motion.div
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] border border-border bg-background/80 p-8 backdrop-blur-xl sm:p-10 md:p-16"
        >
          {/* Background Glow */}
          <div
            aria-hidden="true"
            className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-border px-4 py-1 text-sm font-medium">
              Start Your Project
            </span>

            <h2
              id="portfolio-cta-heading"
              className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-6xl"
            >
              Let&apos;s Build Your
              <br />
              Next Success Story
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Whether you&apos;re launching a startup, scaling a SaaS platform,
              modernizing an enterprise application, or building a custom
              digital product, we&apos;re ready to help.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Project
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  Explore Services
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 h-4 w-4"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}