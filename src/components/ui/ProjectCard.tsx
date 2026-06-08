import Link from "next/link";
import type { Project } from "@/lib/data";
import { Chip } from "@/components/ui/Chip";
import { ArrowUpRightIcon, LockIcon, ArrowRightIcon } from "@/components/ui/icons";

/**
 * Glass project card with a hover glow ring. Professional case studies show a
 * "confidential" lock to signal employer-owned, non-public source.
 */
export function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.href.startsWith("http");
  const isInPageAnchor = project.href.startsWith("#");

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

      <div className="mt-auto pt-2">
        <ProjectAction href={project.href} cta={project.cta} external={isExternal} anchor={isInPageAnchor} />
      </div>
    </article>
  );
}

function ProjectAction({
  href,
  cta,
  external,
  anchor,
}: {
  href: string;
  cta: string;
  external: boolean;
  anchor: boolean;
}) {
  const className =
    "inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent";
  const content = (
    <>
      {cta}
      {external ? (
        <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      ) : (
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (external || anchor) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
