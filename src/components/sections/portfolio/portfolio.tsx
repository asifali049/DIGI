import {
  Container,
  Section,
  SectionHeading,
} from "@/components/common";

import { PortfolioCard } from "./portfolio-card";
import { portfolioProjects } from "./portfolio-data";

export function Portfolio() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Portfolio"
          title="Featured Projects"
          description="Explore some of our recent work across healthcare, AI, SaaS, and enterprise software."
          center
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:gap-8 xl:mt-16 xl:grid-cols-3">
          {portfolioProjects.map((project) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              category={project.category}
              technologies={project.technologies}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}