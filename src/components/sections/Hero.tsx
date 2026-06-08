import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { NeuralField } from "@/components/visuals/NeuralField";
import {
  ArrowRightIcon,
  FileTextIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* Animated neural-network field */}
      <NeuralField className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-70" />
      {/* Engineering grid + vignette so headline text stays legible */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(120%_90%_at_50%_0%,#000_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink/30 to-ink" />
      {/* Floating accent orbs */}
      <div className="animate-float pointer-events-none absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
      <div
        className="animate-float pointer-events-none absolute -right-16 top-20 -z-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]"
        style={{ animationDelay: "1.5s" }}
      />

      <Container className="py-24 sm:py-28">
        <div className="flex max-w-3xl flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line/70 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {siteConfig.location} · Open to AI/ML, Data &amp; Python roles
          </span>

          <div className="flex flex-col gap-4">
            <h1 className="text-pretty text-5xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl">
              {siteConfig.name}
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                AI/ML Engineer
              </span>
            </h1>
            {/* Broadened positioning — widens the funnel without diluting the lead */}
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-medium text-muted sm:text-lg">
              {siteConfig.pillars.map((pillar, i) => (
                <Fragment key={pillar}>
                  {i > 0 && <span className="text-accent/70">·</span>}
                  <span>{pillar}</span>
                </Fragment>
              ))}
            </p>
          </div>

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
            I build <span className="font-medium text-fg">production AI and data systems</span>{" "}
            that turn months of manual work into seconds — including a full-stack RAG application
            demoed to the <span className="font-medium text-fg">CEO &amp; CFO and approved for
            production</span>, an LLM pipeline that enriched 42,000+ records, and SQL/ETL powering
            executive dashboards.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="#flagship" variant="primary" size="lg">
              View Projects
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href={siteConfig.links.resume} variant="secondary" size="lg">
              <FileTextIcon className="h-4 w-4" />
              Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost" size="lg">
              <MailIcon className="h-4 w-4" />
              Contact
            </ButtonLink>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-xs uppercase tracking-[0.2em] text-faint">Find me</span>
            <span className="h-px w-8 bg-line" />
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-fg"
              >
                <GitHubIcon />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-fg"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-fg"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll cue */}
      <a
        href="#impact"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-muted sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-accent" />
        </span>
      </a>
    </section>
  );
}
