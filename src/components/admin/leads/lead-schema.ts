import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is required.")
    .max(100, "Maximum 100 characters."),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address."),

  phone: z
    .string()
    .trim()
    .min(6, "Phone number is required.")
    .max(20, "Maximum 20 characters."),

  company: z
    .string()
    .trim()
    .min(2, "Company is required.")
    .max(100, "Maximum 100 characters."),

  service: z
    .string()
    .trim()
    .min(2, "Service is required."),

  budget: z
    .string()
    .trim()
    .min(1, "Budget is required."),

  source: z.enum([
    "website",
    "referral",
    "linkedin",
    "google",
    "facebook",
    "instagram",
    "email",
    "cold_call",
    "other",
  ]),

  priority: z.enum([
    "low",
    "medium",
    "high",
    "urgent",
  ]),

  status: z.enum([
    "new",
    "contacted",
    "qualified",
    "proposal_sent",
    "negotiation",
    "won",
    "lost",
  ]),

  assignedTo: z
    .string()
    .trim()
    .min(1, "Assigned user is required."),

  notes: z
    .string()
    .trim()
    .max(5000, "Maximum 5000 characters.")
    .optional(),

  followUpDate: z
    .string()
    .min(1, "Follow-up date is required."),

  website: z
    .string()
    .trim()
    .url("Enter a valid URL.")
    .or(z.literal(""))
    .optional(),

  address: z
    .string()
    .trim()
    .max(255, "Maximum 255 characters.")
    .optional(),

  estimatedValue: z
    .coerce
    .number()
    .min(0, "Estimated value cannot be negative.")
    .optional(),

  tags: z
    .array(z.string())
    .optional(),
});

/**
 * React Hook Form input type
 */
export type LeadFormValues = z.input<typeof leadSchema>;

/**
 * Parsed output type (optional)
 */
export type Lead = z.output<typeof leadSchema>;