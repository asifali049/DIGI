import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  Clock3,
  User2,
} from "lucide-react";

import type { BlogPost } from "@/types/blog";

type BlogArticleHeroProps = {
  post: BlogPost;
};

export function BlogArticleHero({
  post,
}: BlogArticleHeroProps) {
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString()
    : "Not published";

  return (
    <section className="border-b border-border">
      <div className="container py-16 sm:py-20 md:py-24 lg:py-32">
        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 overflow-hidden text-xs text-muted-foreground sm:mb-8 sm:text-sm"
        >
          <Link
            href="/"
            className="shrink-0 transition-colors hover:text-foreground"
          >
            Home
          </Link>

          <ChevronRight className="size-4 shrink-0" />

          <Link
            href="/blog"
            className="shrink-0 transition-colors hover:text-foreground"
          >
            Blog
          </Link>

          <ChevronRight className="size-4 shrink-0" />

          <span className="min-w-0 truncate text-foreground">
            {post.title}
          </span>
        </nav>

        {/* Category */}

        <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground sm:px-4 sm:py-2 sm:text-sm">
          {post.category.name}
        </span>

        {/* Title */}

        <h1 className="mt-5 max-w-4xl text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
          {post.title}
        </h1>

        {/* Excerpt */}

        <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg md:text-xl md:leading-8">
          {post.excerpt}
        </p>

        {/* Meta */}

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:mt-10 sm:gap-6 sm:text-sm">
          <span className="flex items-center gap-2">
            <User2 className="size-4 shrink-0" />
            {post.author.name}
          </span>

          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0" />
            {publishedDate}
          </span>

          <span className="flex items-center gap-2">
            <Clock3 className="size-4 shrink-0" />
            {post.readingTime} min read
          </span>
        </div>

        {/* Cover */}

        <div className="relative mt-10 aspect-16/10 overflow-hidden rounded-3xl border border-border sm:mt-12 md:mt-14 lg:aspect-16/8">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}