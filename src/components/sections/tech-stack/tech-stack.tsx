import { Container, Section, SectionHeading } from "@/components/common";
import { TechCard } from "./tech-card";
import { techStack } from "./tech-data";

export function TechStack() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Technology"
          title="Modern Technology Stack"
          description="We use industry-leading technologies to build fast, scalable, and secure digital products."
          center
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {techStack.map((tech) => (
            <TechCard
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}