import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/visuals/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
  const caseStudies = projects.filter((p) => p.category === "Professional Case Study");
  const publicProjects = projects.filter((p) => p.category === "Public Project");

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Work"
            title={
              <>
                Systems that{" "}
                <span className="text-gradient">ship and scale</span>
              </>
            }
            description="A selection of production AI and data work, plus public projects. Case studies describe employer-owned systems at a high level — no proprietary source or data is shown."
          />
        </Reveal>

        {/* Professional case studies */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-fg">
              Professional Case Studies
            </h3>
            <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
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
              Open Source &amp; Side Projects
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
          <ButtonLink href="/projects" variant="secondary" size="md">
            Explore all projects
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
