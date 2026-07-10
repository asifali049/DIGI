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
    <div className="mt-12 sm:mt-16">
      <p
        className="
          mb-5
          text-center
          text-xs
          font-medium
          uppercase
          tracking-[0.25em]
          text-muted-foreground
          sm:mb-6
          sm:text-sm
          sm:tracking-[0.3em]
          lg:text-left
        "
      >
        Trusted by modern businesses
      </p>

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-3
          sm:gap-4
          lg:justify-start
        "
      >
        {companies.map((company) => (
          <div
            key={company}
            className="
              rounded-xl
              border
              border-border
              bg-card/70
              px-4
              py-2.5
              text-sm
              font-medium
              text-foreground
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-primary/40
              hover:bg-primary/10
              sm:px-5
              sm:py-3
            "
          >
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}