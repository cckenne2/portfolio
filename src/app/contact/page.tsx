import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/visuals/Reveal";
import {
  ArrowUpRightIcon,
  FileTextIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Caleb Kennedy — AI/ML Engineer, Data Engineer, and Python Software Engineer in Denver, CO. Email, LinkedIn, GitHub, and résumé.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Caleb Kennedy",
    description:
      "Reach Caleb Kennedy via email, LinkedIn, or GitHub — open to AI/ML, Data Engineering, and Python roles.",
  },
};

type Method = {
  label: string;
  value: string;
  href: string;
  Icon: typeof MailIcon;
  blank: boolean;
  note: string;
};

const methods: Method[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: MailIcon,
    blank: false,
    note: "Best for a direct message — I read everything.",
  },
  {
    label: "LinkedIn",
    value: "in/calebkennedyAI",
    href: siteConfig.links.linkedin,
    Icon: LinkedInIcon,
    blank: true,
    note: "Connect or send me a message.",
  },
  {
    label: "GitHub",
    value: "cckenne2",
    href: siteConfig.links.github,
    Icon: GitHubIcon,
    blank: true,
    note: "See what I'm building.",
  },
  {
    label: "Résumé",
    value: "PDF download",
    href: siteConfig.links.resume,
    Icon: FileTextIcon,
    blank: true,
    note: "The full one-page résumé.",
  },
];

const openTo = [
  "AI/ML Engineer roles",
  "Data Engineer roles",
  "Python Software Engineer roles",
  "Production AI / RAG systems",
  "Interesting collaborations",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-8 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(120%_70%_at_50%_0%,#000_30%,transparent_75%)]" />
        <div className="animate-float pointer-events-none absolute left-1/2 top-6 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/12 blur-[110px]" />
        <Container>
          <Reveal>
            <div className="flex max-w-2xl flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" />
                Contact
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                Let&apos;s <span className="text-gradient">talk</span>
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted">
                I&apos;m based in {siteConfig.location} and open to new opportunities. The fastest way
                to reach me is email or LinkedIn — I usually reply within a day.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Methods */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {methods.map((method, i) => (
              <Reveal key={method.label} delay={i * 70}>
                <a
                  href={method.href}
                  {...(method.blank ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="ring-glow group flex h-full items-center gap-4 rounded-2xl glass p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <method.Icon className="h-6 w-6" />
                  </span>
                  <span className="flex flex-1 flex-col">
                    <span className="flex items-center gap-1.5 text-base font-semibold text-fg">
                      {method.label}
                      <ArrowUpRightIcon className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
                    </span>
                    <span className="text-sm text-accent/90">{method.value}</span>
                    <span className="mt-1 text-xs text-muted">{method.note}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What I'm open to */}
      <section className="py-12 pb-24 sm:py-16">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              eyebrow="Availability"
              title={
                <>
                  What I&apos;m <span className="text-gradient">open to</span>
                </>
              }
              description="Actively exploring full-time roles and collaborations where I can build production AI and data systems end to end."
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="flex flex-wrap gap-2">
              {openTo.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
