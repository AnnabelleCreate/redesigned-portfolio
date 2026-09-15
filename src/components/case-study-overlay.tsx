"use client";

import { useEffect, useState } from "react";
import { CaseStudyGate, PasswordOverlay } from "@/components/case-study-gate";
import { CaseStudyView } from "@/components/case-study-view";
import { useStudyOverlay } from "@/components/study-overlay";
import { getCaseStudy } from "@/lib/content";
import { hasUnlockedStudies } from "@/lib/study-password";

export function CaseStudyOverlay() {
  const { slug, closeStudy } = useStudyOverlay();
  const study = slug ? getCaseStudy(slug) : undefined;
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!study) {
      setUnlocked(false);
      return;
    }
    if (!study.locked) {
      setUnlocked(true);
      return;
    }
    setUnlocked(hasUnlockedStudies());
  }, [study]);

  useEffect(() => {
    if (!study || (study.locked && !unlocked)) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeStudy();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [study, unlocked, closeStudy]);

  if (!study) return null;

  if (study.locked && !unlocked) {
    return <PasswordOverlay onUnlock={() => setUnlocked(true)} onClose={closeStudy} />;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close case study"
        className="absolute inset-0 bg-[#1c1730]/50"
        onClick={closeStudy}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={study.title}
        className="figjam-canvas relative z-10 flex h-[80vh] w-[min(100%,80vw)] flex-col overflow-hidden rounded-2xl border border-ink/10 shadow-[0_24px_80px_rgba(28,23,48,0.28)]"
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-ink/8 bg-white/80 px-5 py-3">
                  <p className="truncate text-[13px] text-muted">{study.title}</p>
          <button
            type="button"
            onClick={closeStudy}
            className="rounded-lg border border-ink/10 bg-white px-4 py-1.5 text-[13px] shadow-sm"
          >
            Close
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto" data-study-scroll>
          <CaseStudyGate locked={study.locked}>
            <CaseStudyView study={study} onClose={closeStudy} />
          </CaseStudyGate>
        </div>
      </div>
    </div>
  );
}
