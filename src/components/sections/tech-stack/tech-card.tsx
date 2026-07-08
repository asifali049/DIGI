import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  name: string;
}

export function TechCard({
  icon: Icon,
  name,
}: Props) {
  return (
    <div className="group flex h-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 sm:p-7 lg:p-8">
      <Icon className="text-4xl text-violet-400 transition-transform duration-300 group-hover:scale-110 sm:text-5xl" />

      <h3 className="mt-4 text-base font-semibold text-white sm:mt-5 sm:text-lg">
        {name}
      </h3>
    </div>
  );
}