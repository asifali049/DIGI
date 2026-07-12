import type { Metadata } from "next";

import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { CaseStudies } from "@/components/portfolio/case-studies";
import { CTABanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Case Studies | Digital Agency",
  description:
    "Explore detailed case studies of web applications, SaaS platforms, and digital products we've built — the challenges, our solutions, and the measurable results.",

  keywords: [
    "Case Studies",
    "Web Development Case Study",
    "SaaS Case Study",
    "Digital Agency Portfolio",
    "Client Success Stories",
  ],

  alternates: {
    canonical: "/case-study",
  },

  openGraph: {
    title: "Case Studies | Digital Agency",
    description:
      "Explore detailed case studies of web applications, SaaS platforms, and digital products we've built.",
    url: "/case-study",
    type: "website",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <CaseStudyHero />
      <CaseStudies />
      <CTABanner />
    </>
  );
}
