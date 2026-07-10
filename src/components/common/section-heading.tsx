import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        center && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span
          className="
            inline-flex items-center
            rounded-full
            border border-primary/20
            bg-primary/10
            px-4 py-1
            text-xs font-semibold
            tracking-wide
            text-primary
            sm:text-sm
          "
        >
          {badge}
        </span>
      )}

      <h2
        className="
          mt-4
          text-3xl
          font-black
          tracking-tight
          text-foreground
          sm:text-4xl
          lg:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            text-base
            leading-7
            text-muted-foreground
            sm:text-lg
            sm:leading-8
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}