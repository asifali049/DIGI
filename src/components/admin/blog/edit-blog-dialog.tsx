"use client";

import { useCallback, useState, useTransition } from "react";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

import type { BlogPost } from "@/types/blog";
import type { BlogFormValues } from "@/schemas/blog.schema";

import { BlogEditorForm } from "./blog-editor-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface EditBlogDialogProps {
  post: BlogPost;
  trigger?: React.ReactNode;
}

export function EditBlogDialog({
  post,
  trigger,
}: EditBlogDialogProps) {
  const [open, setOpen] = useState(false);

  const [isPending, startTransition] =
    useTransition();

  const handleOpenChange = useCallback(
    (value: boolean) => {
      setOpen(value);
    },
    []
  );

  const handleSubmit = useCallback(
    (values: BlogFormValues) => {
      startTransition(async () => {
        try {
          console.log({
            id: post.id,
            ...values,
          });

          // TODO:
          // Replace with Server Action / API Mutation

          await new Promise((resolve) =>
            setTimeout(resolve, 1000)
          );

          toast.success(
            "Blog updated successfully."
          );

          setOpen(false);
        } catch {
          toast.error(
            "Unable to update the blog."
          );
        }
      });
    },
    [post.id]
  );

  return (
    <Dialog
      open={open}
      onOpenChange={handleOpenChange}
    >
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            variant="ghost"
            size="icon"
            aria-label={`Edit "${post.title}"`}
          >
            <Pencil
              aria-hidden="true"
              className="h-4 w-4"
            />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent
        aria-busy={isPending}
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
            Edit Blog
          </DialogTitle>

          <DialogDescription>
            Update the blog details,
            content and SEO information.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <BlogEditorForm
            mode="edit"
            initialData={post}
            onSubmit={handleSubmit}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}