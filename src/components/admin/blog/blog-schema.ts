import { z } from "zod";

export const blogCategories = [
  "development",
  "design",
  "marketing",
  "seo",
  "business",
  "technology",
  "ai",
  "startup",
  "case-study",
] as const;

export const blogStatuses = [
  "draft",
  "published",
  "scheduled",
  "archived",
] as const;

export const blogSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters.")
    .max(150, "Title cannot exceed 150 characters."),

  slug: z
    .string()
    .trim()
    .min(3, "Slug is required.")
    .max(180, "Slug is too long.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Use lowercase letters, numbers and hyphens only."
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
    .trim()
    .min(1, "Cover image is required."),

  category: z.enum(blogCategories),

  status: z.enum(blogStatuses),

  tags: z
    .array(
      z.string().trim().min(1)
    )
    .min(1, "Add at least one tag.")
    .max(10, "Maximum 10 tags allowed."),

  featured: z.boolean(),

  published: z.boolean(),

  author: z
    .string()
    .trim()
    .min(2, "Author name is required.")
    .max(60, "Author name is too long."),

  readingTime: z
    .number()
    .int("Reading time must be a whole number.")
    .min(1, "Minimum reading time is 1 minute.")
    .max(120, "Reading time cannot exceed 120 minutes."),

  seoTitle: z
    .string()
    .trim()
    .min(3, "SEO title is required.")
    .max(70, "SEO title should not exceed 70 characters."),

  seoDescription: z
    .string()
    .trim()
    .min(20, "SEO description must be at least 20 characters.")
    .max(160, "SEO description cannot exceed 160 characters."),

  canonicalUrl: z.union([
    z.literal(""),
    z.string().trim().url("Enter a valid canonical URL."),
  ]),

  publishedAt: z.union([
    z.literal(""),
    z.string(),
  ]),
});

export type BlogFormValues = z.infer<typeof blogSchema>;

export type BlogCategory =
  (typeof blogCategories)[number];

export type BlogStatus =
  (typeof blogStatuses)[number];