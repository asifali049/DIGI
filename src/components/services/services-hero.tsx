"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui";

const STATS = [
  {
    number: "150+",
    label: "Projects",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    number: "25+",
    label: "Experts",
  },
  {
    number: "10+",
    label: "Countries",
  },
] as const;

export function ServicesHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="services-hero-heading"
      className="relative overflow-hidden border-b"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent"
      />

      <div className="container mx-auto relative py-20 sm:py-24 lg:py-32 xl:py-36">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 32,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            Premium Digital Services
          </span>

          <h1
            id="services-hero-heading"
            className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Digital Products
            <br />
            Built for
            <span className="text-primary"> Growth.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg md:text-xl md:leading-8">
            We design and develop premium websites, SaaS platforms,
            mobile applications, eCommerce experiences, and custom
            software engineered for performance, scalability,
            accessibility, and business growth.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto"
            >
              Start Your Project
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              View Portfolio

              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-4 w-4"
              />
            </Button>
          </div>

          <dl className="mt-14 grid w-full max-w-5xl grid-cols-2 gap-8 border-t border-border pt-10 md:mt-16 md:grid-cols-4">
            {STATS.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center text-center"
              >
                <dd className="text-3xl font-bold tracking-tight lg:text-4xl">
                  {item.number}
                </dd>

                <dt className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}