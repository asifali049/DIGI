import type { Metadata } from "next";

import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingTabs } from "@/components/pricing/pricing-tabs";
import { AdditionalServices } from "@/components/pricing/additional-services";
import { RenewalCostsTable } from "@/components/pricing/renewal-costs-table";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { CTABanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Pricing | Digital Agency",
  description:
    "Transparent USD pricing for website development, full stack solutions, and e-commerce projects. Choose a package or get a custom quote for your project.",

  keywords: [
    "Web Development Pricing",
    "Digital Agency Pricing USD",
    "Full Stack Development Cost",
    "Shopify Development Pricing",
    "Custom Software Quote",
  ],

  alternates: {
    canonical: "/pricing",
  },

  openGraph: {
    title: "Pricing | Digital Agency",
    description:
      "Transparent USD pricing for website development, full stack solutions, and e-commerce projects.",
    url: "/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTabs />
      <AdditionalServices />
      <RenewalCostsTable />
      <PricingFaq />
      <CTABanner
        eyebrow="Let's Talk"
        title="Have a custom project in mind?"
        subtitle="Let's discuss your ideas and build something exceptional together."
        primaryCta={{
          label: "Book a Free Discovery Call",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Get a Custom Quote",
          href: "/contact",
        }}
      />
    </>
  );
}
