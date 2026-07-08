import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const tech = [
  { icon: SiReact, color: "text-cyan-400", name: "React" },
  { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
  { icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
  { icon: SiNodedotjs, color: "text-green-500", name: "Node.js" },
  { icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind" },
];

export function HeroTechStack() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4 lg:justify-start">
      {tech.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.name}
            className="flex min-h-12 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 sm:gap-3 sm:px-5 sm:py-3"
          >
            <Icon
              className={`text-xl sm:text-2xl ${item.color}`}
            />

            <span className="text-xs text-zinc-300 sm:text-sm">
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}