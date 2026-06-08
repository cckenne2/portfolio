import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/visuals/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRightIcon, SparklesIcon } from "@/components/ui/icons";
import { flagship } from "@/lib/data";

const caseStudyHref = `/projects/${flagship.slug}`;

/**
 * Homepage teaser for the flagship case study. It summarizes the Product
 * Intelligence Engine and drives recruiters into the dedicated case-study page,
 * which is the portfolio's strongest asset.
 */
export function FlagshipProject() {
  return (
    <section id="flagship" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="ring-glow relative overflow-hidden rounded-[2rem] glass p-6 sm:p-10">
            {/* Ambient glow */}
            <div className="animate-glow pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-[110px]" />
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(90%_80%_at_70%_0%,#000,transparent_75%)]" />

            <div className="relative flex flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex flex-col gap-3">
                  <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    <SparklesIcon className="h-4 w-4" />
                    Flagship Project
                  </span>
                  <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl">
                    {flagship.name}
                  </h2>
                  <p className="max-w-xl text-pretty text-muted">{flagship.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {flagship.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <ButtonLink href={caseStudyHref} variant="primary" size="md" className="shrink-0">
                  Read the case study
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
              </div>

              {/* Body: narrative + condensed stack */}
              <div className="grid gap-8 lg:grid-cols-5">
                <div className="flex flex-col gap-6 lg:col-span-3">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-faint">
                      The problem
                    </h3>
                    <p className="text-pretty leading-relaxed text-muted">{flagship.problem}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-faint">
                      The solution
                    </h3>
                    <p className="text-pretty leading-relaxed text-muted">{flagship.solution}</p>
                  </div>
                  <div className="rounded-2xl border border-accent/20 bg-accent/[0.06] p-4">
                    <h3 className="mb-1 text-sm font-semibold text-accent">
                      Executive approval &amp; recognition
                    </h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted">
                      {flagship.recognition}
                    </p>
                  </div>
                </div>

                {/* Condensed stack */}
                <div className="flex flex-col gap-4 lg:col-span-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-faint">
                    Core stack
                  </h3>
                  <div className="flex flex-col gap-2 rounded-2xl border border-line/70 bg-ink/40 p-4">
                    {flagship.coreTech.map((stage, i) => (
                      <div
                        key={stage.tech}
                        className="flex items-center gap-3 rounded-xl border border-line/60 bg-white/[0.03] px-4 py-3"
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-300/90 to-indigo-400/90 text-xs font-bold text-ink">
                          {i + 1}
                        </span>
                        <span className="flex flex-col">
                          <span className="text-sm font-semibold text-fg">{stage.tech}</span>
                          <span className="text-xs text-faint">{stage.role}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {flagship.stack.map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stats strip */}
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/70 bg-line/40 lg:grid-cols-4">
                {flagship.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1 bg-surface/80 p-5">
                    <dt className="order-2 text-xs leading-snug text-muted">{stat.label}</dt>
                    <dd className="order-1 bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-xl font-semibold tracking-tight text-transparent sm:text-2xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Footer: note + CTA */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-relaxed text-faint">{flagship.note}</p>
                <ButtonLink href={caseStudyHref} variant="secondary" size="md" className="shrink-0">
                  Explore the full case study
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
