"use client";

import { createContext, useContext, useState } from "react";

type RecruiterContextValue = {
  recruiter: boolean;
  setRecruiter: (value: boolean) => void;
};

const RecruiterContext = createContext<RecruiterContextValue | null>(null);

export function RecruiterProvider({ children }: { children: React.ReactNode }) {
  const [recruiter, setRecruiter] = useState(false);

  return (
    <RecruiterContext.Provider value={{ recruiter, setRecruiter }}>
      {children}
    </RecruiterContext.Provider>
  );
}

export function useRecruiter() {
  const ctx = useContext(RecruiterContext);
  if (!ctx) {
    throw new Error("useRecruiter must be used within RecruiterProvider");
  }
  return ctx;
}
