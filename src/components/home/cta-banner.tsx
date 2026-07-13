"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { CTABackground } from "./cta-background";

interface CTABannerProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CTABanner({
  eyebrow = "Let's Build Something Amazing",
  title = "Transform your ideas into premium digital products.",
  subtitle = "From websites and mobile apps to enterprise software, we design and develop fast, scalable, and beautiful digital experiences.",
  primaryCta = { label: "Book Free Consultation", href: "/contact" },
  secondaryCta = { label: "View Portfolio", href: "/portfolio" },
}: CTABannerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.96,
                }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-border
            bg-gradient-to-br
            from-primary/10
            via-background
            to-primary/5
            p-6
            sm:rounded-[2rem]
            sm:p-8
            lg:p-12
            xl:p-16
          "
        >
          <CTABackground />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-primary/20
                bg-background/70
                px-3
                py-1.5
                text-xs
                font-semibold
                tracking-wide
                text-primary
                backdrop-blur
                sm:px-4
                sm:py-2
                sm:text-sm
              "
            >
              {eyebrow}
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-black
                tracking-tight
                text-foreground
                sm:mt-6
                sm:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              {title}
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-muted-foreground
                sm:mt-6
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
            >
              {subtitle}
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                gap-4
                sm:mt-10
                sm:flex-row
                sm:justify-center
              "
            >
              <Link
                href={primaryCta.href}
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-primary
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-primary-foreground
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:opacity-90
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/40
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                  sm:w-auto
                  sm:text-base
                "
              >
                {primaryCta.label}

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={secondaryCta.href}
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-border
                  bg-background/60
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-foreground
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-accent
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/40
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                  sm:w-auto
                  sm:text-base
                "
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}