"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;
export const SheetPortal = SheetPrimitive.Portal;

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
      className
    )}
    {...props}
  />
));

SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = {
  right:
    "fixed right-0 top-0 z-50 h-full w-full max-w-md border-l bg-background shadow-2xl sm:max-w-lg",
  left:
    "fixed left-0 top-0 z-50 h-full w-full max-w-md border-r bg-background shadow-2xl sm:max-w-lg",
  top:
    "fixed left-0 top-0 z-50 w-full border-b bg-background shadow-2xl",
  bottom:
    "fixed bottom-0 left-0 z-50 w-full border-t bg-background shadow-2xl",
};

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<
    typeof SheetPrimitive.Content
  > {
  side?: keyof typeof sheetVariants;
}

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      className,
      side = "right",
      children,
      ...props
    },
    ref
  ) => (
    <SheetPortal>
      <SheetOverlay />

      <SheetPrimitive.Content
        ref={ref}
        className={cn(
          sheetVariants[side],
          "p-6",
          className
        )}
        {...props}
      >
        {children}

        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100">
          <X className="h-4 w-4" />
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
);

SheetContent.displayName =
  SheetPrimitive.Content.displayName;

export function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mb-6 flex flex-col space-y-2",
        className
      )}
      {...props}
    />
  );
}

export function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-6 flex justify-end gap-2",
        className
      )}
      {...props}
    />
  );
}

export const SheetTitle = SheetPrimitive.Title;
export const SheetDescription =
  SheetPrimitive.Description;
  