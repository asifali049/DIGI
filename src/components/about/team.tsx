"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiGithub,
  SiX,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import { Reveal } from "@/components/common/reveal";

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/team/team-1.jpg",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Williams",
    role: "Lead UI/UX Designer",
    image: "/team/team-2.jpg",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Chen",
    role: "Senior Full Stack Engineer",
    image: "/team/team-3.jpg",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Davis",
    role: "Mobile App Developer",
    image: "/team/team-4.jpg",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
];

export function Team() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
            <span className="inline-flex rounded-full border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
              Our Team
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Meet the people behind the products.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Designers, developers and strategists working together to build
              exceptional digital experiences.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-8">
          {team.map((member, index) => (
            <Reveal
              key={member.name}
              delay={index * 0.08}
            >
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-background/60 backdrop-blur-xl"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold sm:text-xl">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm text-primary">
                    {member.role}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href={member.github}
                      aria-label={`${member.name} GitHub`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border transition-colors hover:text-primary"
                    >
                      <SiGithub className="h-5 w-5" />
                    </Link>

                    <Link
                      href={member.linkedin}
                      aria-label={`${member.name} LinkedIn`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border transition-colors hover:text-primary"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </Link>

                    <Link
                      href={member.twitter}
                      aria-label={`${member.name} X`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border transition-colors hover:text-primary"
                    >
                      <SiX className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}