import { LayoutShell } from "@/components/layout";

import { Reveal } from "@/components/common/reveal";

import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";

import { StatsSection } from "@/components/home/stats-section";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PricingSection } from "@/components/home/pricing-section";
import { FAQSection } from "@/components/home/faq-section";
import { CTABanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <LayoutShell>
      <main
        id="main-content"
        className="bg-background text-foreground transition-colors duration-300"
      >
        <Hero />

        <Reveal>
          <section id="services">
            <Services />
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section id="why-us">
            <WhyUs />
          </section>
        </Reveal>

        <Reveal delay={0.15}>
          <section id="portfolio">
            <Portfolio />
          </section>
        </Reveal>

        <Reveal delay={0.2}>
          <section id="process">
            <Process />
          </section>
        </Reveal>

        <Reveal delay={0.25}>
          <section id="tech-stack">
            <TechStack />
          </section>
        </Reveal>

        <Reveal delay={0.3}>
          <section id="stats">
            <StatsSection />
          </section>
        </Reveal>

        <Reveal delay={0.35}>
          <section id="clients">
            <LogoMarquee />
          </section>
        </Reveal>

        <Reveal direction="right" delay={0.4}>
          <section id="testimonials">
            <TestimonialsSection />
          </section>
        </Reveal>

        <Reveal direction="left" delay={0.45}>
          <section id="pricing">
            <PricingSection />
          </section>
        </Reveal>

        <Reveal delay={0.5}>
          <section id="faq">
            <FAQSection />
          </section>
        </Reveal>

        <Reveal delay={0.55}>
          <section id="contact">
            <CTABanner />
          </section>
        </Reveal>
      </main>
    </LayoutShell>
  );
}