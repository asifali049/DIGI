import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  name: string;
}

export function TechCard({
  icon: Icon,
  name,
}: Props) {
  return (
    <div className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40">
      <Icon className="text-5xl text-violet-400 transition-transform duration-300 group-hover:scale-110" />

      <h3 className="mt-5 text-lg font-semibold text-white">
        {name}
      </h3>
    </div>
  );
}