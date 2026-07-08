"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { CTABackground } from "./cta-background";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[28px] border bg-liner-to-br from-primary/10 via-background to-primary/5 p-6 sm:rounded-4xl sm:p-8 lg:p-12 xl:p-16"
        >
          {/* Animated Background */}
          <CTABackground />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border bg-background/50 px-3 py-1.5 text-xs font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
              Let&apos;s Build Something Amazing
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
              Transform your ideas into premium digital products.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              From websites and mobile apps to enterprise software, we design
              and develop fast, scalable, and beautiful digital experiences.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:opacity-90 sm:w-auto sm:text-base"
              >
                Book Free Consultation

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border bg-background/50 px-6 py-3 text-sm font-semibold backdrop-blur transition-all hover:scale-105 hover:bg-accent sm:w-auto sm:text-base"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}