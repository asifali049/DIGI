"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "250+",
    label: "Articles",
  },
  {
    value: "40+",
    label: "Technologies",
  },
  {
    value: "15k+",
    label: "Monthly Readers",
  },
];

export function BlogHero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "border-b border-border",
        "pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28"
      )}
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,.14),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(139,92,246,.18),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}

          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 backdrop-blur sm:mb-6 sm:px-4">
            <BookOpen className="size-4 shrink-0 text-primary" />

            <span className="text-xs font-medium text-muted-foreground sm:text-sm">
              Insights • Development • Design • Business
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Ideas that help you
            <span className="block bg-liner-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              build better digital products.
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl px-1 text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg md:text-xl md:leading-8">
            Explore expert articles on software development, UI/UX, AI,
            business growth, startups, and modern technologies written by our
            team.
          </p>

          {/* Actions */}

          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="#blog-grid">
                Explore Articles
                <ArrowRight className="ml-2 size-4 shrink-0" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="/contact">
                Work With Us
              </Link>
            </Button>
          </div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-1 gap-5 rounded-3xl border border-border bg-background/60 p-6 backdrop-blur sm:mt-16 sm:grid-cols-3 sm:gap-6 sm:p-8">
            {stats.map((item) => (
              <div
                key={item.label}
                className="min-w-0 text-center"
              >
                <div className="text-2xl font-bold sm:text-3xl">
                  {item.value}
                </div>

                <div className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}