"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

import type { BlogPost } from "@/types/blog";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { BlogForm } from "./blog-form";
import type { BlogFormValues } from "./blog-schema";

interface EditBlogDialogProps {
  post: BlogPost;
  trigger?: React.ReactNode;
}

export function EditBlogDialog({
  post,
  trigger,
}: EditBlogDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(
    values: BlogFormValues
  ) {
    try {
      setIsSubmitting(true);

      console.log({
        id: post.id,
        ...values,
      });

      // TODO:
      // Replace with Server Action / API

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success("Blog updated successfully.");

      setOpen(false);
    } catch {
      toast.error("Failed to update blog.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            variant="ghost"
            size="icon"
            aria-label="Edit blog"
          >
            <Pencil className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent
        className="
          max-h-[90dvh]
          w-[calc(100vw-2rem)]
          overflow-y-auto
          p-5
          sm:max-w-5xl
          sm:p-6
        "
      >
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            Edit Blog
          </DialogTitle>
        </DialogHeader>

        <div className="mt-2">
          <BlogForm
            defaultValues={{
              title: post.title,
              slug: post.slug,
              excerpt: post.excerpt,
              content: post.content ?? "",
              coverImage: post.coverImage,

              // BlogCategory -> string
              category: post.category.slug,

              // Optional
              status: post.status ?? "draft",

              tags: post.tags,
              featured: post.featured,
              published: post.published ?? false,

              // BlogAuthor -> string
              author: post.author.name,

              readingTime: post.readingTime,

              // SEO
              seoTitle: post.seo?.metaTitle ?? "",
              seoDescription:
                post.seo?.metaDescription ?? "",

              canonicalUrl:
                post.canonicalUrl ?? "",

              publishedAt:
                post.publishedAt ?? "",
            }}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}