"use client";

import Link from "next/link";
import { ArrowUpRight, MapPinned } from "lucide-react";

import { Button } from "@/components/ui";

export function ContactMap() {
  return (
    <section
      aria-labelledby="contact-map-heading"
      className="pb-16 sm:pb-20 md:pb-24 lg:pb-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-border bg-background/70 backdrop-blur-xl sm:rounded-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-2 lg:p-10">
              <span className="inline-flex w-fit rounded-full border border-border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
                Visit Our Office
              </span>

              <h2
                id="contact-map-heading"
                className="mt-5 text-balance text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl"
              >
                Let&apos;s Meet
                <br />
                In Person
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base">
                Schedule a meeting with our team to discuss your project,
                product strategy, UI/UX, development, or digital
                transformation goals.
              </p>

              <address className="mt-8 not-italic sm:mt-10">
                <div className="flex items-start gap-3">
                  <MapPinned
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-primary"
                  />

                  <span className="text-sm leading-6 sm:text-base">
                    Sector 62, Noida, Uttar Pradesh, India
                  </span>
                </div>
              </address>

              <Button
                asChild
                size="lg"
                className="mt-8 w-full sm:mt-10 sm:w-fit"
              >
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions

                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-2 h-4 w-4 shrink-0"
                  />
                </Link>
              </Button>
            </div>

            {/* Google Map */}
            <div className="h-80 sm:h-[26rem] lg:col-span-3 lg:h-[32rem]">
              <iframe
                title="Map showing the agency office location in Sector 62, Noida"
                src="https://www.google.com/maps?q=Noida+Sector+62&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}