"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { toast } from "sonner";

import { ServiceForm } from "./service-form";
import type { ServiceFormValues } from "./service-schema";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CreateServiceDialog() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  async function handleSubmit(
    values: ServiceFormValues
  ) {
    try {
      setIsSubmitting(true);

      console.log("Create Service", values);

      // TODO:
      // Replace with Server Action / API
      // await createService(values);

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success(
        "Service created successfully."
      );

      setOpen(false);

      // Future Server Action refresh
      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to create service."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!isSubmitting) {
          setOpen(value);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Service
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>
            Create Service
          </DialogTitle>
        </DialogHeader>

        <ServiceForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}