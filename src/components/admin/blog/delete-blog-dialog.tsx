"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DeleteBlogDialogProps {
  title: string;
  onDelete?: () => void;
}

export function DeleteBlogDialog({
  title,
  onDelete,
}: DeleteBlogDialogProps) {
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    try {
      setIsDeleting(true);

      await Promise.resolve(onDelete?.());

      toast.success("Article deleted successfully.");

      setOpen(false);
    } catch {
      toast.error("Failed to delete article.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          aria-label="Delete article"
          className="text-destructive hover:bg-destructive/10 hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
          w-[calc(100vw-2rem)]
          max-w-md
          rounded-2xl
          p-6
        "
      >
        <DialogHeader>
          <DialogTitle className="text-xl">
            Delete Article
          </DialogTitle>

          <DialogDescription className="leading-7">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-foreground">
              &ldquo;{title}&rdquo;
            </span>
            ? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-6 flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              disabled={isDeleting}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
          </DialogClose>

          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
            className="w-full sm:w-auto"
          >
            {isDeleting
              ? "Deleting..."
              : "Delete Article"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}