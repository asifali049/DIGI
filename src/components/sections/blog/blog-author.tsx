"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Globe,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui";

const author = {
  name: "Asif Ali",
  role: "Founder & Full Stack Developer",
  bio: "I build premium web applications using Next.js, React, TypeScript, Node.js, and modern cloud technologies. Through this blog, I share practical insights on software architecture, UI engineering, AI, and building scalable digital products.",
  avatar: "https://i.pravatar.cc/300?img=12",

  stats: {
    articles: 42,
    readers: "15K+",
    experience: "3+ Years",
  },

  social: {
    website: "#",
    github: "#",
    linkedin: "#",
  },
};

export function BlogAuthor() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-border bg-card"
        >
          <div className="grid gap-8 p-6 sm:gap-10 sm:p-8 md:grid-cols-[220px_1fr] md:p-10 lg:grid-cols-[260px_1fr] lg:p-12">
            {/* Avatar */}

            <div className="flex justify-center md:block">
              <div className="relative h-40 w-40 overflow-hidden rounded-3xl sm:h-48 sm:w-48 lg:h-52 lg:w-52">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 208px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}

            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground sm:text-sm">
                <Briefcase className="size-4 shrink-0" />
                Meet the Author
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl">
                {author.name}
              </h2>

              <p className="mt-2 text-sm text-primary sm:text-base">
                {author.role}
              </p>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8 md:mx-0">
                {author.bio}
              </p>

              {/* Stats */}

              <div className="mt-8 grid grid-cols-3 gap-4 text-center sm:mt-10 sm:gap-6 md:text-left">
                <div>
                  <div className="text-2xl font-bold sm:text-3xl">
                    {author.stats.articles}
                  </div>

                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    Articles
                  </p>
                </div>

                <div>
                  <div className="text-2xl font-bold sm:text-3xl">
                    {author.stats.readers}
                  </div>

                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    Readers
                  </p>
                </div>

                <div>
                  <div className="text-2xl font-bold sm:text-3xl">
                    {author.stats.experience}
                  </div>

                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    Experience
                  </p>
                </div>
              </div>

              {/* Actions */}

              <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 md:justify-start">
                <Button
                  asChild
                  className="w-full sm:w-auto"
                >
                  <Link href="/about">
                    About Me
                    <ArrowRight className="ml-2 size-4 shrink-0" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="icon"
                >
                  <Link
                    href={author.social.github}
                    aria-label="GitHub"
                  >
                    <FaGithub className="size-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="icon"
                >
                  <Link
                    href={author.social.linkedin}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="size-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="icon"
                >
                  <Link
                    href={author.social.website}
                    aria-label="Website"
                  >
                    <Globe className="size-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}