"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/common/reveal";

export function CompanyStory() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <Reveal direction="left">
            <div>
              <span className="inline-flex rounded-full border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                Our Story
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                We don&apos;t just build software.
                <br className="hidden sm:block" />
                <span className="block sm:inline">
                  We build digital businesses.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-muted-foreground sm:mt-8 sm:text-base sm:leading-8">
                Our agency was founded with one mission: helping startups,
                enterprises and ambitious founders transform ideas into
                world-class digital products.
              </p>

              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8">
                Every project is designed with performance, accessibility,
                scalability and user experience at its core. From modern
                websites to enterprise platforms, we focus on building products
                that deliver measurable business results.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2">
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl font-bold text-primary sm:text-4xl">
                    120+
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Successful Projects
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-3xl font-bold text-primary sm:text-4xl">
                    98%
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Card */}
          <Reveal direction="right">
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative overflow-hidden rounded-[28px] border bg-background/60 p-6 backdrop-blur-xl sm:rounded-4xl sm:p-8 lg:p-10"
            >
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

              <h3 className="text-xl font-bold sm:text-2xl">
                Why Clients Choose Us
              </h3>

              <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                {[
                  "Premium UI/UX Design",
                  "Scalable Architecture",
                  "Modern Tech Stack",
                  "SEO Optimized",
                  "Performance Focused",
                  "Long-term Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="h-3 w-3 shrink-0 rounded-full bg-primary" />

                    <span className="text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}