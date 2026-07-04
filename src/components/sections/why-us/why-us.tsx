import { Container, Section, SectionHeading } from "@/components/common";
import { FeatureCard } from "./feature-card";
import { features } from "./data";

export function WhyUs() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="Built for Quality, Performance & Growth"
          description="We combine strategy, design and engineering to deliver world-class digital products."
          center
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}