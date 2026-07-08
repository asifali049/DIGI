"use client";

import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  Globe2,
  Trophy,
} from "lucide-react";

import { Reveal } from "@/components/common/reveal";

const achievements = [
  {
    title: "120+",
    subtitle: "Projects Delivered",
    icon: BriefcaseBusiness,
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "98%",
    subtitle: "Client Satisfaction",
    icon: Trophy,
    color: "from-yellow-500/20 to-orange-500/10",
  },
  {
    title: "35+",
    subtitle: "Global Clients",
    icon: Globe2,
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    title: "8+",
    subtitle: "Years Experience",
    icon: Award,
    color: "from-violet-500/20 to-fuchsia-500/10",
  },
];

export function Achievements() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
            <span className="inline-flex rounded-full border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
              Achievements
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Numbers that reflect our journey.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Every milestone represents trust, quality and successful
              partnerships built over the years.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-background/60 p-6 backdrop-blur-xl sm:p-7 lg:p-8"
                >
                  <div
                    className={`absolute inset-0 bg-liner-to-br ${item.color} opacity-60`}
                  />

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/80 sm:h-16 sm:w-16">
                      <Icon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                    </div>

                    <h3 className="mt-6 text-4xl font-bold sm:mt-8 sm:text-5xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
                      {item.subtitle}
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