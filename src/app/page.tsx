import { LayoutShell } from "@/components/layout";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";

export default function HomePage() {
  return (
    <LayoutShell>
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Process />
      <TechStack />
    </LayoutShell>
  );
}