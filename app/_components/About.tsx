"use client";

import { memo } from "react";
import Image from "next/image";

function AboutComponent() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-md mx-auto aspect-[4/5]">
          <Image
            src="/aboutimg.png"
            alt="Lucas working"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain opacity-80"
            quality={100}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
        </div>
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">About me</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Student & Developer</h2>
          <p className="text-white/80 leading-relaxed">
            Software Engineering student from Minas Gerais, working as a Junior Developer at CP2. I build client-facing apps using React and TypeScript, focusing on responsive, performant interfaces.
          </p>
          <p className="text-white/80 leading-relaxed">
            Skilled in modern front-end tools (React, Tailwind, Figma) and expanding into full-stack (Node.js, PostgreSQL). I thrive in Agile teams, valuing code reviews and pair programming to deliver high-quality code.
          </p>
        </div>
      </div>
    </section>
  );
}

export const About = memo(AboutComponent);
