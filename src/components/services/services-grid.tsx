"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import { services } from "@/constants/services";
import { ServiceCard } from "./service-card";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="services-grid-heading"
      className="relative overflow-visible py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto">
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center">
          <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            What We Do
          </span>

          <h2
            id="services-grid-heading"
            className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            End-to-End Digital Services
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:leading-8">
            From strategy and design to development and AI integration,
            we build premium digital products that help businesses scale
            faster and deliver exceptional user experiences.
          </p>
        </div>

        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="flex h-full"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}