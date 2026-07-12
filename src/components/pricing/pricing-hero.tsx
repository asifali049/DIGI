export function PricingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            Pricing
          </span>

          <h1 className="mt-6 text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Simple, Transparent Pricing
          </h1>

          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            No hidden fees, no surprise invoices. Pick the plan that fits
            where your business is today — every tier is built on the same
            engineering standards.
          </p>
        </div>
      </div>
    </section>
  );
}
