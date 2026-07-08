"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { serviceFaq } from "@/constants/service-faq";

export function ServiceFaq() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center sm:mb-16">
          <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            Answers to the most common questions about our services and
            development process.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-3 sm:space-y-4"
        >
          {serviceFaq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border px-4 sm:px-6"
            >
              <AccordionTrigger className="py-5 text-left text-base leading-6 sm:text-lg">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}