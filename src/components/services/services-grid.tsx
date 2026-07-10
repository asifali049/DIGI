"use client";

import { motion, useReducedMotion } from "framer-motion";

import { services } from "@/constants/services";
import { ServiceCard } from "./service-card";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="services-grid-heading"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            What We Do
          </span>

          <h2
            id="services-grid-heading"
            className="mt-5 text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            End-to-End Digital Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
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
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="h-full"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}