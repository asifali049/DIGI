const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "Shopify",
  "Stripe",
];

export function HeroTrust() {
  return (
    <div className="mt-16">
      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Trusted by modern businesses
      </p>

      <div className="flex flex-wrap items-center gap-4">
        {companies.map((company) => (
          <div
            key={company}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10"
          >
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}