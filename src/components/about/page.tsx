import { AboutHero } from "@/components/about/about-hero";
import { CompanyStory } from "@/components/about/company-story";
import { MissionVision } from "@/components/about/mission-vision";
import { Values } from "@/components/about/values";
import { Achievements } from "@/components/about/achievements";
import { Timeline } from "@/components/about/timeline";
import { Team } from "@/components/about/team";
import { AboutCTA } from "@/components/about/about-cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <Values />
      <Achievements />
      <Timeline />
      <Team />
      <AboutCTA />
    </>
  );
}