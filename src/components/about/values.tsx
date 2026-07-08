"use client";

import { motion } from "framer-motion";
import {
  Gem,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/common/reveal";

const values = [
  {
    title: "Quality First",
    description:
      "Every project is crafted with exceptional attention to detail and engineering excellence.",
    icon: Gem,
  },
  {
    title: "Innovation",
    description:
      "We embrace modern technologies and continuously improve our development process.",
    icon: Lightbulb,
  },
  {
    title: "Performance",
    description:
      "Fast, scalable and optimized products that provide the best user experience.",
    icon: Rocket,
  },
  {
    title: "Trust",
    description:
      "Transparency, honesty and long-term relationships are at the core of our work.",
    icon: ShieldCheck,
  },
  {
    title: "Collaboration",
    description:
      "We work closely with clients as partners throughout every stage of development.",
    icon: Users,
  },
  {
    title: "Excellence",
    description:
      "Our goal is to deliver products that exceed expectations and create real business value.",
    icon: Sparkles,
  },
];

export function Values() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
            <span className="inline-flex rounded-full border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
              Core Values
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Principles that guide everything we build.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Our values shape every design decision, engineering choice and
              client relationship.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <Reveal
                key={value.title}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-background/60 p-6 backdrop-blur-xl sm:p-7 lg:p-8"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                      <Icon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold sm:mt-8 sm:text-2xl">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base sm:leading-8">
                      {value.description}
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