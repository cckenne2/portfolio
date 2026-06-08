import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/visuals/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/icons";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function FeaturedProjects() {
  const caseStudies = projects.filter((p) => p.category === "Professional Case Study");
  const publicProjects = projects.filter((p) => p.category === "Public Project");

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                More systems, <span className="text-gradient">start to finish</span>
              </>
            }
            description="Beyond the flagship RAG system: production AI and data-engineering work, plus public projects. Case studies describe employer-owned systems at a high level — no proprietary source or data is shown."
          />
        </Reveal>

        {/* Professional case studies */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-fg">
              Production Case Studies
            </h3>
            <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Public projects */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-fg">
              Open Source &amp; Independent Projects
            </h3>
            <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {publicProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="flex justify-center">
          <ButtonLink href={siteConfig.links.github} variant="secondary" size="md">
            <GitHubIcon className="h-4 w-4" />
            See more on GitHub
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
