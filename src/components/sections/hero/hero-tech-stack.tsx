import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
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
    <div className="mt-12 flex flex-wrap gap-4">
      {tech.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.name}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40"
          >
            <Icon className={`text-2xl ${item.color}`} />
            <span className="text-sm text-zinc-300">
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}