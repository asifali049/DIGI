"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import type { Service } from "@/types/service";

import { GenericConfirmDialog } from "@/components/admin/shared/generic-confirm-dialog";

interface DeleteServiceDialogProps {
  service: Service;
  trigger: React.ReactNode;
}

export function DeleteServiceDialog({
  service,
  trigger,
}: DeleteServiceDialogProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    try {
      setLoading(true);

      console.log("Delete Service:", service.id);

      // TODO:
      // await deleteService(service.id);

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success(
        `"${service.title}" deleted successfully.`
      );

      setOpen(false);

      // Future Server Actions
      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete service.");
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
        onOpenChange={(value) => {
          if (!loading) {
            setOpen(value);
          }
        }}
        loading={loading}
        title="Delete Service"
        description={`Are you sure you want to permanently delete "${service.title}"? This action cannot be undone.`}
        confirmText="Delete"
        destructive
        onConfirm={handleDelete}
      />
    </>
  );
}