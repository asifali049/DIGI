import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm transition-colors",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";