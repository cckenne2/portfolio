import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SparklesIcon, ArrowRightIcon } from "@/components/ui/icons";

/**
 * Shared "coming soon" scaffold for future routes. Keeps placeholder pages
 * on-brand instead of looking broken while the real content is built out.
 */
export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(100%_70%_at_50%_0%,#000_30%,transparent_75%)]" />
      <div className="animate-float pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[110px]" />

      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <SparklesIcon className="h-4 w-4" />
            {eyebrow}
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {title}
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted">{description}</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/" variant="primary" size="lg">
              Back to home
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary" size="lg">
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
