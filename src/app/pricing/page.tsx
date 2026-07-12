import type { Metadata } from "next";

import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { CTABanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Pricing | Digital Agency",
  description:
    "Simple, transparent pricing for web development, SaaS applications, and custom software projects. Choose Starter, Professional, or Enterprise — or talk to us for a custom quote.",

  keywords: [
    "Web Development Pricing",
    "Software Development Cost",
    "SaaS Development Pricing",
    "Digital Agency Pricing",
    "Custom Software Quote",
  ],

  alternates: {
    canonical: "/pricing",
  },

  openGraph: {
    title: "Pricing | Digital Agency",
    description:
      "Simple, transparent pricing for web development, SaaS applications, and custom software projects.",
    url: "/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingFaq />
      <CTABanner />
    </>
  );
}
