"use client";

import { useState } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  PricingCard,
  type PricingPlan,
} from "./pricing-card";
import { PricingToggle } from "./pricing-toggle";

const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for startups and personal brands.",
    monthlyPrice: 24999,
    yearlyPrice: 239999,
    cta: "Get Started",
    features: [
      "Modern Responsive Website",
      "Up to 5 Pages",
      "SEO Ready",
      "Performance Optimized",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    description: "Ideal for growing businesses and agencies.",
    monthlyPrice: 49999,
    yearlyPrice: 479999,
    popular: true,
    cta: "Start Growing",
    features: [
      "Unlimited Pages",
      "Custom UI/UX",
      "CMS Integration",
      "Advanced Animations",
      "Priority Support",
      "Analytics Integration",
      "Performance Optimization",
    ],
  },
  {
    name: "Enterprise",
    description: "Tailored solutions for enterprise businesses.",
    monthlyPrice: null,
    yearlyPrice: null,
    cta: "Contact Sales",
    features: [
      "Custom Development",
      "Dedicated Team",
      "API Integration",
      "Security & Compliance",
      "Cloud Deployment",
      "24×7 Priority Support",
      "SLA Included",
    ],
  },
];

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-primary/20
              bg-primary/10
              px-3
              py-1.5
              text-xs
              font-semibold
              tracking-[0.25em]
              text-primary
              sm:px-4
              sm:py-2
              sm:text-sm
            "
          >
            Pricing
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            Transparent Pricing
          </h2>

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-muted-foreground
              sm:text-base
            "
          >
            Flexible pricing designed for startups, businesses,
            and enterprise clients.
          </p>

          <div className="mt-8 flex justify-center sm:mt-10">
            <PricingToggle
              yearly={yearly}
              onChange={setYearly}
            />
          </div>
        </motion.div>

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:mt-16
            sm:gap-6
            lg:grid-cols-3
            lg:gap-8
            xl:mt-20
          "
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion
                  ? 0
                  : index * 0.15,
              }}
              className="h-full"
            >
              <PricingCard
                plan={plan}
                yearly={yearly}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}