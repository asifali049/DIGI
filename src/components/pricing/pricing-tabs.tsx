"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { pricingTabs } from "@/constants/agency-pricing";
import { PricingCard } from "./pricing-card";

export function PricingTabs() {
  return (
    <section className="relative py-4 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs
          defaultValue={pricingTabs[0].id}
          className="w-full"
        >
          <div className="flex justify-center">
            <TabsList className="h-auto flex-wrap justify-center gap-1 rounded-2xl border border-border bg-card/60 p-1.5 backdrop-blur-xl">
              {pricingTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="rounded-xl px-4 py-2.5 text-xs font-semibold sm:px-6 sm:text-sm"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {pricingTabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="mt-10 sm:mt-12"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                {tab.cards.map((card) => (
                  <PricingCard key={card.id} card={card} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-6 text-muted-foreground sm:mt-16">
          All prices are in USD. Need something that doesn&apos;t fit these
          plans? We build custom quotes for unique scopes —{" "}
          <a
            href="/contact"
            className="font-medium text-violet-500 underline-offset-4 hover:underline dark:text-violet-400"
          >
            get in touch
          </a>{" "}
          and let&apos;s talk.
        </p>
      </div>
    </section>
  );
}
