import {
  Container,
  Section,
  SectionHeading,
} from "@/components/common";

import { ServiceCard } from "./service-card";
import { services } from "./services-data";

export function Services() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Our Services"
          title="Everything You Need To Build Modern Digital Products"
          description="We design, develop and scale premium software for startups, enterprises and global brands."
          center
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:gap-8 xl:mt-16 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}