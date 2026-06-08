import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/visuals/Reveal";
import { ArrowRightIcon, SparklesIcon } from "@/components/ui/icons";
import { flagship, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production AI and data-engineering systems plus independent projects — led by the Product Intelligence Engine, a full-stack RAG application approved for production.",
};

const caseStudyHref = `/projects/${flagship.slug}`;

export default function ProjectsPage() {
  const caseStudies = projects.filter((p) => p.category === "Professional Case Study");
  const independent = projects.filter((p) => p.category === "Public Project");

  return (
    <>
      {/* Page hero */}
      <section className="relative isolate overflow-hidden pb-8 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(120%_70%_at_50%_0%,#000_30%,transparent_75%)]" />
        <div className="animate-float pointer-events-none absolute left-1/2 top-6 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/12 blur-[110px]" />
        <Container>
          <Reveal>
            <div className="flex max-w-2xl flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" />
                Work
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                Projects
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted">
                Production AI and data-engineering systems, plus independent builds — led by a
                full-stack RAG application that shipped real business impact.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Professional Systems */}
      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-fg">
                Professional Systems
              </h2>
              <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
            </div>
          </Reveal>

          {/* Dominant flagship feature */}
          <Reveal>
            <Link
              href={caseStudyHref}
              aria-label={`${flagship.name} — read the case study`}
              className="ring-glow group relative block overflow-hidden rounded-[2rem] glass p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
            >
              <div className="animate-glow pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-[110px]" />
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(90%_80%_at_70%_0%,#000,transparent_75%)]" />

              <div className="relative grid gap-8 lg:grid-cols-5">
                <div className="flex flex-col gap-4 lg:col-span-3">
                  <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    <SparklesIcon className="h-4 w-4" />
                    Flagship Project
                  </span>
                  <h3 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                    {flagship.name}
                  </h3>
                  <p className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text font-medium text-transparent">
                    {flagship.tagline}
                  </p>
                  <p className="text-pretty leading-relaxed text-muted">{flagship.summary}</p>
                  <ul className="flex flex-wrap gap-2">
                    {flagship.stack.map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition-colors group-hover:text-accent">
                    Read the case study
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>

                <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-line/70 bg-line/40 lg:col-span-2">
                  {flagship.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-1 bg-surface/80 p-5">
                      <dt className="order-2 text-xs leading-snug text-muted">{stat.label}</dt>
                      <dd className="order-1 bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-lg font-semibold tracking-tight text-transparent sm:text-xl">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Link>
          </Reveal>

          {/* Other professional systems */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Independent Projects */}
      <section className="py-12 pb-24 sm:py-16">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-fg">
                Independent Projects
              </h2>
              <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {independent.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
