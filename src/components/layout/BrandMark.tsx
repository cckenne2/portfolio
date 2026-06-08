import Image from "next/image";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

/**
 * The portfolio's brand mark: the logo (transparent PNG) with a cyan glow,
 * optionally followed by the name wordmark. No background box — the glow
 * follows the logo's silhouette via the `.logo-glow` filter.
 */
export function BrandMark({
  size = 36,
  showName = true,
  nameClassName,
  eager = false,
}: {
  size?: number;
  showName?: boolean;
  nameClassName?: string;
  eager?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        className="logo-glow"
        loading={eager ? "eager" : "lazy"}
      />
      {showName && (
        <span className={cn("text-sm font-semibold tracking-tight text-fg", nameClassName)}>
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}
