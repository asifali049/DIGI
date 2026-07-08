"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Background */}
      <div className="absolute inset-0 bg-liner-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container relative py-16 sm:py-20 md:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium backdrop-blur sm:px-4 sm:text-sm">
            Premium Digital Services
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Digital Products
            <br />
            Built for
            <span className="text-primary"> Growth.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl px-1 text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
            We design and develop premium websites, SaaS platforms,
            mobile applications, eCommerce experiences, and custom
            software engineered for performance, scalability,
            accessibility, and business growth.
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Start Your Project
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 md:mt-16 md:grid-cols-4">
            {[
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
            ].map((item) => (
              <div
                key={item.label}
                className="min-w-0"
              >
                <h3 className="text-2xl font-bold sm:text-3xl">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}