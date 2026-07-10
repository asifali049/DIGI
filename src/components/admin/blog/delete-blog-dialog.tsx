"use client";

import {
  useCallback,
  useState,
  useTransition,
} from "react";

import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

interface DeleteBlogDialogProps {
  title: string;
  onDelete?: () => Promise<void> | void;
  trigger?: React.ReactNode;
}

export function DeleteBlogDialog({
  title,
  onDelete,
  trigger,
}: DeleteBlogDialogProps) {
  const [open, setOpen] = useState(false);

  const [isPending, startTransition] =
    useTransition();

  const handleDelete = useCallback(() => {
    startTransition(async () => {
      try {
        await Promise.resolve(
          onDelete?.()
        );

        toast.success(
          "Article deleted successfully."
        );

        setOpen(false);
      } catch {
        toast.error(
          "Failed to delete article."
        );
      }
    });
  }, [onDelete]);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            size="icon"
            variant="ghost"
            aria-label={`Delete "${title}"`}
            className="text-destructive transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2
              aria-hidden="true"
              className="h-4 w-4"
            />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent
        aria-busy={isPending}
        className="w-[calc(100vw-2rem)] max-w-md rounded-2xl p-6"
      >
        <DialogHeader>
          <DialogTitle className="text-xl">
            Delete Article
          </DialogTitle>

          <DialogDescription className="leading-7">
            This action permanently removes{" "}
            <span className="font-semibold text-foreground">
              &ldquo;{title}&rdquo;
            </span>{" "}
            from your blog. This action cannot
            be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-6 flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              disabled={isPending}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
          </DialogClose>

          <Button
            type="button"
            variant="destructive"
            disabled={isPending}
            onClick={handleDelete}
            className="w-full sm:w-auto"
          >
            {isPending
              ? "Deleting..."
              : "Delete Article"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}