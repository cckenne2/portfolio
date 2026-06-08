import type { Project } from "@/lib/data";
import { Chip } from "@/components/ui/Chip";
import { ArrowUpRightIcon, LockIcon } from "@/components/ui/icons";

/**
 * Glass project card with a hover glow ring.
 * - Public projects link out (e.g. GitHub).
 * - Confidential/employer-owned projects show a lock and a "summary only"
 *   footer instead of a link, so there are no disappointing dead-ends.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="ring-glow group relative flex h-full flex-col gap-5 rounded-3xl glass p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-accent">
          {project.category}
        </span>
        {project.confidential ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-faint">
            <LockIcon className="h-3.5 w-3.5" />
            Confidential
          </span>
        ) : (
          <ArrowUpRightIcon className="h-5 w-5 text-faint transition-colors group-hover:text-accent" />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-fg">{project.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.tagline}</p>
      </div>

      <p className="text-sm font-medium text-accent/90">{project.impact}</p>

      <ul className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Chip>{tech}</Chip>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-line/50 pt-4">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            {project.cta ?? "View project"}
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        ) : (
          <span className="text-xs leading-relaxed text-faint">
            Employer-owned — public summary only.
          </span>
        )}
      </div>
    </article>
  );
}
