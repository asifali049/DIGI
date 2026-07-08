"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

import { discoveryCalls } from "@/constants/discovery-call";
import { Button } from "@/components/ui";

export function DiscoveryCall() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Discovery Call
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s Talk About Your Project
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            Choose the meeting that best matches your requirements. We&apos;ll help
            you define the right solution, technology, and roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {discoveryCalls.map((call, index) => (
            <motion.article
              key={call.duration}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="flex h-full flex-col rounded-3xl border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-xl sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-14 sm:w-14">
                <CalendarDays className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <p className="mt-5 text-sm font-medium text-primary sm:mt-6">
                {call.duration}
              </p>

              <h3 className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
                {call.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {call.description}
              </p>

              <Button
                asChild
                size="lg"
                className="mt-auto w-full pt-8 sm:pt-10"
              >
                <Link href="/contact">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Link>
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}