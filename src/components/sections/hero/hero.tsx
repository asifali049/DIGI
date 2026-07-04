import { Container } from "@/components/common";
import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroDashboard } from "./hero-dashboard";
import { AuroraBackground } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-40 pb-28">
      <>
        <AuroraBackground />
        <HeroBackground />
      </>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />

          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}