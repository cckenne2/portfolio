import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/visuals/Reveal";
import { experience } from "@/lib/data";

export function ExperienceSnapshot() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title={
              <>
                A track record of{" "}
                <span className="text-gradient">owning outcomes</span>
              </>
            }
            description="From applied AI to data platforms to full-stack delivery — a snapshot of where I focus and the impact I drive."
          />
        </Reveal>

        {/* Vertical timeline */}
        <ol className="relative flex flex-col gap-10 border-l border-line/70 pl-8 sm:pl-10">
          {experience.map((entry, i) => (
            <li key={entry.role} className="relative">
              {/* Timeline node */}
              <span className="absolute -left-[2.45rem] top-1.5 grid h-5 w-5 place-items-center sm:-left-[3.05rem]">
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-400 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]" />
              </span>

              <Reveal delay={i * 90}>
                <div className="ring-glow relative rounded-3xl glass p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-xl font-semibold tracking-tight text-fg">
                      {entry.role}
                    </h3>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {entry.track}
                    </span>
                    <span className="ml-auto text-xs font-medium uppercase tracking-wider text-faint">
                      {entry.period}
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {entry.summary}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {entry.highlights.map((h) => (
                      <li key={h}>
                        <Chip>{h}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
