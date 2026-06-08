import { Hero } from "@/components/sections/Hero";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { FlagshipProject } from "@/components/sections/FlagshipProject";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperienceSnapshot } from "@/components/sections/ExperienceSnapshot";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <FlagshipProject />
      <FeaturedProjects />
      <ExperienceSnapshot />
      <SkillsOverview />
      <ContactCTA />
    </>
  );
}
