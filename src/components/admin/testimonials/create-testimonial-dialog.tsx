"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

import { TestimonialForm } from "./testimonial-form";
import type { TestimonialFormValues } from "./testimonial-schema";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CreateTestimonialDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(
    values: TestimonialFormValues
  ) {
    try {
      setIsSubmitting(true);

      console.log(values);

      // TODO:
      // Replace with Server Action / API call.

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success(
        "Testimonial created successfully."
      );

      setOpen(false);
    } catch {
      toast.error(
        "Failed to create testimonial."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Testimonial
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>
            Create Testimonial
          </DialogTitle>
        </DialogHeader>

        <TestimonialForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}