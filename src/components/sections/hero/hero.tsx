import { Container } from "@/components/common";
import { AuroraBackground } from "@/components/ui";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroDashboard } from "./hero-dashboard";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <>
        <AuroraBackground />
        <HeroBackground />
      </>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <HeroContent />

          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}