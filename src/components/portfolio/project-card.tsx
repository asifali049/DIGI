"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  category: string;
  type: string;
  image: string;
  description: string;
  technologies: readonly string[];
};

export function ProjectCard({
  title,
  category,
  type,
  image,
  description,
  technologies,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -8,
            }
      }
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          decoding="async"
          sizes="(max-width:640px) 100vw,
                 (max-width:1024px) 50vw,
                 50vw"
          className={[
            "object-cover",
            "transition-transform duration-700",
            !shouldReduceMotion && "group-hover:scale-105",
          ]
            .filter(Boolean)
            .join(" ")}
        />

        <div className="absolute left-4 top-4 rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur sm:left-5 sm:top-5">
          {category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-tight text-balance sm:text-2xl">
            {title}
          </h3>

          <ArrowUpRight
            aria-hidden="true"
            className={[
              "mt-1 h-5 w-5 shrink-0 transition-transform",
              !shouldReduceMotion &&
                "group-hover:translate-x-1 group-hover:-translate-y-1",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        </div>

        <p className="mt-2 text-sm font-medium text-primary">
          {type}
        </p>

        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-center text-xs leading-5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}