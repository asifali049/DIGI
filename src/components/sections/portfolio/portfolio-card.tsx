interface PortfolioCardProps {
  title: string;
  category: string;
  technologies: string[];
}

export function PortfolioCard({
  title,
  category,
  technologies,
}: PortfolioCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40">
      {/* Preview */}
      <div className="h-44 bg-liner-to-br from-violet-600/30 via-cyan-500/20 to-fuchsia-500/20 sm:h-52 lg:h-56" />

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-xs font-medium text-violet-400 sm:text-sm">
          {category}
        </span>

        <h3 className="mt-3 text-xl font-bold leading-tight text-foreground sm:text-2xl">
          {title}
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] font-medium text-muted-foreground sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}