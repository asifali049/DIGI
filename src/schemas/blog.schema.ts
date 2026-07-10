import { z } from "zod";

import type {
  BlogCategorySlug,
  BlogStatus,
} from "@/types/blog";

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

export const BLOG_CATEGORIES = [
  "development",
  "design",
  "marketing",
  "seo",
  "business",
  "technology",
  "ai",
  "startup",
  "case-study",
] as const satisfies readonly BlogCategorySlug[];

export const BLOG_STATUSES = [
  "draft",
  "published",
  "scheduled",
  "archived",
] as const satisfies readonly BlogStatus[];

export const BLOG_LIMITS = {
  title: 150,
  excerpt: 300,
  content: 100_000,
  readingTime: 120,
  tags: 10,
  seoTitle: 70,
  seoDescription: 160,
} as const;

const slugRegex =
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const imageRegex =
  /^(https?:\/\/.+|\/.+)$/i;

export const blogSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title is required.")
    .max(
      BLOG_LIMITS.title,
      `Maximum ${BLOG_LIMITS.title} characters.`
    ),

  slug: z
    .string()
    .trim()
    .regex(
      slugRegex,
      "Invalid slug format."
    ),

  excerpt: z
    .string()
    .trim()
    .min(20)
    .max(BLOG_LIMITS.excerpt),

  content: z
    .string()
    .trim()
    .min(50)
    .max(BLOG_LIMITS.content),

  coverImage: z
    .string()
    .trim()
    .regex(
      imageRegex,
      "Invalid image path."
    ),

  category: z.enum(BLOG_CATEGORIES),

  status: z.enum(BLOG_STATUSES),

  tags: z
    .array(z.string().trim().min(1))
    .min(1)
    .max(BLOG_LIMITS.tags),

  featured: z.boolean(),

  published: z.boolean(),

  author: z
    .string()
    .trim()
    .min(2)
    .max(60),

  readingTime: z
    .number()
    .int()
    .min(1)
    .max(BLOG_LIMITS.readingTime),

  seoTitle: z
    .string()
    .trim()
    .min(3)
    .max(BLOG_LIMITS.seoTitle),

  seoDescription: z
    .string()
    .trim()
    .min(20)
    .max(BLOG_LIMITS.seoDescription),

  canonicalUrl: z
    .string()
    .trim()
    .url()
    .optional()
    .or(z.literal("")),

  publishedAt: z
    .string()
    .optional(),
}); 
/* -------------------------------------------------------------------------- */
/*                              Business Rules                                */
/* -------------------------------------------------------------------------- */

export const blogFormSchema =
  blogSchema.superRefine(
    (data, ctx) => {
      if (
        data.published &&
        data.status !== "published"
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["status"],
          message:
            "Published articles must have Published status.",
        });
      }

      if (
        data.status === "published" &&
        !data.publishedAt
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["publishedAt"],
          message:
            "Publish date is required.",
        });
      }

      if (
        data.canonicalUrl &&
        !data.canonicalUrl.includes(data.slug)
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["canonicalUrl"],
          message:
            "Canonical URL should include the article slug.",
        });
      }
    }
  ); 
  /* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type BlogFormValues =
  z.infer<typeof blogFormSchema>;

export type BlogSchema =
  typeof blogFormSchema;

  /* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const DEFAULT_BLOG_FORM_VALUES: BlogFormValues =
  {
    title: "",

    slug: "",

    excerpt: "",

    content: "",

    coverImage: "",

    category: "development",

    status: "draft",

    tags: [],

    featured: false,

    published: false,

    author: "",

    readingTime: 5,

    seoTitle: "",

    seoDescription: "",

    canonicalUrl: "",

    publishedAt: "",
  };