import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-violet-500/40",
        className
      )}
    >
      {children}
    </div>
  );
}