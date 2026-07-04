import { FadeUp } from "@/components/common";
import { GradientText } from "@/components/ui";
import { TypeAnimation } from "react-type-animation";
import { HeroTechStack } from "./hero-tech-stack";
import { HeroButtons } from "./hero-buttons";
import { HeroStats } from "./hero-stats";
import { HeroTrust } from "./hero-trust";

export function HeroContent() {
  return (
    <div className="max-w-3xl">
      <FadeUp>
        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
          Premium Digital Agency
        </span>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h1 className="mt-8 text-6xl font-black leading-tight text-white lg:text-7xl">
          We Build{" "}
          <GradientText>
            Digital Products
          </GradientText>
          <br />
          That Grow Businesses.
        </h1>
      </FadeUp>

      <FadeUp delay={0.3}>
        <div className="mt-6 text-2xl font-semibold text-zinc-300">
          <TypeAnimation
            sequence={[
              "Full Stack Development",
              1500,
              "AI Solutions",
              1500,
              "Mobile App Development",
              1500,
              "UI/UX Design",
              1500,
              "Cloud & DevOps",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </FadeUp>

      <FadeUp delay={0.4}>
        <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
          We build scalable web applications, AI-powered software,
          enterprise solutions, mobile apps, and premium digital
          experiences that help businesses grow faster.
        </p>
      </FadeUp>

      <FadeUp delay={0.6}>
        <HeroButtons />
      </FadeUp>

      <FadeUp delay={0.8}>
        <HeroStats />
      </FadeUp>

      <FadeUp delay={1}>
        <HeroTrust />
      </FadeUp>

      <FadeUp delay={1.2}>
  <HeroTechStack />
    </FadeUp>
    </div>
  );
}