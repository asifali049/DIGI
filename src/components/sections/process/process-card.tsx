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
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40">
      <span className="text-6xl font-black text-violet-500/20">
        {step}
      </span>

      <h3 className="mt-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}