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
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-border
            bg-gradient-to-br
            from-primary/10
            via-background
            to-background
            p-8
            sm:rounded-[40px]
            sm:p-10
            md:p-14
            lg:p-16
          "
        >
          {/* Glow Effects */}

          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
              Let&apos;s Build Together
            </span>

            <h2
              id="services-cta-heading"
              className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Ready to Build Your Next Digital Product?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:leading-8">
              Whether you need a website, SaaS platform, mobile app, or
              custom enterprise software, our team is ready to transform
              your ideas into scalable digital experiences.
            </p>

            <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
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