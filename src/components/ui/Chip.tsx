import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small pill used for tech-stack tags and skill items. */
export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line/80 bg-white/[0.03] px-3 py-1 " +
          "text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}
