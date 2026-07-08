"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

import type { Lead } from "@/types/lead";

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

interface EditLeadDialogProps {
  lead: Lead;
  trigger?: React.ReactNode;
}

export function EditLeadDialog({
  lead,
  trigger,
}: EditLeadDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  async function handleSubmit(
    values: LeadFormValues
  ) {
    try {
      setIsSubmitting(true);

      console.log({
        id: lead.id,
        ...values,
      });

      // TODO:
      // Replace with Server Action / API

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success(
        "Lead updated successfully."
      );

      setOpen(false);
    } catch {
      toast.error(
        "Failed to update lead."
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
          >
            <Pencil className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>
            Edit Lead
          </DialogTitle>

          <DialogDescription>
            Update lead information and CRM details.
          </DialogDescription>
        </DialogHeader>

        <LeadForm
          defaultValues={{
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            company: lead.company,

            service: lead.service,
            budget: lead.budget,

            source: lead.source,
            priority: lead.priority,
            status: lead.status,

            assignedTo: lead.assignedTo,

            notes: lead.notes,
            followUpDate: lead.followUpDate,

            website: lead.website ?? "",
            address: lead.address ?? "",
            estimatedValue:
              lead.estimatedValue,
            tags: lead.tags ?? [],
          }}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}