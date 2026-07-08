interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10 sm:p-7 lg:p-8">
      <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-400 sm:mt-4 sm:text-base">
        {description}
      </p>
    </div>
  );
}