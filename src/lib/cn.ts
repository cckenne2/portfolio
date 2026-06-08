/**
 * Tiny className joiner. Filters out falsy values so we can write
 * `cn("base", condition && "active")` without pulling in a dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
