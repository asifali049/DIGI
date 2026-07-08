"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { contactInfo } from "@/constants/contact-info";

export function ContactCards() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-5">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="h-full"
              >
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-3xl border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-xl sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-tight sm:mt-6 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 wrap-break-words text-sm font-medium sm:text-base">
                    {item.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}