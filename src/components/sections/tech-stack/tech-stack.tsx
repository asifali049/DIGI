import {
  Container,
  Section,
  SectionHeading,
} from "@/components/common";

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

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:mt-16 xl:grid-cols-4">
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