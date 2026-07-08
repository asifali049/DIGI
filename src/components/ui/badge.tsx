import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-violet-500/30 bg-violet-500/10 text-violet-400",

        secondary:
          "border-border bg-secondary text-secondary-foreground",

        outline:
          "border-border bg-transparent text-foreground",

        destructive:
          "border-red-500/30 bg-red-500/10 text-red-500",

        success:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}

export { badgeVariants };