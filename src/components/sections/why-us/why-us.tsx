import {
  Container,
  Section,
  SectionHeading,
} from "@/components/common";

import { features } from "./data";
import { FeatureCard } from "./feature-card";

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

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:gap-8 xl:mt-16 xl:grid-cols-3">
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