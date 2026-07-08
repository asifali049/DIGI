"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui";

export function ContactCta() {
  return (
    <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] border bg-liner-to-br from-primary/10 via-background to-background p-6 sm:rounded-4xl sm:p-8 md:rounded-[40px] md:p-12 lg:p-16"
        >
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
              Ready to Start?
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s Turn Your Idea
              <br />
              Into Reality
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              Whether you&apos;re launching a startup, building a SaaS platform,
              modernizing your business, or creating an enterprise solution,
              we&apos;d love to hear about your project.
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}