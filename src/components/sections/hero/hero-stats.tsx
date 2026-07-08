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
    <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8">
      {stats.map((item) => (
        <div
          key={item.label}
          className="text-center lg:text-left"
        >
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            {item.number}
          </h3>

          <p className="mt-2 text-sm text-zinc-400 sm:text-base">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}