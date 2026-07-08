"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

import type { Service } from "@/types/service";

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

interface EditServiceDialogProps {
  service: Service;
  trigger?: React.ReactNode;
}

export function EditServiceDialog({
  service,
  trigger,
}: EditServiceDialogProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  async function handleSubmit(
    values: ServiceFormValues
  ) {
    try {
      setIsSubmitting(true);

      console.log({
        id: service.id,
        ...values,
      });

      // TODO:
      // await updateService(service.id, values);

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success(
        "Service updated successfully."
      );

      setOpen(false);

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to update service."
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
        {trigger ?? (
          <Button
            variant="ghost"
            size="icon"
            aria-label="Edit service"
          >
            <Pencil className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>
            Edit Service
          </DialogTitle>
        </DialogHeader>

        <ServiceForm
          defaultValues={{
            title: service.title,
            slug: service.slug,
            shortDescription:
              service.shortDescription,
            description: service.description,
            category: service.category,
            status: service.status,
            icon: service.icon,
            image: service.image,
            priceFrom: service.priceFrom,
            deliveryTime:
              service.deliveryTime ?? "",
            technologies:
              service.technologies,
            order: service.order,
            featured: service.featured,
            published: service.published,
          }}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}