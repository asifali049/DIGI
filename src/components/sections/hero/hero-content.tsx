"use client";

import { FadeUp } from "@/components/common";
import { GradientText } from "@/components/ui";
import { TypeAnimation } from "react-type-animation";

import { HeroButtons } from "./hero-buttons";
import { HeroStats } from "./hero-stats";
import { HeroTechStack } from "./hero-tech-stack";
import { HeroTrust } from "./hero-trust";

export function HeroContent() {
  return (
    <div className="mx-auto w-full max-w-3xl text-center lg:mx-0 lg:text-left">
      <FadeUp>
        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-400 sm:px-4 sm:py-2 sm:text-sm">
          Premium Digital Agency
        </span>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
          We Build <GradientText>Digital Products</GradientText>
          <br className="hidden sm:block" />
          <span className="block sm:inline">That Grow Businesses.</span>
        </h1>
      </FadeUp>

      <FadeUp delay={0.3}>
        <div className="mt-5 text-lg font-semibold text-zinc-300 sm:mt-6 sm:text-xl lg:text-2xl">
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
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0 lg:text-xl lg:leading-9">
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