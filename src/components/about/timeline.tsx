"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/common/reveal";

const timeline = [
  {
    year: "2018",
    title: "Agency Founded",
    description:
      "Started with a vision to build premium digital experiences for startups and businesses.",
  },
  {
    year: "2020",
    title: "International Clients",
    description:
      "Expanded globally and successfully delivered projects for clients across multiple countries.",
  },
  {
    year: "2022",
    title: "Full-Service Agency",
    description:
      "Added UI/UX, mobile apps, SaaS platforms, enterprise software and cloud solutions.",
  },
  {
    year: "2024",
    title: "AI & Automation",
    description:
      "Started delivering AI-powered products, workflow automation and intelligent business solutions.",
  },
  {
    year: "2026",
    title: "Scaling Worldwide",
    description:
      "Focused on building scalable digital products for ambitious companies around the world.",
  },
];

export function Timeline() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
            <span className="inline-flex rounded-full border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
              Our Journey
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Milestones that shaped our agency.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Every year brought new challenges, bigger projects and stronger
              partnerships that helped us grow into a modern digital agency.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-5 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-10 lg:space-y-16">
            {timeline.map((item, index) => (
              <Reveal
                key={item.year}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="ml-10 w-full sm:ml-14 md:ml-0 md:w-1/2 md:px-10">
                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="rounded-3xl border bg-background/60 p-5 backdrop-blur-xl sm:p-6 lg:p-8"
                    >
                      <span className="text-xs font-semibold text-primary sm:text-sm">
                        {item.year}
                      </span>

                      <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary sm:left-5 sm:h-10 sm:w-10 md:left-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-background sm:h-3 sm:w-3" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}