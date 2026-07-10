"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import { contactInfo } from "@/constants/contact-info";

export function ContactCards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="contact-methods-heading"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container">
        <h2 id="contact-methods-heading" className="sr-only">
          Contact Methods
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-5">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 24,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                      }
                }
                className="h-full"
              >
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="mt-5 text-balance text-lg font-semibold leading-tight sm:mt-6 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 break-words text-sm font-medium text-foreground sm:text-base">
                    {item.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}