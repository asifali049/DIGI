"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  {
    value: 120,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    value: 35,
    suffix: "+",
    label: "Worldwide Clients",
  },
  {
    value: 8,
    suffix: "+",
    label: "Years Experience",
  },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);

  const spring = useSpring(motionValue, {
    stiffness: 90,
    damping: 20,
  });

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (!ref.current) return;

      ref.current.textContent =
        Math.floor(latest).toLocaleString() + (suffix ?? "");
    });
  }, [spring, suffix]);

  return (
    <span
      ref={ref}
      className="
        text-4xl
        font-black
        tracking-tight
        text-foreground
        sm:text-5xl
        lg:text-6xl
        "
    >
      0
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm">
            Trusted Worldwide
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
            Numbers that speak for themselves.
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base">
            We build premium digital experiences for startups,
            enterprises, SaaS companies, and ambitious founders
            across the globe.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 xl:mt-20 xl:grid-cols-4 xl:gap-8">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="group rounded-3xl border bg-background/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-7 lg:p-8"
            >
              <Counter
                value={item.value}
                suffix={item.suffix}
              />

              <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}