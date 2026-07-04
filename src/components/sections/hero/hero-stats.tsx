const stats = [
  {
    number: "100+",
    label: "Projects",
  },
  {
    number: "50+",
    label: "Clients",
  },
  {
    number: "5+",
    label: "Years",
  },
];

export function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-8">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-white">
            {item.number}
          </h3>

          <p className="mt-2 text-zinc-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}