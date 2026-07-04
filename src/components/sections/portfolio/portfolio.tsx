import { Container, Section, SectionHeading } from "@/components/common";
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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