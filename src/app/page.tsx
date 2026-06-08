import { Hero } from "@/components/sections/Hero";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperienceSnapshot } from "@/components/sections/ExperienceSnapshot";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <FeaturedProjects />
      <ExperienceSnapshot />
      <SkillsOverview />
      <ContactCTA />
    </>
  );
}
