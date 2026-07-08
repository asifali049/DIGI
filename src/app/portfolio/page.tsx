import type { Metadata } from "next";

import { CaseStudies } from "@/components/portfolio/case-studies";
import { ClientSuccess } from "@/components/portfolio/client-success";
import { FeaturedProjects } from "@/components/portfolio/featured-projects";
import { PortfolioCta } from "@/components/portfolio/portfolio-cta";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { Results } from "@/components/portfolio/results";
import { ProjectTechnologies } from "@/components/portfolio/project-technologies";

export const metadata: Metadata = {
  title: "Portfolio | Digital Agency",
  description:
    "Explore our portfolio of premium websites, SaaS platforms, AI applications, mobile apps, and enterprise software.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <FeaturedProjects />
      <CaseStudies />
      <Results />
      <ClientSuccess />
      <ProjectTechnologies />
      <PortfolioCta />
    </>
  );
}