"use client";

import { useEffect, useState } from "react";

type ContactItem = {
  label: string;
  href: string;
  copyValue: string;
};

export function SidebarContact({ items }: { items: ContactItem[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(null), 1600);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copy(item: ContactItem) {
    await navigator.clipboard.writeText(item.copyValue);
    setCopied(item.label);
  }

  return (
    <div className="border-t border-ink/10 pt-4">
      <p className="text-[10px] uppercase tracking-[0.14em] text-ink/40">Contact</p>
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
        {items.map((item) => (
          <div key={item.label} className="group/contact inline-flex items-center">
            <a
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="text-[12px] text-ink/65 transition hover:text-ink hover:underline hover:underline-offset-4"
            >
              {item.label}
            </a>
            <button
              type="button"
              onClick={() => void copy(item)}
              aria-label={`Copy ${item.label}`}
              title={copied === item.label ? "Copied" : `Copy ${item.label}`}
              className="ml-0 flex w-0 translate-x-1 items-center justify-center overflow-hidden text-ink/35 opacity-0 transition-all hover:text-ink focus:ml-1 focus:w-4 focus:translate-x-0 focus:opacity-100 group-hover/contact:ml-1 group-hover/contact:w-4 group-hover/contact:translate-x-0 group-hover/contact:opacity-100"
            >
              {copied === item.label ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="5.25" y="5.25" width="8.25" height="8.25" rx="1.25" stroke="currentColor" />
      <path d="M10.75 5.25V3.5A1.5 1.5 0 0 0 9.25 2h-5.5A1.75 1.75 0 0 0 2 3.75v5.5a1.5 1.5 0 0 0 1.5 1.5h1.75" stroke="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="m3 8 3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
