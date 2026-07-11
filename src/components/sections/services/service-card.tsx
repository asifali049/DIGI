interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-border
        bg-card/60
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary/40
        hover:bg-card
        sm:p-7
        lg:p-8
      "
    >
      <h3 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
        {title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground sm:text-base">
        {description}
      </p>
    </article>
  );
}