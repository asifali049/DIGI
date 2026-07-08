"use client";

import Link from "next/link";
import { ArrowUpRight, MapPinned } from "lucide-react";

import { Button } from "@/components/ui";

export function ContactMap() {
  return (
    <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-32">
      <div className="container">
        <div className="overflow-hidden rounded-[28px] border bg-background/70 backdrop-blur-xl sm:rounded-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-2 lg:p-10">
              <span className="inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
                Visit Our Office
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:mt-6 sm:text-4xl">
                Let&apos;s Meet
                <br />
                In Person
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base">
                Schedule a meeting with our team to discuss your project,
                product strategy, UI/UX, development, or digital
                transformation goals.
              </p>

              <div className="mt-8 space-y-4 sm:mt-10">
                <div className="flex items-start gap-3">
                  <MapPinned className="mt-1 h-5 w-5 shrink-0 text-primary" />

                  <span className="text-sm leading-6 sm:text-base">
                    Sector 62, Noida, Uttar Pradesh, India
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-8 w-full sm:mt-10 sm:w-fit"
                asChild
              >
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions

                  <ArrowUpRight className="ml-2 h-4 w-4 shrink-0" />
                </Link>
              </Button>
            </div>

            <div className="h-80 sm:h-100 lg:col-span-3 lg:h-125">
              <iframe
                title="Agency Office"
                src="https://www.google.com/maps?q=Noida+Sector+62&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}