interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
}

export function ProcessCard({
  step,
  title,
  description,
}: ProcessCardProps) {
  return (
    <div className="group relative flex h-full flex-col rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 sm:p-7 lg:p-8">
      <span className="text-5xl font-black leading-none text-violet-500/20 sm:text-6xl">
        {step}
      </span>

      <h3 className="mt-4 text-xl font-bold leading-tight text-foreground sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-base">
        {description}
      </p>
    </div>
  );
}