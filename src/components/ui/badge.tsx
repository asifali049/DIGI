import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400",
        className
      )}
    >
      {children}
    </span>
  );
}