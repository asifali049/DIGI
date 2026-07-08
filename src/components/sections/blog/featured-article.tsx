"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock3,
  Sparkles,
  User2,
} from "lucide-react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const featuredPost = {
  title: "Building Scalable SaaS Applications with Next.js 15 & React 19",
  excerpt:
    "Discover the architecture, rendering strategies, performance optimizations, and best practices we use to build modern enterprise-grade digital products.",
  image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  category: "Development",
  author: "Asif Ali",
  date: "July 2026",
  readTime: "8 min read",
  href: "/blog/building-scalable-saas-nextjs-15",
};

export function FeaturedArticle() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}

          <div className="mb-10 flex items-start gap-3 sm:mb-12 sm:items-center">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <Sparkles className="size-5" />
            </div>

            <div className="min-w-0">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Featured Article
              </h2>

              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                Hand-picked insights from our latest research.
              </p>
            </div>
          </div>

          {/* Card */}

          <article
            className={cn(
              "group overflow-hidden rounded-3xl",
              "border border-border",
              "bg-card",
              "transition-all duration-500 hover:shadow-2xl"
            )}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}

              <div className="relative min-h-60 overflow-hidden sm:min-h-75 lg:min-h-85">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                  <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground sm:px-4 sm:py-2 sm:text-sm">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}

              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:gap-5 sm:text-sm">
                  <div className="flex items-center gap-2">
                    <User2 className="size-4 shrink-0" />
                    <span>{featuredPost.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 shrink-0" />
                    <span>{featuredPost.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="size-4 shrink-0" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight sm:mt-6 sm:text-3xl lg:text-4xl">
                  {featuredPost.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-8 sm:mt-10">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href={featuredPost.href}>
                      Read Article
                      <ArrowRight className="ml-2 size-4 shrink-0" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}