import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const baseStyles =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight " +
  "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<Variant, string> = {
  primary:
    "text-ink bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 shadow-[0_8px_30px_-8px_rgba(34,211,238,0.6)] " +
    "hover:shadow-[0_10px_40px_-6px_rgba(56,189,248,0.7)] hover:-translate-y-0.5",
  secondary:
    "text-fg glass hover:border-accent/40 hover:-translate-y-0.5 hover:text-white",
  ghost: "text-muted hover:text-white hover:bg-white/5",
};

const sizeStyles: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Force external-link behavior (new tab). Auto-detected for http(s) URLs. */
  external?: boolean;
  "aria-label"?: string;
};

/**
 * Renders the correct element for a link-style button:
 * - `next/link` for internal routes and in-page anchors (prefetch + client nav)
 * - a plain `<a>` for external URLs (new tab) and `mailto:` links
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  ...rest
}: ButtonLinkProps) {
  const classes = buttonClass(variant, size, className);
  const isHttp = href.startsWith("http") || external;
  const isMail = href.startsWith("mailto:");
  // Static assets served from /public (e.g. the résumé PDF) should open
  // directly in a new tab rather than going through the client router.
  const isFile = href.endsWith(".pdf");
  const opensNewTab = isHttp || isFile;

  if (isHttp || isMail || isFile) {
    return (
      <a
        href={href}
        className={classes}
        {...(opensNewTab ? { target: "_blank", rel: "noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
