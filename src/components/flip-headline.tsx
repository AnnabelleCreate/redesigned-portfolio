"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const phrases = site.headline.accents;

export function FlipHeadline() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduced ? 4000 : 2400;
    let outTimer: number | undefined;
    const id = window.setInterval(() => {
      if (reduced) {
        setIndex((i) => (i + 1) % phrases.length);
        return;
      }
      setLeaving(true);
      outTimer = window.setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setLeaving(false);
      }, 320);
    }, hold);
    return () => {
      window.clearInterval(id);
      if (outTimer) window.clearTimeout(outTimer);
    };
  }, []);

  return (
    <h1 className="font-serif text-[clamp(0.75rem,5cqw,1.15rem)] leading-tight tracking-[-0.02em] text-ink">
      {site.headline.lead}
      <span className="flip-slot relative mt-1 block min-h-[2.3rem]">
        <span className="sr-only">{phrases.join(", ")}</span>
        <span
          key={`${index}-${leaving ? "out" : "in"}`}
          aria-live="polite"
          aria-atomic="true"
          className={`absolute inset-x-0 top-0 whitespace-nowrap text-[clamp(0.9rem,9cqw,2.05rem)] font-medium leading-[1.08] tracking-[-0.03em] text-crayon ${
            leaving ? "flip-word-out" : "flip-word-in"
          }`}
        >
          {phrases[index]}
        </span>
      </span>
    </h1>
  );
}
