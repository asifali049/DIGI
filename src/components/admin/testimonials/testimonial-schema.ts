import { z } from "zod";

export const testimonialSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is required.")
    .max(100, "Maximum 100 characters."),

  company: z
    .string()
    .trim()
    .min(2, "Company is required.")
    .max(100, "Maximum 100 characters."),

  designation: z
    .string()
    .trim()
    .min(2, "Designation is required.")
    .max(100, "Maximum 100 characters."),

  avatar: z
    .string()
    .trim()
    .min(1, "Avatar is required."),

  rating: z
    .number()
    .int("Rating must be a whole number.")
    .min(1, "Minimum rating is 1.")
    .max(5, "Maximum rating is 5."),

  message: z
    .string()
    .trim()
    .min(20, "Testimonial message is required.")
    .max(1000, "Maximum 1000 characters."),

  project: z
    .string()
    .trim()
    .min(2, "Project name is required.")
    .max(120, "Maximum 120 characters."),

  status: z.enum([
    "pending",
    "approved",
    "featured",
    "archived",
  ]),

  featured: z.boolean(),
});

export type TestimonialFormValues = z.infer<
  typeof testimonialSchema
>;