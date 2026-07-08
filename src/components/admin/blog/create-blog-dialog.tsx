"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

import { BlogForm } from "./blog-form";
import type { BlogFormValues } from "./blog-schema";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CreateBlogDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(
    values: BlogFormValues
  ) {
    try {
      setIsSubmitting(true);

      console.log(values);

      // TODO:
      // Replace with Server Action / API

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success("Blog created successfully.");

      setOpen(false);
    } catch {
      toast.error("Failed to create blog.");
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
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4 shrink-0" />
          <span>New Article</span>
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
          max-h-[90dvh]
          w-[calc(100vw-2rem)]
          overflow-y-auto
          p-5
          sm:max-w-5xl
          sm:p-6
        "
      >
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            Create Blog
          </DialogTitle>
        </DialogHeader>

        <div className="mt-2">
          <BlogForm
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}