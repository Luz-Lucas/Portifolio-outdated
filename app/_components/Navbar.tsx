"use client";

import { memo } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

function NavbarComponent() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-sm uppercase tracking-[0.35em] text-white/80">
          Lucas Pereira
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/60" aria-label="Main navigation">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition"
        >
          Let’s talk
        </a>
      </div>
    </header>
  );
}

export const Navbar = memo(NavbarComponent);
