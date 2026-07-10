"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  Testimonial,
  TestimonialCard,
} from "./testimonial-card";

const testimonials: Testimonial[] = [
  {
    name: "John Anderson",
    role: "Founder",
    company: "NovaTech",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "Outstanding development quality. Everything was delivered on time with exceptional attention to detail.",
  },
  {
    name: "Sarah Wilson",
    role: "CEO",
    company: "Pixel Studio",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Their UI/UX quality exceeded our expectations. Our conversions increased immediately after launch.",
  },
  {
    name: "Michael Brown",
    role: "Product Manager",
    company: "Cloudify",
    image: "https://i.pravatar.cc/150?img=53",
    review:
      "Professional communication, excellent architecture, and premium animations throughout the project.",
  },
];

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16"
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
            Testimonials
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
            Loved by founders and businesses.
          </h2>

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-muted-foreground
              sm:mt-6
              sm:text-base
            "
          >
            We build premium digital experiences that help businesses grow
            faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 40 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.15,
              }}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}