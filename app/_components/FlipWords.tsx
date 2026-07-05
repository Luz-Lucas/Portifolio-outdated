"use client";

import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type FlipWordsProps = {
  words: readonly string[];
  className?: string;
  interval?: number;
};

function FlipWordsComponent({ words, className = "", interval = 2400 }: FlipWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const currentWord = words[index];

  return (
    <span className={`relative inline-block h-[1.2em] align-baseline ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ rotateX: -90, opacity: 0, y: 16 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: 90, opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="inline-block origin-bottom"
          style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export const FlipWords = memo(FlipWordsComponent);
