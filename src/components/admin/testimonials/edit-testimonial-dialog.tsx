"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

import type { Testimonial } from "@/types/testimonial";

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

interface EditTestimonialDialogProps {
  testimonial: Testimonial;
  trigger?: React.ReactNode;
}

export function EditTestimonialDialog({
  testimonial,
  trigger,
}: EditTestimonialDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(
    values: TestimonialFormValues
  ) {
    try {
      setIsSubmitting(true);

      console.log({
        id: testimonial.id,
        ...values,
      });

      // TODO:
      // Replace with Server Action / API call.

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success(
        "Testimonial updated successfully."
      );

      setOpen(false);
    } catch {
      toast.error(
        "Failed to update testimonial."
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
        {trigger ?? (
          <Button
            variant="ghost"
            size="icon"
            aria-label="Edit testimonial"
          >
            <Pencil className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>
            Edit Testimonial
          </DialogTitle>
        </DialogHeader>

        <TestimonialForm
          defaultValues={{
            name: testimonial.name,
            company: testimonial.company,
            designation: testimonial.designation,
            avatar: testimonial.avatar,
            rating: testimonial.rating,
            message: testimonial.message,
            project: testimonial.project,
            status: testimonial.status,
            featured: testimonial.featured,
          }}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}