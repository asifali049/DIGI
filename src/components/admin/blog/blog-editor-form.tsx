"use client";

import { Save } from "lucide-react";

import { Button, Input } from "@/components/ui";
import { useBlogForm } from "@/hooks/use-blog-form";
import type { BlogFormValues } from "@/schemas/blog.schema";
import type { BlogPost } from "@/types/blog";

interface BlogEditorFormProps {
  mode: "create" | "edit";
  initialData?: BlogPost;
}

export function BlogEditorForm({
  mode,
  initialData,
}: BlogEditorFormProps) {
  const form = useBlogForm({
    defaultValues: initialData
      ? {
          title: initialData.title,
          slug: initialData.slug,
          excerpt: initialData.excerpt,
          content: initialData.content ?? "",
          coverImage: initialData.coverImage,
          category: initialData.category.slug,
          status: initialData.status ?? "draft",
          tags: initialData.tags,
          featured: initialData.featured,
          published: initialData.published ?? false,
          author: initialData.author.name,
          readingTime: initialData.readingTime,
          seoTitle:
            initialData.seoTitle ??
            initialData.seo?.metaTitle ??
            "",
          seoDescription:
            initialData.seoDescription ??
            initialData.seo?.metaDescription ??
            "",
          canonicalUrl: initialData.canonicalUrl ?? "",
          publishedAt: initialData.publishedAt ?? "",
        }
      : undefined,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  async function onSubmit(data: BlogFormValues) {
    console.log(data);

    // TODO:
    // await createBlogPostAction(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="text-sm font-medium"
          >
            Title
          </label>

          <Input
            id="title"
            placeholder="Building a Modern Next.js Website"
            {...register("title")}
          />

          {errors.title && (
            <p className="text-sm text-destructive">
              {errors.title.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="slug"
            className="text-sm font-medium"
          >
            Slug
          </label>

          <Input
            id="slug"
            placeholder="modern-nextjs-website"
            {...register("slug")}
          />

          {errors.slug && (
            <p className="text-sm text-destructive">
              {errors.slug.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="excerpt"
          className="text-sm font-medium"
        >
          Excerpt
        </label>

        <textarea
          id="excerpt"
          rows={4}
          {...register("excerpt")}
          className="border-input bg-background w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

        {errors.excerpt && (
          <p className="text-sm text-destructive">
            {errors.excerpt.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="content"
          className="text-sm font-medium"
        >
          MDX Content
        </label>

        <textarea
          id="content"
          rows={20}
          {...register("content")}
          className="border-input bg-background font-mono w-full rounded-lg border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

        {errors.content && (
          <p className="text-sm text-destructive">
            {errors.content.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
        >
          <Save className="mr-2 h-4 w-4" />

          {isSubmitting
            ? "Saving..."
            : mode === "create"
              ? "Create Article"
              : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}