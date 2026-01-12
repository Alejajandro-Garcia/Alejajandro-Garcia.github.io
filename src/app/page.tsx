"use client";
import BouncingBubbles from "./components/bouncing-bubbles";
import StickyHeader from "./components/sticky-header";
import IntroCard from "./components/intro-card";
import AboutSection from "./components/about-section";
import ExperienceSection from "./components/experience-section";
import SkillsSection from "./components/skills-section";

export default function Home() {
  return (
    <div className="bg-black/70">
      <BouncingBubbles />
      <div className="z-10">
        <StickyHeader />
        <IntroCard />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
      </div>
    </div>
  );
}
