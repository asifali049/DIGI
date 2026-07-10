"use client";

import * as React from "react";
import {
  Info,
  Loader2,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

/* -------------------------------------------------------------------------- */
/* Types */
/* -------------------------------------------------------------------------- */

export type ConfirmDialogVariant =
  | "default"
  | "warning"
  | "destructive";

export type ConfirmDialogSize =
  | "sm"
  | "md"
  | "lg";

export interface GenericConfirmDialogProps {
  open: boolean;

  onOpenChange: (
    open: boolean
  ) => void;

  title?: string;

  description?: string;

  confirmText?: string;

  cancelText?: string;

  loading?: boolean;

  variant?: ConfirmDialogVariant;

  size?: ConfirmDialogSize;

  hideCancel?: boolean;

  icon?: React.ReactNode;

  children?: React.ReactNode;

  onConfirm: () => void | Promise<void>;
}

/* -------------------------------------------------------------------------- */

const SIZE_CLASSES: Record<
  ConfirmDialogSize,
  string
> = {
  sm: "sm:max-w-md",

  md: "sm:max-w-lg",

  lg: "sm:max-w-2xl",
};

const ICON_CONTAINER: Record<
  ConfirmDialogVariant,
  string
> = {
  destructive:
    "bg-destructive/10 text-destructive",

  warning:
    "bg-amber-500/10 text-amber-500",

  default:
    "bg-primary/10 text-primary",
};

/* -------------------------------------------------------------------------- */

export function GenericConfirmDialog({
  open,
  onOpenChange,

  title = "Are you sure?",

  description =
    "This action cannot be undone.",

  confirmText = "Continue",

  cancelText = "Cancel",

  loading = false,

  variant = "destructive",

  size = "sm",

  hideCancel = false,

  icon,

  children,

  onConfirm,
}: GenericConfirmDialogProps) {
  const iconNode =
    icon ??
    (variant === "destructive" ? (
      <TriangleAlert className="h-6 w-6" />
    ) : variant === "warning" ? (
      <ShieldAlert className="h-6 w-6" />
    ) : (
      <Info className="h-6 w-6" />
    ));

  const handleConfirm =
    React.useCallback(
      async (
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        event.preventDefault();

        try {
          await onConfirm();
        } catch (error) {
          console.error(error);
        }
      },
      [onConfirm]
    );

  return (
    <AlertDialog
      open={open}
      onOpenChange={(value) => {
        if (!loading) {
          onOpenChange(value);
        }
      }}
    >
      <AlertDialogContent
        className={SIZE_CLASSES[size]}
      >
        <AlertDialogHeader>

          <div
            className={cn(
              "mb-4 flex h-14 w-14 items-center justify-center rounded-full",
              ICON_CONTAINER[variant]
            )}
          >
            {iconNode}
          </div>

          <AlertDialogTitle>
            {title}
          </AlertDialogTitle>

          <AlertDialogDescription className="leading-7">
            {description}
          </AlertDialogDescription>

        </AlertDialogHeader>

        {children && (
          <div className="py-2">
            {children}
          </div>
        )}

        <AlertDialogFooter>

          {!hideCancel && (
            <AlertDialogCancel
              asChild
            >
              <Button
                variant="outline"
                disabled={loading}
              >
                {cancelText}
              </Button>
            </AlertDialogCancel>
          )}

          <AlertDialogAction
            asChild
          >
            <Button
              variant={
                variant ===
                "destructive"
                  ? "destructive"
                  : "default"
              }
              disabled={loading}
              onClick={
                handleConfirm
              }
            >
              {loading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}

              {confirmText}
            </Button>
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}