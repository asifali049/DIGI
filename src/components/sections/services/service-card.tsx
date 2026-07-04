interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10">
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}