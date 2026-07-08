import { z } from "zod";

export const blogSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters.")
    .max(150, "Title cannot exceed 150 characters."),

  slug: z
    .string()
    .trim()
    .min(3, "Slug must be at least 3 characters.")
    .max(150)
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers and hyphens."
    ),

  excerpt: z
    .string()
    .trim()
    .min(20, "Excerpt must be at least 20 characters.")
    .max(300, "Excerpt cannot exceed 300 characters."),

  content: z
    .string()
    .trim()
    .min(50, "Content must be at least 50 characters."),

  coverImage: z
    .string()
    .min(1, "Cover image is required."),

  category: z.enum([
    "development",
    "design",
    "marketing",
    "seo",
    "business",
    "technology",
    "ai",
    "startup",
    "case-study",
  ]),

  status: z.enum([
    "draft",
    "published",
    "scheduled",
    "archived",
  ]),

  tags: z
    .array(z.string())
    .min(1, "Add at least one tag."),

  featured: z.boolean(),

  published: z.boolean(),

  author: z
    .string()
    .min(2, "Author is required."),

  readingTime: z
    .number()
    .min(1, "Reading time must be at least 1 minute."),

  seoTitle: z
    .string()
    .min(3, "SEO title is required."),

  seoDescription: z
    .string()
    .min(20, "SEO description is required.")
    .max(160, "SEO description cannot exceed 160 characters."),

  canonicalUrl: z
    .string()
    .url("Enter a valid URL.")
    .optional()
    .or(z.literal("")),

  publishedAt: z
    .string()
    .optional()
    .or(z.literal("")),
});

export type BlogFormValues = z.infer<typeof blogSchema>;