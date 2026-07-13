import { Container } from "@/components/common";
import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroDashboard } from "./hero-dashboard";

export function Hero() {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-24
        pb-16
        sm:pt-28
        sm:pb-20
        lg:pt-36
        lg:pb-24
        xl:pt-40
        xl:pb-28
      "
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-16
            xl:gap-20
          "
        >
          <HeroContent />

          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}