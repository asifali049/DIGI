"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  ContactFormValues,
} from "@/lib/contact-schema";

import { servicesList } from "@/constants/services-list";

import { Button } from "@/components/ui";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

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

    console.log(values);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    reset();

    setLoading(false);
  }

  return (
    <section className="pb-16 sm:pb-20 md:pb-24">
      <div className="container max-w-4xl">
        <div className="rounded-[28px] border bg-background/70 p-6 backdrop-blur-xl sm:rounded-4xl sm:p-8 md:p-12">
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <input
                {...register("name")}
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm sm:text-base"
              />

              <p className="mt-1 min-h-5 text-sm text-red-500">
                {errors.name?.message}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                {...register("email")}
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm sm:text-base"
              />

              <p className="mt-1 min-h-5 text-sm text-red-500">
                {errors.email?.message}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Company
              </label>

              <input
                {...register("company")}
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Service
              </label>

              <select
                {...register("service")}
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm sm:text-base"
              >
                <option value="">Select a service</option>

                {servicesList.map((service) => (
                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>
                ))}
              </select>

              <p className="mt-1 min-h-5 text-sm text-red-500">
                {errors.service?.message}
              </p>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Budget
              </label>

              <input
                {...register("budget")}
                placeholder="$2,000 - $5,000"
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm sm:text-base"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Project Details
              </label>

              <textarea
                rows={7}
                {...register("message")}
                className="min-h-40 w-full resize-y rounded-xl border bg-background px-4 py-3 text-sm sm:text-base"
              />

              <p className="mt-1 min-h-5 text-sm text-red-500">
                {errors.message?.message}
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-8 w-full sm:w-auto"
            disabled={loading}
            onClick={handleSubmit(onSubmit)}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </div>
    </section>
  );
}