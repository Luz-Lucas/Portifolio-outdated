import { memo } from "react";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

function SectionHeadingComponent({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`space-y-4 ${centered ? "text-center" : "text-left"}`}>
      <p
        className={`font-mono text-xs uppercase tracking-[0.3em] text-red-500 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="text-white/30">{index}</span>
        <span className="h-px w-8 bg-red-500/60" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base leading-relaxed text-white/50 ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export const SectionHeading = memo(SectionHeadingComponent);
