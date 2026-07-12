"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { pricingFaq } from "@/constants/pricing-faq";

export function PricingFaq() {
  return (
    <section
      aria-labelledby="pricing-faq-heading"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center lg:mb-20">
          <span className="inline-flex rounded-full border border-border bg-background/60 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            FAQ
          </span>

          <h2
            id="pricing-faq-heading"
            className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Pricing Questions, Answered
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:leading-8">
            Still deciding which plan fits? Here&apos;s what most people ask
            before getting started.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {pricingFaq.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-card/60
                px-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-primary/30
                sm:px-6
              "
            >
              <AccordionTrigger className="py-6 text-left text-base font-medium leading-7 sm:text-lg">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-sm leading-7 text-muted-foreground sm:text-base md:leading-8">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
