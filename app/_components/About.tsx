"use client";

import { memo } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STATS = [
  { value: "2+", label: "Years coding" },
  { value: "5+", label: "Client projects" },
  { value: "PT/EN", label: "Languages" },
] as const;

function AboutComponent() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Portrait with glow frame */}
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
            <div
              aria-hidden
              className="absolute -inset-12 bg-red-600/10 blur-3xl transition-opacity duration-500 group-hover:opacity-150"
            />
            <Image
              src="/aboutimg.png"
              alt="Lucas Pereira working"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060606] via-[#060606]/50 to-transparent" />
          </div>

          {/* Floating code chip */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/80 px-5 py-2.5 font-mono text-xs tracking-wider text-white/70 backdrop-blur-xl">
            <span className="text-red-500">const</span> passion ={" "}
            <span className="text-red-400">&quot;code&quot;</span>
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="About"
              title={
                <>
                  Student by day,
                  <span className="block text-gradient-red">builder always</span>
                </>
              }
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 leading-relaxed text-white/60">
              <p>
                Software Engineering student from Minas Gerais, Brazil, working
                as a Junior Developer at CP2 Junior Company. I build
                client-facing applications with React and TypeScript, focused
                on responsive, performant interfaces.
              </p>
              <p>
                Comfortable across the modern frontend toolchain and steadily
                expanding into full-stack territory. I thrive in Agile teams —
                code reviews and pair programming are where I sharpen my craft.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="card-glow rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center backdrop-blur-sm hover:border-red-500/40"
                >
                  <p className="font-display text-2xl font-bold text-gradient-red md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export const About = memo(AboutComponent);
