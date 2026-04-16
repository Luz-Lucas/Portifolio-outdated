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

function FooterComponent() {
  return (
    <footer className="px-6 py-10 border-t border-white/20">
      <div className="mx-auto w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-white/60">&copy; 2026 Lucas Pereira. All rights reserved.</div>
        <nav className="flex flex-wrap gap-4 text-sm text-white/60">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
