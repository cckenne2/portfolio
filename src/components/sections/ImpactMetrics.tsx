import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/visuals/CountUp";
import { Reveal } from "@/components/visuals/Reveal";
import { metrics } from "@/lib/data";

export function ImpactMetrics() {
  return (
    <section id="impact" className="relative scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-faint">
            Measurable impact across AI &amp; data systems
          </p>
        </Reveal>
        <dl className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 90}>
              <div className="ring-glow group relative h-full overflow-hidden rounded-3xl glass p-6 sm:p-7">
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span className="block bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                    <CountUp to={metric.value} suffix={metric.suffix} />
                  </span>
                  <span className="mt-3 block text-sm leading-snug text-muted">
                    {metric.label}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
