"use client";

import { useState } from "react";
import {
  Calendar,
  Clock3,
  Eye,
  Star,
  Tag,
  User,
} from "lucide-react";

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

export function BlogPreviewSheet({
  post,
  trigger,
}: BlogPreviewSheetProps) {
  const [open, setOpen] = useState(false);

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString()
    : "-";

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
            aria-label="Preview blog"
          >
            <Eye className="h-4 w-4" />
          </Button>
        )}
      </SheetTrigger>

      <SheetContent className="w-full overflow-y-auto p-6 sm:max-w-3xl">
        <SheetHeader>
          <SheetTitle className="text-2xl">
            Blog Preview
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          {/* Cover */}

          <div className="flex aspect-video items-center justify-center rounded-2xl border bg-muted text-sm text-muted-foreground">
            Cover Image
          </div>

          {/* Title */}

          <div className="space-y-4">
            <div className="flex flex-wrap items-start gap-3">
              <h2 className="flex-1 text-2xl font-bold leading-tight sm:text-3xl">
                {post.title}
              </h2>

              {post.featured && (
                <Star className="mt-1 h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400" />
              )}
            </div>

            <BlogStatusBadge
              status={post.status ?? "draft"}
            />

            <p className="leading-7 text-muted-foreground">
              {post.excerpt}
            </p>
          </div>

          <Separator />

          {/* Meta */}

          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard
              icon={<User className="h-4 w-4" />}
              label="Author"
              value={post.author.name}
            />

            <InfoCard
              icon={<Clock3 className="h-4 w-4" />}
              label="Reading Time"
              value={`${post.readingTime} min`}
            />

            <InfoCard
              icon={<Calendar className="h-4 w-4" />}
              label="Published"
              value={publishedDate}
            />

            <InfoCard
              icon={<Tag className="h-4 w-4" />}
              label="Category"
              value={post.category.name}
            />
          </div>

          <Separator />

          {/* Content */}

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Content
            </h3>

            <div className="rounded-xl border bg-muted/30 p-5">
              <p className="whitespace-pre-wrap leading-7 text-muted-foreground">
                {post.content ??
                  "No content available."}
              </p>
            </div>
          </div>

          <Separator />

          {/* Tags */}

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Tags
            </h3>

            <div className="flex flex-wrap gap-2">
              {post.tags.length ? (
                post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                  >
                    {tag}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">
                  No tags
                </span>
              )}
            </div>
          </div>

          <Separator />

          {/* SEO */}

          <div className="space-y-5">
            <div>
              <h4 className="font-semibold">
                SEO Title
              </h4>

              <p className="mt-1 text-muted-foreground">
                {post.seo?.metaTitle ?? "-"}
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                SEO Description
              </h4>

              <p className="mt-1 leading-7 text-muted-foreground">
                {post.seo?.metaDescription ?? "-"}
              </p>
            </div>

            {post.canonicalUrl && (
              <div>
                <h4 className="font-semibold">
                  Canonical URL
                </h4>

                <p className="mt-1 break-all text-primary">
                  {post.canonicalUrl}
                </p>
              </div>
            )}
          </div>
        </div>
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
    <div className="rounded-xl border p-4">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
        {icon}
        <span>{label}</span>
      </div>

      <div className="wrap-break-words font-medium">
        {value}
      </div>
    </div>
  );
}