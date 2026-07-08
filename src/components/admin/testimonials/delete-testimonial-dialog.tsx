"use client";

import { useState } from "react";
import { toast } from "sonner";

import type { Testimonial } from "@/types/testimonial";
import { GenericConfirmDialog } from "@/components/admin/shared/generic-confirm-dialog";

interface DeleteTestimonialDialogProps {
  testimonial: Testimonial;
  trigger: React.ReactNode;
}

export function DeleteTestimonialDialog({
  testimonial,
  trigger,
}: DeleteTestimonialDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    try {
      setLoading(true);

      // TODO:
      // Replace with Server Action / API call.

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success(
        "Testimonial deleted successfully."
      );

      setOpen(false);
    } catch {
      toast.error(
        "Failed to delete testimonial."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        {trigger}
      </div>

      <GenericConfirmDialog
        open={open}
        onOpenChange={setOpen}
        loading={loading}
        title="Delete Testimonial"
        description={`Are you sure you want to permanently delete the testimonial from "${testimonial.name}"? This action cannot be undone.`}
        confirmText="Delete"
        destructive
        onConfirm={handleDelete}
      />
    </>
  );
}