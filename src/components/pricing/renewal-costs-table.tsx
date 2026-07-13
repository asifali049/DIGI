import { renewalCosts } from "@/constants/agency-pricing";

export function RenewalCostsTable() {
  return (
    <section
      aria-labelledby="renewal-costs-heading"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 flex flex-col items-center text-center lg:mb-16">
          <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            Transparency
          </span>

          <h2
            id="renewal-costs-heading"
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Annual Renewal & Running Costs
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            No hidden costs. Here&apos;s what to expect after your project
            goes live.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-8 sm:text-sm">
                  Item
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-8 sm:text-sm">
                  Cost
                </th>
              </tr>
            </thead>

            <tbody>
              {renewalCosts.map((row, index) => (
                <tr
                  key={row.item}
                  className={
                    index !== renewalCosts.length - 1
                      ? "border-b border-border"
                      : ""
                  }
                >
                  <td className="px-5 py-4 text-sm font-medium text-foreground sm:px-8 sm:text-base">
                    {row.item}
                  </td>

                  <td className="px-5 py-4 text-sm text-muted-foreground sm:px-8 sm:text-base">
                    {row.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
