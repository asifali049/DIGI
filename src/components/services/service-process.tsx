"use client";

import { motion } from "framer-motion";

import { serviceProcess } from "@/constants/service-process";

export function ServiceProcess() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container max-w-5xl">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Our Process
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            From Idea to Launch
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            Every project follows a structured workflow to ensure quality,
            transparency, and predictable delivery.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-border sm:block md:left-7" />

          <div className="space-y-8 sm:space-y-10 lg:space-y-14">
            {serviceProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="relative flex flex-col gap-5 sm:flex-row sm:gap-6 lg:gap-8"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-background text-base font-bold text-primary shadow-lg sm:h-14 sm:w-14 sm:text-lg">
                  {item.step}
                </div>

                <div className="flex-1 rounded-3xl border bg-background/60 p-6 backdrop-blur sm:p-8">
                  <h3 className="text-xl font-semibold leading-tight sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}