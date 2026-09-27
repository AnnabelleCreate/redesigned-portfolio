"use client";

import { useState } from "react";

export function SidebarIllustration() {
  const [welcoming, setWelcoming] = useState(false);

  return (
    <button
      type="button"
      aria-label="Annabelle studying — hover for a welcome"
      onMouseEnter={() => setWelcoming(true)}
      onMouseLeave={() => setWelcoming(false)}
      onFocus={() => setWelcoming(true)}
      onBlur={() => setWelcoming(false)}
      className="group relative mx-auto mt-2 block aspect-square w-full max-w-[10.75rem] shrink-0 focus-visible:outline-none"
    >
      <span className="sr-only">{welcoming ? "Welcome!" : "Annabelle studying"}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/studying.gif"
        alt=""
        className={`absolute left-1/2 top-0 h-[88.4%] w-[88.4%] -translate-x-1/2 scale-[1.12] object-contain transition-opacity duration-200 ${
          welcoming ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/studying-welcome.png"
        alt=""
        className={`absolute left-1/2 top-0 h-[88.4%] w-[88.4%] -translate-x-1/2 object-contain transition-opacity duration-200 ${
          welcoming ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <span
        aria-hidden
        className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 items-end justify-center gap-0.5 text-crayon"
      >
        <span className="-rotate-3 pb-0.5 text-[1rem] leading-none [font-family:'Bradley_Hand','Comic_Sans_MS',cursive]">
          {welcoming ? "welcome!" : "say hello"}
        </span>
        <svg
          viewBox="0 0 42 34"
          className="h-8 w-10 -rotate-12"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M38 30c-5-11-15-19-30-22" strokeWidth="1.6" />
          <path d="m8 8 7-2M8 8l3 7" strokeWidth="1.6" />
          <path d="M38 31c-4-10-15-18-29-21" strokeWidth="0.7" opacity=".55" />
        </svg>
      </span>
    </button>
  );
}
