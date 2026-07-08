import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  budget: z.string().optional(),
  message: z
    .string()
    .min(20, "Message should be at least 20 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
