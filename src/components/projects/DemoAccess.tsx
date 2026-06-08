import { ButtonLink } from "@/components/ui/Button";
import { LockIcon, ArrowRightIcon } from "@/components/ui/icons";
import { flagship } from "@/lib/data";
import { siteConfig } from "@/lib/site";

/**
 * Live-demo placeholder. The system runs on confidential data, so there is no
 * public instance yet — this presents an honest, polished "request access"
 * experience rather than a fake demo or a dead "coming soon" link.
 */
export function DemoAccess() {
  const { demo } = flagship;
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `${flagship.name} — demo access request`,
  )}`;

  return (
    <div className="ring-glow relative overflow-hidden rounded-3xl glass p-6 sm:p-10">
      <div className="animate-glow pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-indigo-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(80%_80%_at_30%_0%,#000,transparent_75%)]" />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex max-w-xl flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line/70 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted">
            <LockIcon className="h-3.5 w-3.5 text-accent" />
            Live demo · {demo.status}
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
            {demo.headline}
          </h3>
          <p className="text-pretty leading-relaxed text-muted">{demo.body}</p>
        </div>

        <div className="flex shrink-0 flex-col items-stretch gap-2">
          <ButtonLink href={mailto} variant="primary" size="lg">
            {demo.cta}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
          <span className="text-center text-xs text-faint">
            Password-protected sandbox in development
          </span>
        </div>
      </div>
    </div>
  );
}
