import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/layout/BrandMark";
import { navLinks, siteConfig } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";

const socials = [
  { label: "GitHub", href: siteConfig.links.github, Icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: siteConfig.links.linkedin, Icon: LinkedInIcon, external: true },
  { label: "Email", href: `mailto:${siteConfig.email}`, Icon: MailIcon, external: false },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line/70 bg-ink-2/60">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} — home`}>
            <BrandMark size={32} />
          </Link>
          <p className="text-sm text-faint">
            {siteConfig.role} · Building practical AI &amp; data systems.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-fg"
            >
              <Icon />
            </a>
          ))}
        </div>
      </Container>

      <Container className="border-t border-line/40 py-6">
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-faint sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
