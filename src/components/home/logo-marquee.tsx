"use client";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiPython,
  SiDjango,
} from "react-icons/si";
import type { IconType } from "react-icons";

const logos: { name: string; icon: IconType }[] = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
  { name: "Vercel", icon: SiVercel },
  { name: "Figma", icon: FaFigma },
];

const items = [...logos, ...logos];

export function LogoMarquee() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground sm:text-sm sm:tracking-[0.3em]">
            Trusted Technologies
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-black
              tracking-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            Powered by Industry Leaders
          </h2>
        </div>

        <div
          className="
            relative
            overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          "
        >
          <div className="flex w-max animate-marquee gap-4 sm:gap-8 lg:gap-12">
            {items.map((logo, index) => {
              const Icon = logo.icon;

              return (
                <div
                  key={`${logo.name}-${index}`}
                  className="group flex h-20 w-32 shrink-0 items-center justify-center gap-2 rounded-2xl border border-border bg-background/60 px-4 backdrop-blur sm:h-24 sm:w-40 lg:w-44"
                >
                  <Icon
                    className="
                      h-8
                      w-8
                      shrink-0
                      text-muted-foreground
                      opacity-70
                      transition-all
                      duration-300
                      group-hover:text-violet-500
                      group-hover:opacity-100
                      sm:h-10
                      sm:w-10
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
