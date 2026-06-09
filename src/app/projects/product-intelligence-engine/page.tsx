import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/visuals/Reveal";
import { CaseStudySection } from "@/components/projects/CaseStudySection";
import { ArchitectureFlow } from "@/components/projects/ArchitectureFlow";
import { DemoAccess } from "@/components/projects/DemoAccess";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BoltIcon,
  CheckCircleIcon,
  LayersIcon,
  LockIcon,
  RouteIcon,
  SearchIcon,
  SparklesIcon,
  TargetIcon,
} from "@/components/ui/icons";
import { flagship, type ChallengeItem } from "@/lib/data";

export const metadata: Metadata = {
  title: flagship.name,
  description: flagship.summary,
  alternates: { canonical: `/projects/${flagship.slug}` },
  openGraph: {
    title: `${flagship.name} — Case Study`,
    description: flagship.summary,
  },
};

const challengeIcon: Record<ChallengeItem["icon"], typeof BoltIcon> = {
  grounding: CheckCircleIcon,
  retrieval: SearchIcon,
  latency: BoltIcon,
  prompt: SparklesIcon,
  ranking: TargetIcon,
  production: RouteIcon,
};

const capabilities = [
  { title: "Semantic search", body: "Understands product intent beyond keyword matching." },
  { title: "Context-aware generation", body: "Builds recommendations from retrieved product information to improve accuracy." },
  { title: "Production-ready performance", body: "Delivers intelligent product recommendations in seconds." },
];

function StatStrip() {
  return (
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
  );
}

export default function ProductIntelligenceEnginePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-line/60 pb-16 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(120%_80%_at_50%_0%,#000_30%,transparent_75%)]" />
        <div className="animate-float pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-[110px]" />
        <div
          className="animate-float pointer-events-none absolute -right-16 top-24 -z-10 h-64 w-64 rounded-full bg-indigo-500/15 blur-[110px]"
          style={{ animationDelay: "1.5s" }}
        />

        <Container className="flex flex-col gap-8">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              All projects
            </Link>
          </Reveal>

          <Reveal>
            <div className="flex max-w-3xl flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                <SparklesIcon className="h-4 w-4" />
                Flagship Case Study
              </span>
              <h1 className="text-pretty text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl">
                {flagship.name}
              </h1>
              <p className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-lg font-medium text-transparent sm:text-xl">
                {flagship.tagline}
              </p>
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
              <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {flagship.summary}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink href="#demo" variant="primary" size="lg">
                  {flagship.demo.cta}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
                <ButtonLink href="#architecture" variant="secondary" size="lg">
                  <LayersIcon className="h-4 w-4" />
                  See the architecture
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <StatStrip />
          </Reveal>
        </Container>
      </section>

      {/* Problem */}
      <CaseStudySection
        id="problem"
        eyebrow="The Problem"
        title="Manual product lookup didn't scale"
        intro={flagship.problem}
      />

      {/* Solution */}
      <CaseStudySection
        id="solution"
        eyebrow="The Solution"
        title="An instant, intelligent recommendation engine"
        intro={flagship.solution}
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 80}>
              <div className="ring-glow h-full rounded-2xl glass p-5">
                <h3 className="text-base font-semibold text-fg">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cap.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </CaseStudySection>

      {/* Architecture */}
      <CaseStudySection
        id="architecture"
        eyebrow="Architecture"
        title="How a request flows through the system"
        intro="The system finds relevant products based on a user's request, then uses them as context for generating the top recommendations."
      >
        <ArchitectureFlow stages={flagship.architecture} />
      </CaseStudySection>

      {/* Technical Challenges */}
      <CaseStudySection
        id="challenges"
        eyebrow="Engineering"
        title="Decisions & technical challenges"
        intro="The challenging part wasn't calling an API. It was making the recommendations trustworthy, relevant, and fast enough to use in real time."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {flagship.challenges.map((challenge, i) => {
            const Icon = challengeIcon[challenge.icon];
            return (
              <Reveal key={challenge.title} delay={i * 70}>
                <div className="ring-glow flex h-full flex-col gap-3 rounded-2xl glass p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-fg">{challenge.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{challenge.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </CaseStudySection>

      {/* Technology Stack */}
      <CaseStudySection
        id="stack"
        eyebrow="Stack"
        title="Technology stack"
        intro="A focused, production-minded stack — React and Python around a retrieval-augmented core."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {flagship.stackGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="ring-glow h-full rounded-2xl glass p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Chip>{item}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </CaseStudySection>

      {/* Results */}
      <CaseStudySection
        id="results"
        eyebrow="Impact"
        title="Results & impact"
        intro="Built independently, validated by leadership, and aimed squarely at a real operational cost."
      >
        <div className="flex flex-col gap-6">
          <Reveal>
            <StatStrip />
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {flagship.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-3 rounded-2xl glass p-4 text-sm leading-relaxed text-muted"
                >
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {result}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </CaseStudySection>

      {/* Live Demo */}
      <CaseStudySection
        id="demo"
        eyebrow="Live Demo"
        title="Try it — by request"
        intro="An honest note on access, rather than a fake demo."
      >
        <DemoAccess />
      </CaseStudySection>

      {/* Lessons Learned */}
      <CaseStudySection
        id="lessons"
        eyebrow="Reflection"
        title="Lessons learned"
        intro="What I'd carry into the next production AI system."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {flagship.lessons.map((lesson, i) => (
            <Reveal key={lesson.title} delay={i * 70}>
              <div className="ring-glow h-full rounded-2xl glass p-6">
                <h3 className="text-base font-semibold text-fg">{lesson.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{lesson.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </CaseStudySection>

      {/* Future Roadmap */}
      <CaseStudySection
        id="roadmap"
        eyebrow="What's next"
        title="Future roadmap"
        intro="Where the system would go with more time and production usage."
      >
        <ol className="flex flex-col gap-4">
          {flagship.roadmap.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <li className="ring-glow flex items-start gap-4 rounded-2xl glass p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/90 to-indigo-400/90 text-sm font-bold text-ink">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-fg">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </CaseStudySection>

      {/* Confidentiality note */}
      <Container>
        <p className="flex items-start gap-2 border-t border-line/50 py-8 text-xs leading-relaxed text-faint">
          <LockIcon className="mt-0.5 h-4 w-4 shrink-0" />
          {flagship.note}
        </p>
      </Container>

      <ContactCTA />
    </>
  );
}
