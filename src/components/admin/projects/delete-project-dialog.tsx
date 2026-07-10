"use client";

import { useCallback } from "react";

import {
  AlertTriangle,
  Loader2,
  Trash2,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui";

interface DeleteProjectDialogProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  projectName?: string;

  loading?: boolean;

  title?: string;

  description?: string;

  confirmText?: string;

  cancelText?: string;

  onConfirm: () => void | Promise<void>;
}

export function DeleteProjectDialog({
  open,
  onOpenChange,

  projectName,

  loading = false,

  title = "Delete Project",

  description,

  confirmText = "Delete Project",

  cancelText = "Cancel",

  onConfirm,
}: DeleteProjectDialogProps) {
  const handleConfirm =
    useCallback(async () => {
      try {
        await onConfirm();
      } catch (error) {
        console.error(error);
      }
    }, [onConfirm]);

  return (
    <AlertDialog
      open={open}
      onOpenChange={(value) => {
        if (!loading) {
          onOpenChange(value);
        }
      }}
    >
      <AlertDialogContent className="sm:max-w-md">

        <AlertDialogHeader>

          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-destructive/20 bg-destructive/10">
            <AlertTriangle className="h-7 w-7 text-destructive" />
          </div>

          <AlertDialogTitle>
            {title}
          </AlertDialogTitle>

          <AlertDialogDescription className="leading-7">

            {description ?? (
              <>
                You are about to permanently delete{" "}
                <span className="font-semibold text-foreground">
                  &ldquo;
                  {projectName ||
                    "this project"}
                  &rdquo;
                </span>
                .

                <br />
                <br />

                This action cannot be undone and
                all associated data will be
                permanently removed.
              </>
            )}

          </AlertDialogDescription>

        </AlertDialogHeader>

        <AlertDialogFooter>

          <AlertDialogCancel
            disabled={loading}
          >
            {cancelText}
          </AlertDialogCancel>

          <AlertDialogAction
            type="button"
            disabled={loading}
            onClick={(event) => {
              event.preventDefault();
              void handleConfirm();
            }}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" />
                {confirmText}
              </>
            )}
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}