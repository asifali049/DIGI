import { LayoutShell } from "@/components/layout";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { PricingSection } from "@/components/home/pricing-section";
import { FAQSection } from "@/components/home/faq-section";
import { CTABanner } from "@/components/home/cta-banner";
import { Reveal } from "@/components/common/reveal";




export default function HomePage() {
  return (
    <LayoutShell>
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Process />
      <TechStack />
      <Reveal>
        <StatsSection />
      </Reveal>
      <LogoMarquee />
      <Reveal direction="right" delay={0.2}>
        <TestimonialsSection />
      </Reveal>
      <Reveal direction="left">
        <PricingSection />
      </Reveal>
      <FAQSection />
      <CTABanner />
    </LayoutShell>

  );
}