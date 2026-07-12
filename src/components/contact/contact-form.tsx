"use client";

import { useId, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

import { servicesList } from "@/constants/services-list";

import { Button } from "@/components/ui";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const ids = {
    name: useId(),
    email: useId(),
    company: useId(),
    service: useId(),
    budget: useId(),
    message: useId(),
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setLoading(true);

    try {
      // TODO:
      // Replace with API call
      console.log(values);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="pb-16 sm:pb-20 md:pb-24"
    >
      <div className="container mx-auto px-4 max-w-4xl sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-border bg-background/70 p-6 backdrop-blur-xl sm:rounded-4xl sm:p-8 md:p-12">
          <h2
            id="contact-form-heading"
            className="sr-only"
          >
            Contact Form
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor={ids.name}
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name
                </label>

                <input
                  id={ids.name}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary sm:text-base"
                />

                <p
                  className="mt-1 min-h-5 text-sm text-destructive"
                  role="alert"
                >
                  {errors.name?.message}
                </p>
              </div>

              <div>
                <label
                  htmlFor={ids.email}
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id={ids.email}
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary sm:text-base"
                />

                <p
                  className="mt-1 min-h-5 text-sm text-destructive"
                  role="alert"
                >
                  {errors.email?.message}
                </p>
              </div>

              <div>
                <label
                  htmlFor={ids.company}
                  className="mb-2 block text-sm font-medium"
                >
                  Company
                </label>

                <input
                  id={ids.company}
                  autoComplete="organization"
                  {...register("company")}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary sm:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor={ids.service}
                  className="mb-2 block text-sm font-medium"
                >
                  Service
                </label>

                <select
                  id={ids.service}
                  aria-invalid={!!errors.service}
                  {...register("service")}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary sm:text-base"
                >
                  <option value="">
                    Select a service
                  </option>

                  {servicesList.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}
                </select>

                <p
                  className="mt-1 min-h-5 text-sm text-destructive"
                  role="alert"
                >
                  {errors.service?.message}
                </p>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor={ids.budget}
                  className="mb-2 block text-sm font-medium"
                >
                  Budget
                </label>

                <input
                  id={ids.budget}
                  autoComplete="off"
                  placeholder="$2,000 - $5,000"
                  {...register("budget")}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary sm:text-base"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor={ids.message}
                  className="mb-2 block text-sm font-medium"
                >
                  Project Details
                </label>

                <textarea
                  id={ids.message}
                  rows={7}
                  aria-invalid={!!errors.message}
                  {...register("message")}
                  className="min-h-40 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary sm:text-base"
                />

                <p
                  className="mt-1 min-h-5 text-sm text-destructive"
                  role="alert"
                >
                  {errors.message?.message}
                </p>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="mt-8 w-full sm:w-auto"
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}