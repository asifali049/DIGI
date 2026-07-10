"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui";

export function ServicesCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="services-cta-heading"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container">
        <motion.div
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
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-4xl border border-border bg-linear-to-br from-primary/10 via-background to-background p-6 sm:rounded-[36px] sm:p-8 md:rounded-[40px] md:p-12 lg:p-16"
        >
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
              Let&apos;s Build Together
            </span>

            <h2
              id="services-cta-heading"
              className="mt-5 text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Ready to Build Your Next Digital Product?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
              Whether you need a website, SaaS platform, mobile app, or custom
              enterprise software, our team is ready to transform your ideas
              into scalable digital experiences.
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 h-4 w-4 shrink-0"
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