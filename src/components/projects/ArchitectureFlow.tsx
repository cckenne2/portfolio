import { Fragment } from "react";
import type { CSSProperties } from "react";
import type { ArchKind, ArchStage } from "@/lib/data";
import { Reveal } from "@/components/visuals/Reveal";
import {
  UserIcon,
  MonitorIcon,
  ServerIcon,
  SearchIcon,
  DatabaseIcon,
  SparklesIcon,
  CheckCircleIcon,
} from "@/components/ui/icons";

const iconForKind: Record<ArchKind, typeof UserIcon> = {
  user: UserIcon,
  frontend: MonitorIcon,
  api: ServerIcon,
  search: SearchIcon,
  vector: DatabaseIcon,
  llm: SparklesIcon,
  output: CheckCircleIcon,
};

/**
 * Premium vertical pipeline visualization. Each stage is a glowing node card
 * connected by a gradient spine with a "data pulse" that travels downward
 * (disabled under prefers-reduced-motion). Replaces the plain stacked boxes.
 */
export function ArchitectureFlow({ stages }: { stages: ArchStage[] }) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-stretch">
      {stages.map((stage, i) => {
        const Icon = iconForKind[stage.kind];
        const isLast = i === stages.length - 1;
        return (
          <Fragment key={stage.tech}>
            <Reveal delay={i * 70}>
              <div className="ring-glow group relative flex items-center gap-4 rounded-2xl glass p-4 sm:p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-accent ring-1 ring-accent/30">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {stage.role}
                  </span>
                  <span className="text-base font-semibold text-fg">{stage.tech}</span>
                  <span className="mt-1 text-sm leading-snug text-muted">{stage.detail}</span>
                </div>
                <span
                  aria-hidden="true"
                  className="ml-auto hidden self-start text-xs font-semibold tabular-nums text-faint sm:block"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>

            {!isLast && (
              <div
                aria-hidden="true"
                className="relative mx-auto my-1 h-10 w-px"
                style={{ "--flow-distance": "40px" } as CSSProperties}
              >
                <span className="absolute inset-0 bg-gradient-to-b from-accent/50 to-indigo-400/40" />
                <span className="flow-pulse absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(34,211,238,0.5)]" />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
