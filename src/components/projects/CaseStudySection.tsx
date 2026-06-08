import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/visuals/Reveal";

/**
 * Consistent section scaffold for the case-study page: an accent eyebrow,
 * a title, an optional intro, then content. Matches the homepage's
 * SectionHeading rhythm so the page feels native to the portfolio.
 */
export function CaseStudySection({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20">
      <Container className="flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" />
              {eyebrow}
            </span>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl md:text-4xl">
              {title}
            </h2>
            {intro && (
              <p className="max-w-3xl text-pretty leading-relaxed text-muted sm:text-lg">{intro}</p>
            )}
          </div>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
