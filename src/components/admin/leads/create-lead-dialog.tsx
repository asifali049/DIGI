"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

import { LeadForm } from "./lead-form";
import type { LeadFormValues } from "./lead-schema";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CreateLeadDialogProps {
  trigger?: React.ReactNode;
}

export function CreateLeadDialog({
  trigger,
}: CreateLeadDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  async function handleSubmit(
    values: LeadFormValues
  ) {
    try {
      setIsSubmitting(true);

      console.log(values);

      // TODO:
      // Replace with Server Action / API

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success(
        "Lead created successfully."
      );

      setOpen(false);
    } catch {
      toast.error(
        "Failed to create lead."
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
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Lead
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>
            Create Lead
          </DialogTitle>

          <DialogDescription>
            Add a new lead to your CRM pipeline.
          </DialogDescription>
        </DialogHeader>

        <LeadForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}