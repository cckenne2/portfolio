import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/visuals/Reveal";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export function ContactCTA() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="ring-glow relative overflow-hidden rounded-[2rem] glass px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Ambient glow inside the panel */}
            <div className="animate-glow pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[110px]" />
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(80%_80%_at_50%_50%,#000,transparent_75%)]" />

            <div className="relative flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-accent">
                Let&apos;s connect
              </span>

              <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-gradient">intelligent</span>.
              </h2>

              <p className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                I&apos;m open to AI/ML and data engineering roles and collaborations. If you have a
                problem that needs solving, I&apos;'d love to hear about it.
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink href={`mailto:${siteConfig.email}`} variant="primary" size="lg">
                  <MailIcon className="h-4 w-4" />
                  Get in touch
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
                <ButtonLink href={siteConfig.links.resume} variant="secondary" size="lg">
                  View Resume
                </ButtonLink>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-11 w-11 place-items-center rounded-full glass text-muted transition-colors hover:text-fg"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-full glass text-muted transition-colors hover:text-fg"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
