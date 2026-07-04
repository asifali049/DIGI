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
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40">
      <div className="h-56 bg-gradient-to-br from-violet-600/30 via-cyan-500/20 to-fuchsia-500/20" />

      <div className="p-6">
        <span className="text-sm text-violet-400">
          {category}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {title}
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}