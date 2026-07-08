"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  review: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="flex h-full flex-col rounded-3xl border bg-background/60 p-5 backdrop-blur-xl transition-all duration-300 sm:p-6"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <Image
  src={testimonial.image}
  alt={testimonial.name}
  width={56}
  height={56}
  loading="lazy"
  className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
/>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold sm:text-lg">
            {testimonial.name}
          </h3>

          <p className="truncate text-xs text-muted-foreground sm:text-sm">
            {testimonial.role} • {testimonial.company}
          </p>
        </div>
      </div>

      <div
        className="mt-4 flex text-sm text-yellow-500 sm:mt-5"
        aria-label="5 out of 5 stars"
      >
        ★★★★★
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base">
        {testimonial.review}
      </p>
    </motion.article>
  );
}