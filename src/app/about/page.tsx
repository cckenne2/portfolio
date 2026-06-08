import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/visuals/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ArrowRightIcon, FileTextIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Caleb Kennedy — a Data Science graduate and AI/ML & data engineer in Denver who builds production AI systems that replace slow, manual work with software that ships.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Caleb Kennedy",
    description:
      "A Data Science graduate and AI/ML & data engineer who builds production AI systems that solve real business problems.",
  },
};

const nowBuilding = [
  "Product Intelligence Engine (RAG)",
  "LLM enrichment (42,000+ records)",
  "DBSCAN deduplication (20,000+ records)",
  "SQL ETL → executive Power BI",
  "ERP → NetSuite migration",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero (no headshot here, by design) */}
      <section className="relative isolate overflow-hidden pb-8 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(120%_70%_at_50%_0%,#000_30%,transparent_75%)]" />
        <div className="animate-float pointer-events-none absolute left-1/2 top-6 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/12 blur-[110px]" />
        <Container>
          <Reveal>
            <div className="flex max-w-2xl flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" />
                About
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                Engineer first, <span className="text-gradient">builder always</span>
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted">
                {siteConfig.pillars.join(" · ")} — based in {siteConfig.location}. I build production
                AI and data systems that turn slow, manual work into software people actually use.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Story + headshot */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <div className="flex flex-col gap-5">
                <SectionHeading eyebrow="My story" title="How I got here" />
                <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted">
                  <p>
                    I came into software through data. I have a B.S. in Data Science from Arizona
                    State, and I spent a lot of that time figuring out how to make messy information
                    useful at scale — which is still the thread running through everything I build.
                  </p>
                  <p>
                    Most of my work has the same shape: there&apos;s a slow, manual process eating
                    hours every week, and I get to replace it with something faster and more
                    reliable. That&apos;s the part I enjoy — not AI for its own sake, but AI and data
                    systems that remove real friction for real people.
                  </p>
                  <p>
                    I like to own things end to end, from the data and the model down to the API and
                    the interface. The work I&apos;m proudest of is the work that made it into
                    production and changed how a team actually operates.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-2" delay={120}>
              <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
                <div className="animate-glow pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-cyan-500/15 blur-2xl" />
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-line/70 ring-1 ring-accent/20">
                  <Image
                    src="/caleb-kennedy.jpg"
                    alt="Caleb Kennedy, AI/ML Engineer, in Denver, CO"
                    fill
                    sizes="(max-width: 640px) 80vw, 360px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-xs text-faint">
                  Caleb Kennedy · {siteConfig.location}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What I'm doing now */}
      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              eyebrow="Now"
              title={
                <>
                  What I&apos;m <span className="text-gradient">building</span>
                </>
              }
              description="I'm a NetSuite Data Engineer and AI/ML Engineer at Krayden, a B2B specialty-chemical distributor in Denver. I work across a two-year ERP migration to NetSuite while building the AI and data tooling around it."
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="flex flex-wrap gap-2">
              {nowBuilding.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Background: education + independent work */}
      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading eyebrow="Background" title="Where I come from" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="ring-glow flex h-full flex-col gap-3 rounded-2xl glass p-6">
                <h3 className="text-lg font-semibold text-fg">B.S., Data Science</h3>
                <p className="text-sm font-medium text-accent">
                  Arizona State University · Dec 2024
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  Data Science with an emphasis in Business Analysis / IT / Networking. For my
                  capstone, I led a team of four building a Random Forest model that predicted
                  violent protest events from 200,000+ records — reaching 73% accuracy and a 0.83 AUC.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="ring-glow flex h-full flex-col gap-3 rounded-2xl glass p-6">
                <h3 className="text-lg font-semibold text-fg">Independent projects</h3>
                <p className="text-sm font-medium text-accent">Self-directed · ongoing</p>
                <p className="text-sm leading-relaxed text-muted">
                  I keep building outside of work: <span className="text-fg">PromptStudio</span>, a
                  full-stack platform for testing and evaluating LLM prompts, and{" "}
                  <span className="text-fg">PixelForge</span>, a PyTorch image super-resolution model.
                  It&apos;s how I learn new tools — by shipping something with them.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What drives me */}
      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              eyebrow="What drives me"
              title={
                <>
                  Boring problems, <span className="text-gradient">real impact</span>
                </>
              }
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="ring-glow h-full rounded-2xl glass p-6">
                <h3 className="text-base font-semibold text-fg">Why AI &amp; data engineering</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  I&apos;m drawn to the unglamorous, valuable problems: the catalog nobody wants to
                  search by hand, the duplicate records nobody can reconcile, the report that takes
                  all day to assemble. AI and data engineering are the tools — the point is impact
                  you can measure.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="ring-glow h-full rounded-2xl glass p-6">
                <h3 className="text-base font-semibold text-fg">How I work</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  I learn by building. I&apos;d rather ship a rough first version and improve it than
                  plan forever. I pay close attention to the people who&apos;ll actually use what I
                  make, and I try to leave systems more reliable than I found them.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What's next */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="ring-glow relative overflow-hidden rounded-3xl glass p-6 sm:p-10">
              <div className="animate-glow pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-indigo-500/15 blur-[100px]" />
              <div className="relative flex flex-col gap-4">
                <SectionHeading
                  eyebrow="What's next"
                  title="Where I want to go"
                  description="I'm looking for roles where I can keep building production AI and data systems — as an AI/ML Engineer, Data Engineer, or Python Software Engineer — somewhere that values ownership and shipping real things."
                />
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/projects" variant="primary" size="lg">
                    See my work
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </ButtonLink>
                  <ButtonLink href={siteConfig.links.resume} variant="secondary" size="lg">
                    <FileTextIcon className="h-4 w-4" />
                    Resume
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
