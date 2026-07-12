"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

import { pricingPlans } from "@/constants/pricing";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function PricingPlans() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="relative py-4 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Billing Toggle */}

        <div className="mx-auto flex w-fit items-center gap-4 rounded-full border border-border bg-card/60 px-5 py-3 backdrop-blur-xl">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !yearly ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Monthly
          </span>

          <Switch
            checked={yearly}
            onCheckedChange={setYearly}
            aria-label="Toggle yearly billing"
          />

          <span
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              yearly ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Yearly

            <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-semibold text-violet-500 dark:text-violet-400">
              Save 20%
            </span>
          </span>
        </div>

        {/* Plans */}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-6 backdrop-blur-xl transition-all duration-300 sm:p-8",
                  plan.popular
                    ? "border-violet-500/50 bg-card shadow-2xl shadow-violet-500/10 lg:-translate-y-4"
                    : "border-border bg-card/60 hover:border-violet-500/30"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                    ${price.toLocaleString()}
                  </span>

                  <span className="text-sm font-medium text-muted-foreground">
                    /project
                  </span>
                </div>

                {yearly && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Billed as part of an annual retainer
                  </p>
                )}

                <Button
                  asChild
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className="mt-8 w-full"
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>

                <ul className="mt-8 space-y-3 border-t border-border pt-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-500 dark:text-violet-400" />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-muted-foreground sm:mt-12">
          Need something that doesn&apos;t fit these plans? We build custom
          quotes for unique scopes —{" "}
          <Link
            href="/contact"
            className="font-medium text-violet-500 underline-offset-4 hover:underline dark:text-violet-400"
          >
            get in touch
          </Link>{" "}
          and let&apos;s talk.
        </p>
      </div>
    </section>
  );
}
