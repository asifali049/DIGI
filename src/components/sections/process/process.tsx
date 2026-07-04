import { Container, Section, SectionHeading } from "@/components/common";
import { ProcessCard } from "./process-card";
import { processSteps } from "./process-data";

export function Process() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Our Process"
          title="From Idea to Launch"
          description="A structured workflow that ensures quality, speed and long-term scalability."
          center
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <ProcessCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}