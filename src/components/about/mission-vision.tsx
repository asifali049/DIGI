"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

import { Reveal } from "@/components/common/reveal";

const items = [
  {
    title: "Our Mission",
    description:
      "To empower startups, businesses, and enterprises with scalable digital solutions that combine exceptional design, cutting-edge technology, and measurable business outcomes.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become a globally trusted digital agency recognized for innovation, quality engineering, and building products that create lasting impact.",
    icon: Eye,
  },
];

export function MissionVision() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
            <span className="inline-flex rounded-full border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
              Mission &amp; Vision
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Driven by purpose, powered by innovation.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Everything we build is guided by a clear mission and a long-term
              vision to help businesses grow with technology.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                direction={index === 0 ? "left" : "right"}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="relative h-full overflow-hidden rounded-[28px] border bg-background/60 p-6 backdrop-blur-xl sm:rounded-4xl sm:p-8 lg:p-10"
                >
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 sm:h-16 sm:w-16">
                      <Icon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold sm:mt-8 sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}