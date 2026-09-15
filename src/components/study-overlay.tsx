"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type StudyOverlayValue = {
  slug: string | null;
  openStudy: (slug: string) => void;
  closeStudy: () => void;
};

const StudyOverlayContext = createContext<StudyOverlayValue | null>(null);

export function StudyOverlayProvider({ children }: { children: React.ReactNode }) {
  const [slug, setSlug] = useState<string | null>(null);
  const openStudy = useCallback((next: string) => setSlug(next), []);
  const closeStudy = useCallback(() => setSlug(null), []);
  const value = useMemo(() => ({ slug, openStudy, closeStudy }), [slug, openStudy, closeStudy]);

  return (
    <StudyOverlayContext.Provider value={value}>{children}</StudyOverlayContext.Provider>
  );
}

export function useStudyOverlay() {
  const ctx = useContext(StudyOverlayContext);
  if (!ctx) {
    throw new Error("useStudyOverlay must be used within StudyOverlayProvider");
  }
  return ctx;
}
