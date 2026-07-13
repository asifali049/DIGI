import { PlusCircle } from "lucide-react";

import { additionalServices } from "@/constants/agency-pricing";

export function AdditionalServices() {
  return (
    <section
      aria-labelledby="additional-services-heading"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center lg:mb-16">
          <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            Add-ons
          </span>

          <h2
            id="additional-services-heading"
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Additional Services
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Optional add-ons to complete your project setup — pick only
            what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {additionalServices.map((service) => (
            <div
              key={service.name}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 sm:px-6 sm:py-5"
            >
              <div className="flex items-center gap-3">
                <PlusCircle className="h-5 w-5 shrink-0 text-violet-500 dark:text-violet-400" />

                <span className="text-sm font-medium leading-6 text-foreground sm:text-base">
                  {service.name}
                </span>
              </div>

              <span className="shrink-0 whitespace-nowrap text-sm font-bold text-foreground sm:text-base">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
