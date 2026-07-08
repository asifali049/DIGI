import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 sm:p-7 lg:p-8">
      <div className="mb-5 inline-flex rounded-2xl bg-violet-500/10 p-3 sm:mb-6 sm:p-4">
        <Icon className="h-7 w-7 text-violet-400 sm:h-8 sm:w-8" />
      </div>

      <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-400 sm:mt-4 sm:text-base">
        {description}
      </p>
    </div>
  );
}