"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/common/reveal";

export function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[28px] border bg-liner-to-br from-primary/10 via-background to-primary/5 p-6 sm:rounded-4xl sm:p-8 lg:rounded-[40px] lg:p-12 xl:p-16"
          >
            {/* Glow */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                Let&apos;s Work Together
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">
                Ready to build your next digital product?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                Whether you&apos;re launching a startup, scaling your business,
                or modernizing enterprise software, we&apos;re here to help you
                turn ideas into high-performance digital products.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
                >
                  Start Your Project

                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border bg-background/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-all hover:scale-105 hover:bg-accent sm:w-auto sm:px-7 sm:py-4 sm:text-base"
                >
                  Explore Services

                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}