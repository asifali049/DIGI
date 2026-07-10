"use client";

import {
  useCallback,
  useEffect,
  useMemo,
} from "react";

import {
  Loader2,
  Save,
} from "lucide-react";

import { useBlogForm } from "@/hooks/use-blog-form";

import {
  BLOG_CATEGORIES,
  BLOG_STATUSES,
  type BlogFormValues,
} from "@/schemas/blog.schema";

import type { BlogPost } from "@/types/blog";

import {
  Button,
  Input,
  Textarea,
} from "@/components/ui";

interface BlogEditorFormProps {
  mode: "create" | "edit";

  initialData?: BlogPost;

  onSubmit?: (
    values: BlogFormValues
  ) => Promise<void> | void;
}

/* -------------------------------------------------------------------------- */
/*                               Helper Methods                               */
/* -------------------------------------------------------------------------- */

function createSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function calculateReadingTime(
  content: string
) {
  const words = content
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(
    1,
    Math.ceil(words / 200)
  );
}

/* -------------------------------------------------------------------------- */
/*                              Component                                     */
/* -------------------------------------------------------------------------- */

export function BlogEditorForm({
  mode,
  initialData,
  onSubmit,
}: BlogEditorFormProps) {
  const defaultValues = useMemo<
    Partial<BlogFormValues> | undefined
  >(() => {
    if (!initialData) {
      return undefined;
    }

    return {
      title: initialData.title,
      slug: initialData.slug,
      excerpt: initialData.excerpt,
      content: initialData.content,
      coverImage: initialData.coverImage,

      category:
        initialData.category.slug,

      status: initialData.status,

      tags: [...initialData.tags],

      featured:
        initialData.featured,

      published:
        initialData.published,

      author:
        initialData.author.name,

      readingTime:
        initialData.readingTime,

      seoTitle:
        initialData.seo.metaTitle,

      seoDescription:
        initialData.seo.metaDescription,

      canonicalUrl:
        initialData.seo
          .canonicalUrl ?? "",

      publishedAt:
        initialData.publishedAt ?? "",
    };
  }, [initialData]);

  const form = useBlogForm({
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,

    formState: {
      errors,
      isSubmitting,
    },
  } = form;

    const title = watch("title");

  const content = watch("content");

  const titleLength =
    title?.length ?? 0;

  const excerptLength =
    watch("excerpt")?.length ?? 0;

  const seoTitleLength =
    watch("seoTitle")?.length ?? 0;

  const seoDescriptionLength =
    watch("seoDescription")?.length ??
    0;

  useEffect(() => {
    if (
      mode === "create" &&
      title
    ) {
      setValue(
        "slug",
        createSlug(title),
        {
          shouldValidate: true,
        }
      );
    }
  }, [
    title,
    mode,
    setValue,
  ]);

  useEffect(() => {
    setValue(
      "readingTime",
      calculateReadingTime(
        content
      ),
      {
        shouldValidate: false,
      }
    );
  }, [
    content,
    setValue,
  ]);

  useEffect(() => {
    if (
      initialData &&
      mode === "edit"
    ) {
      reset(defaultValues);
    }
  }, [
    defaultValues,
    initialData,
    mode,
    reset,
  ]);

  const submitHandler =
    useCallback(
      async (
        values: BlogFormValues
      ) => {
        await onSubmit?.(
          values
        );

        console.log(values);
      },
      [onSubmit]
    );

    return (
  <form
    onSubmit={handleSubmit(submitHandler)}
    className="space-y-8"
  >
    <fieldset
      disabled={isSubmitting}
      className="space-y-8"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Basic Information */}
      {/* ------------------------------------------------------------------ */}

      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">
            Basic Information
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            General information about your article.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Title */}

          <div className="space-y-2 lg:col-span-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="title"
                className="text-sm font-medium"
              >
                Title
              </label>

              <span className="text-xs text-muted-foreground">
                {titleLength}/150
              </span>
            </div>

            <Input
              id="title"
              placeholder="Building Modern SaaS Applications"
              {...register("title")}
            />

            {errors.title && (
              <p className="text-sm text-destructive">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Slug */}

          <div className="space-y-2 lg:col-span-2">
            <label
              htmlFor="slug"
              className="text-sm font-medium"
            >
              URL Slug
            </label>

            <Input
              id="slug"
              {...register("slug")}
            />

            <p className="text-xs text-muted-foreground">
              /blog/{watch("slug")}
            </p>

            {errors.slug && (
              <p className="text-sm text-destructive">
                {errors.slug.message}
              </p>
            )}
          </div>

          {/* Cover */}

          <div className="space-y-2 lg:col-span-2">
            <label
              htmlFor="coverImage"
              className="text-sm font-medium"
            >
              Cover Image
            </label>

            <Input
              id="coverImage"
              placeholder="/images/blog/cover.webp"
              {...register("coverImage")}
            />

            {errors.coverImage && (
              <p className="text-sm text-destructive">
                {errors.coverImage.message}
              </p>
            )}
          </div>

          {/* Excerpt */}

          <div className="space-y-2 lg:col-span-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="excerpt"
                className="text-sm font-medium"
              >
                Excerpt
              </label>

              <span className="text-xs text-muted-foreground">
                {excerptLength}/300
              </span>
            </div>

            <Textarea
              id="excerpt"
              rows={5}
              placeholder="Short summary..."
              {...register("excerpt")}
            />

            {errors.excerpt && (
              <p className="text-sm text-destructive">
                {errors.excerpt.message}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Publishing */}
      {/* ------------------------------------------------------------------ */}

      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">
            Publishing
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Configure publication settings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Category */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Category
            </label>

            <select
              {...register("category")}
              className="h-11 w-full rounded-lg border bg-background px-3 text-sm"
            >
              {BLOG_CATEGORIES.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Status
            </label>

            <select
              {...register("status")}
              className="h-11 w-full rounded-lg border bg-background px-3 text-sm"
            >
              {BLOG_STATUSES.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Author */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Author
            </label>

            <Input
              {...register("author")}
            />

            {errors.author && (
              <p className="text-sm text-destructive">
                {errors.author.message}
              </p>
            )}
          </div>

          {/* Reading */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Reading Time
            </label>

            <Input
              type="number"
              {...register("readingTime", {
                valueAsNumber: true,
              })}
            />
          </div>

          {/* Canonical */}

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium">
              Canonical URL
            </label>

            <Input
              placeholder="https://example.com/blog/article"
              {...register("canonicalUrl")}
            />

            {errors.canonicalUrl && (
              <p className="text-sm text-destructive">
                {errors.canonicalUrl.message}
              </p>
            )}
          </div>

          {/* Publish Date */}

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium">
              Publish Date
            </label>

            <Input
              type="datetime-local"
              {...register("publishedAt")}
            />
          </div>

        </div>
      </section>
            {/* ------------------------------------------------------------------ */}
      {/* Content */}
      {/* ------------------------------------------------------------------ */}

      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">
            Content
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Write your article in Markdown / MDX.
          </p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="content"
            className="text-sm font-medium"
          >
            Article Content
          </label>

          <Textarea
            id="content"
            rows={24}
            placeholder="# Welcome..."
            className="min-h-[650px] resize-y font-mono"
            {...register("content")}
          />

          {errors.content && (
            <p className="text-sm text-destructive">
              {errors.content.message}
            </p>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SEO */}
      {/* ------------------------------------------------------------------ */}

      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">
            SEO
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Optimize this article for search engines.
          </p>
        </div>

        <div className="grid gap-6">

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">
                SEO Title
              </label>

              <span className="text-xs text-muted-foreground">
                {seoTitleLength}/70
              </span>
            </div>

            <Input
              {...register("seoTitle")}
            />

            {errors.seoTitle && (
              <p className="text-sm text-destructive">
                {errors.seoTitle.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">
                SEO Description
              </label>

              <span className="text-xs text-muted-foreground">
                {seoDescriptionLength}/160
              </span>
            </div>

            <Textarea
              rows={5}
              {...register(
                "seoDescription"
              )}
            />

            {errors.seoDescription && (
              <p className="text-sm text-destructive">
                {errors.seoDescription.message}
              </p>
            )}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Footer */}
      {/* ------------------------------------------------------------------ */}

      <div className="flex items-center justify-end border-t pt-8">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-w-44"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />

              {mode === "create"
                ? "Create Article"
                : "Save Changes"}
            </>
          )}
        </Button>
      </div>

    </fieldset>
  </form>
);
}