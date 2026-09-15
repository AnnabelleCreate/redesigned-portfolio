"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import {
  checkStudyPassword,
  hasUnlockedStudies,
  unlockStudies,
} from "@/lib/study-password";

export function PasswordOverlay({
  onUnlock,
  onClose,
}: {
  onUnlock: () => void;
  onClose?: () => void;
}) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close password overlay"
        className="absolute inset-0 bg-[#1c1730]/50"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="This case study is password protected"
        className="relative z-10 flex h-[min(70vh,36rem)] w-[min(100%,68vw)] max-w-[48rem] flex-col items-center justify-center overflow-hidden rounded-[12px] bg-paper px-6 py-10 shadow-[0_24px_80px_rgba(28,23,48,0.22)] sm:px-12"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/password-please.png"
          alt=""
          className="mb-6 max-h-40 w-auto max-w-[min(100%,22rem)] object-contain sm:max-h-48"
        />

        <p className="flex items-center gap-2.5 text-[16px] text-ink">
          <LockIcon />
          This case study is password protected
        </p>

        <form
          className="mt-5 flex w-full max-w-[22rem] flex-col items-center"
          onSubmit={(event) => {
            event.preventDefault();
            if (!checkStudyPassword(password)) {
              setError(true);
              return;
            }
            unlockStudies();
            onUnlock();
          }}
        >
          <div className="flex h-11 w-full items-center rounded-full border-[1.5px] border-[#CBC7ED] bg-transparent pl-4 pr-1.5">
            <input
              id="study-password"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter password"
              autoComplete="off"
              aria-label="Enter password"
              onChange={(event) => {
                setPassword(event.target.value);
                setError(false);
              }}
              className="min-w-0 flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-ink/35"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((open) => !open)}
              className="flex h-8 w-8 shrink-0 items-center justify-center text-[#CBC7ED] hover:text-crayon"
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
            <button
              type="submit"
              aria-label="Submit password"
              className="flex h-8 w-8 shrink-0 items-center justify-center text-ink/70 hover:text-ink"
            >
              <ArrowIcon />
            </button>
          </div>
          {error ? (
            <p className="mt-2 text-[13px] text-[#8a2f2f]">That password doesn’t match.</p>
          ) : null}
          <a
            href={`mailto:${site.email}?subject=Case study password`}
            className="mt-4 text-[14px] text-ink underline underline-offset-2"
          >
            Need access?
          </a>
        </form>
      </div>
    </div>
  );
}

export function CaseStudyGate({
  locked,
  children,
}: {
  locked?: boolean;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [ready, setReady] = useState(!locked);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!locked) return;
    setUnlocked(hasUnlockedStudies());
    setReady(true);
  }, [locked]);

  if (!locked || unlocked) return children;
  if (!ready) return null;

  return (
    <PasswordOverlay onUnlock={() => setUnlocked(true)} onClose={() => router.push("/")} />
  );
}

function LockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 3l18 18M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 2.4-4.4M9.9 5.2A11 11 0 0 1 12 5c6.5 0 10 7 10 7a16 16 0 0 1-3.2 4.1M6.1 6.6C3.9 8.3 2 12 2 12s3.5 7 10 7c1.4 0 2.7-.3 3.8-.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
