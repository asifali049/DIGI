"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import {
  Calendar,
  Clock3,
  Eye,
  Star,
  Tag,
  User,
} from "lucide-react";

import { useReducedMotion } from "framer-motion";

import type { BlogPost } from "@/types/blog";

import { BlogStatusBadge } from "./blog-status-badge";

import {
  Badge,
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";

interface BlogPreviewSheetProps {
  post: BlogPost;
  trigger?: React.ReactNode;
}

function formatDate(date?: string) {
  if (!date) return "-";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

export function BlogPreviewSheet({
  post,
  trigger,
}: BlogPreviewSheetProps) {
  const [open, setOpen] = useState(false);

  const shouldReduceMotion =
    useReducedMotion();

  const publishedDate = useMemo(
    () => formatDate(post.publishedAt),
    [post.publishedAt]
  );

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        {trigger ?? (
          <Button
            variant="ghost"
            size="icon"
            aria-label={`Preview "${post.title}"`}
          >
            <Eye
              aria-hidden="true"
              className="h-4 w-4"
            />
          </Button>
        )}
      </SheetTrigger>

      <SheetContent className="w-full overflow-y-auto p-0 sm:max-w-4xl">
        <SheetHeader className="border-b px-6 py-5">
          <SheetTitle className="text-2xl font-bold">
            Blog Preview
          </SheetTitle>
        </SheetHeader>

        <article className="space-y-8 p-6 md:p-8">

          {/* Cover */}

          <div className="overflow-hidden rounded-3xl border bg-muted">
            <div className="relative aspect-video">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority={open}
                  sizes="(max-width:768px)100vw,900px"
                  className={
                    shouldReduceMotion
                      ? "object-cover"
                      : "object-cover transition-transform duration-700 hover:scale-105"
                  }
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  No Cover Image
                </div>
              )}
            </div>
          </div>

          {/* Hero */}

          <section className="space-y-5">

            <div className="flex flex-wrap items-start gap-3">
              <h2 className="flex-1 text-balance text-3xl font-bold leading-tight md:text-4xl">
                {post.title}
              </h2>

              {post.featured && (
                <Star
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400"
                />
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <BlogStatusBadge
                status={
                  post.status ??
                  "draft"
                }
              />

              <Badge variant="secondary">
                {post.category.name}
              </Badge>
            </div>

            <p className="max-w-3xl text-base leading-8 text-muted-foreground">
              {post.excerpt}
            </p>
          </section>

          <Separator />

          {/* Meta */}

          <section className="grid gap-4 md:grid-cols-2">
            <InfoCard
              icon={
                <User className="h-4 w-4" />
              }
              label="Author"
              value={post.author.name}
            />

            <InfoCard
              icon={
                <Clock3 className="h-4 w-4" />
              }
              label="Reading Time"
              value={`${post.readingTime} min`}
            />

            <InfoCard
              icon={
                <Calendar className="h-4 w-4" />
              }
              label="Published"
              value={publishedDate}
            />

            <InfoCard
              icon={
                <Tag className="h-4 w-4" />
              }
              label="Category"
              value={post.category.name}
            />
          </section>

          <Separator />
                    {/* Content */}

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">
              Content
            </h3>

            <div className="rounded-2xl border bg-muted/20 p-6">
              {post.content ? (
                <div className="prose prose-neutral dark:prose-invert max-w-none whitespace-pre-wrap break-words leading-8">
                  {post.content}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  No content available.
                </p>
              )}
            </div>
          </section>

          <Separator />

          {/* Tags */}

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">
              Tags
            </h3>

            {post.tags.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No tags available.
              </p>
            )}
          </section>

          <Separator />

          {/* SEO Preview */}

          <section className="space-y-5">
            <h3 className="text-xl font-semibold">
              SEO Preview
            </h3>

            <div className="rounded-2xl border bg-background p-6">
              <p className="truncate text-xs text-green-600 dark:text-green-400">
                {post.canonicalUrl ??
                  "https://example.com/blog/" +
                    post.slug}
              </p>

              <h4 className="mt-2 line-clamp-2 text-xl font-medium text-blue-600 dark:text-blue-400">
                {post.seo?.metaTitle ??
                  post.seoTitle ??
                  post.title}
              </h4>

              <p className="mt-2 line-clamp-3 leading-7 text-muted-foreground">
                {post.seo?.metaDescription ??
                  post.seoDescription ??
                  post.excerpt}
              </p>
            </div>

            {post.canonicalUrl && (
              <div>
                <h4 className="font-semibold">
                  Canonical URL
                </h4>

                <p className="mt-2 break-all text-sm text-primary">
                  {post.canonicalUrl}
                </p>
              </div>
            )}
          </section>
        </article>
      </SheetContent>
    </Sheet>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function InfoCard({
  icon,
  label,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30">
      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
        <span
          aria-hidden="true"
          className="text-primary"
        >
          {icon}
        </span>

        <span>{label}</span>
      </div>

      <div className="break-words text-sm font-medium leading-6 sm:text-base">
        {value}
      </div>
    </div>
  );
}