import { memo } from "react";

function AnimatedBackgroundComponent() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[#060606]">
      {/* Blueprint grid fading toward the bottom */}
      <div className="absolute inset-0 bg-grid" />

      {/* Ambient red glows */}
      <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-red-600/15 blur-[140px]" />
      <div className="absolute top-1/3 -left-48 h-96 w-96 rounded-full bg-red-900/10 blur-[120px]" />
      <div className="absolute bottom-0 -right-48 h-96 w-96 rounded-full bg-red-800/10 blur-[120px]" />

      {/* Vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,6,0.6)_100%)]" />
    </div>
  );
}

export const AnimatedBackground = memo(AnimatedBackgroundComponent);
