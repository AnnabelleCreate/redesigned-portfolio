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
        className={`absolute bottom-0 left-1/2 w-[88.4%] -translate-x-1/2 text-center font-serif text-[1rem] text-crayon transition-opacity duration-200 ${
          welcoming ? "opacity-100" : "opacity-0"
        }`}
      >
        welcome!
      </span>
    </button>
  );
}
