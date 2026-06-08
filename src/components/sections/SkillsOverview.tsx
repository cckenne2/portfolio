import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/visuals/Reveal";
import { skillGroups } from "@/lib/data";

export function SkillsOverview() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Toolkit"
            title={
              <>
                The stack behind{" "}
                <span className="text-gradient">the work</span>
              </>
            }
            description="A pragmatic toolkit spanning machine learning, data engineering, and full-stack software — chosen to ship reliable systems."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="ring-glow relative h-full rounded-3xl glass p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {group.title}
                  </h3>
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
      </Container>
    </section>
  );
}
