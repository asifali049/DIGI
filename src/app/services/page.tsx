import type { Metadata } from "next";

import { ServiceSchema } from "@/components/seo/service-schema";
import { Industries } from "@/components/services/industries";
import { ServiceBenefits } from "@/components/services/service-benefits";
import { ServiceComparison } from "@/components/services/service-comparison";
import { ServiceFaq } from "@/components/services/service-faq";
import { ServiceProcess } from "@/components/services/service-process";
import { ServicesCta } from "@/components/services/services-cta";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesHero } from "@/components/services/services-hero";
import { TechnologyStack } from "@/components/services/technology-stack";

export const metadata: Metadata = {
  title: "Services | Digital Agency",
  description:
    "Explore our premium digital services including web development, SaaS applications, mobile apps, UI/UX design, AI solutions, eCommerce, and custom software development.",

  keywords: [
    "Web Development",
    "Next.js Agency",
    "React Development",
    "Mobile App Development",
    "AI Development",
    "UI UX Design",
    "SaaS Development",
    "Digital Agency",
    "Software Development",
  ],

  openGraph: {
    title: "Premium Digital Services",
    description:
      "Modern websites, SaaS platforms, AI products, mobile applications, and enterprise software.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Premium Digital Services",
    description:
      "Modern websites, SaaS platforms, AI products, mobile applications, and enterprise software.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />

      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <ServiceBenefits />
      <Industries />
      <TechnologyStack />
      <ServiceComparison />
      <ServiceFaq />
      <ServicesCta />
    </>
  );
}