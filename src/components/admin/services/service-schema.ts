import { z } from "zod";

export const serviceSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Service title is required.")
    .max(100, "Service title must be under 100 characters."),

  slug: z
    .string()
    .trim()
    .min(3, "Slug is required.")
    .max(120)
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers, and hyphens."
    ),

  shortDescription: z
    .string()
    .trim()
    .min(10, "Short description is required.")
    .max(180, "Maximum 180 characters."),

  description: z
    .string()
    .trim()
    .min(20, "Description is required.")
    .max(5000, "Description is too long."),

  category: z.enum([
    "web-development",
    "mobile-development",
    "ui-ux-design",
    "branding",
    "digital-marketing",
    "seo",
    "automation",
    "consulting",
  ]),

  status: z.enum([
    "draft",
    "active",
    "archived",
  ]),

  icon: z
    .string()
    .trim()
    .min(1, "Icon is required."),

  image: z
    .string()
    .trim()
    .min(1, "Image is required."),

  priceFrom: z
    .number()
    .min(0, "Price cannot be negative.")
    .optional(),

  deliveryTime: z
    .string()
    .trim()
    .max(50, "Delivery time is too long.")
    .optional(),

  technologies: z
    .array(z.string().trim())
    .min(1, "Add at least one technology."),

  order: z
    .number()
    .int("Display order must be a whole number.")
    .min(0, "Display order cannot be negative.")

    .int("Display order must be a whole number.")
    .min(0, "Display order cannot be negative."),

  featured: z.boolean(),

  published: z.boolean(),

  seoTitle: z
    .string()
    .trim()
    .max(70, "SEO title should not exceed 70 characters.")
    .optional()
    .or(z.literal("")),

  seoDescription: z
    .string()
    .trim()
    .max(160, "SEO description should not exceed 160 characters.")
    .optional()
    .or(z.literal("")),

  canonicalUrl: z
    .string()
    .url("Enter a valid canonical URL.")
    .optional()
    .or(z.literal("")),
});

export type ServiceFormValues = z.infer<typeof serviceSchema>;