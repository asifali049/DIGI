"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import type { BlogPost } from "@/types/blog";
import { Button } from "@/components/ui";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({
  post,
}: BlogCardProps) {
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString()
    : "Not published";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Cover Image */}

      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-16/10 overflow-hidden"
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground sm:left-4 sm:top-4">
          {post.category.name}
        </div>
      </Link>

      {/* Content */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:gap-4 sm:text-sm">
          <span className="flex items-center gap-1">
            <CalendarDays className="size-4 shrink-0" />
            {publishedDate}
          </span>

          <span className="flex items-center gap-1">
            <Clock3 className="size-4 shrink-0" />
            {post.readingTime} min read
          </span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4"
        >
          <h3 className="line-clamp-2 text-xl font-semibold leading-tight transition-colors group-hover:text-primary sm:text-2xl">
            {post.title}
          </h3>
        </Link>

        <p className="mt-4 flex-1 line-clamp-3 text-sm leading-7 text-muted-foreground sm:text-base">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-center px-0 sm:w-auto sm:justify-start"
          >
            <Link href={`/blog/${post.slug}`}>
              Read More
              <ArrowRight className="ml-2 size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}