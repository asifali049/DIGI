"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Textarea,
} from "@/components/ui";

import {
  testimonialSchema,
  type TestimonialFormValues,
} from "./testimonial-schema";

interface TestimonialFormProps {
  defaultValues?: Partial<TestimonialFormValues>;
  onSubmit: (
    values: TestimonialFormValues
  ) => void | Promise<void>;
  isSubmitting?: boolean;
}

export function TestimonialForm({
  defaultValues,
  onSubmit,
  isSubmitting = false,
}: TestimonialFormProps) {
  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      company: "",
      designation: "",
      avatar: "",
      rating: 5,
      message: "",
      project: "",
      status: "pending",
      featured: false,
      ...defaultValues,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Basic Information */}

        <div className="space-y-5">
          <h3 className="text-lg font-semibold">
            Basic Information
          </h3>

          <div className="grid gap-6 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Client Name
                  </FormLabel>

                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      autoComplete="name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Company
                  </FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Acme Inc."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="designation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Designation
                  </FormLabel>

                  <FormControl>
                    <Input
                      placeholder="CEO"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="project"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Project
                  </FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Premium Digital Agency"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Avatar */}

        <div className="space-y-5">
          <h3 className="text-lg font-semibold">
            Media
          </h3>

          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Avatar URL
                </FormLabel>

                <FormControl>
                  <Input
                    placeholder="/images/testimonials/client.jpg"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Rating & Status */}

        <div className="space-y-5">
          <h3 className="text-lg font-semibold">
            Review
          </h3>

          <div className="grid gap-6 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Rating
                  </FormLabel>

                  <Select
                    value={String(field.value)}
                    onValueChange={(value) =>
                      field.onChange(
                        Number(value)
                      )
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="5">
                        ⭐⭐⭐⭐⭐ (5)
                      </SelectItem>

                      <SelectItem value="4">
                        ⭐⭐⭐⭐ (4)
                      </SelectItem>

                      <SelectItem value="3">
                        ⭐⭐⭐ (3)
                      </SelectItem>

                      <SelectItem value="2">
                        ⭐⭐ (2)
                      </SelectItem>

                      <SelectItem value="1">
                        ⭐ (1)
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Status
                  </FormLabel>

                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="pending">
                        Pending
                      </SelectItem>

                      <SelectItem value="approved">
                        Approved
                      </SelectItem>

                      <SelectItem value="featured">
                        Featured
                      </SelectItem>

                      <SelectItem value="archived">
                        Archived
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Testimonial */}

        <div className="space-y-5">
          <h3 className="text-lg font-semibold">
            Testimonial
          </h3>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Client Review
                </FormLabel>

                <FormControl>
                  <Textarea
                    rows={7}
                    placeholder="Write the client's testimonial..."
                    {...field}
                  />
                </FormControl>

                <p className="text-xs text-muted-foreground">
                  {field.value.length}/1000
                </p>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Settings */}

        <div className="space-y-5">
          <h3 className="text-lg font-semibold">
            Publishing
          </h3>

          <FormField
            control={form.control}
            name="featured"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between rounded-xl border p-5">
                <div>
                  <FormLabel>
                    Featured Testimonial
                  </FormLabel>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Display this testimonial on
                    the homepage.
                  </p>
                </div>

                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={
                      field.onChange
                    }
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-w-40"
        >
          {isSubmitting
            ? "Saving..."
            : "Save Testimonial"}
        </Button>
      </form>
    </Form>
  );
}