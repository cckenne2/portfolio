"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import { buttonClass } from "@/components/ui/Button";
import { CloseIcon, FileTextIcon, GitHubIcon, MenuIcon } from "@/components/ui/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/70 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-indigo-500 text-sm font-bold text-ink shadow-[0_4px_20px_-4px_rgba(34,211,238,0.6)]">
            CK
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-fg sm:block">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hidden h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg sm:grid"
          >
            <GitHubIcon />
          </a>
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonClass("secondary", "md"), "hidden md:inline-flex")}
          >
            <FileTextIcon className="h-4 w-4" />
            Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center rounded-full text-fg transition-colors hover:bg-white/5 md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "overflow-hidden border-line/70 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden",
          menuOpen ? "max-h-96 border-b opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-fg"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex items-center gap-3 px-1">
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className={cn(buttonClass("secondary", "md"), "flex-1")}
            >
              <FileTextIcon className="h-4 w-4" />
              Resume
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-full glass text-fg"
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
