"use client";

import { useEffect, useState } from "react";
import type { CaseStudy } from "@/lib/content";

export function CaseStudyToc({
  sections,
  stickyClass,
}: {
  sections: CaseStudy["sections"];
  stickyClass: string;
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const headings = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!headings.length) return;

    const root = headings[0].closest("[data-study-scroll]") ?? null;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { root, rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Table of contents"
      className={`figjam-card px-3.5 py-4 ${stickyClass}`}
    >
      <p className="px-1.5 text-[11px] uppercase tracking-[0.12em] text-muted">Contents</p>
      <ol className="mt-3 space-y-0.5">
        {sections.map((section, index) => {
          const active = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(event) => {
                  const target = document.getElementById(section.id);
                  if (!target) return;
                  event.preventDefault();
                  const scroller = target.closest("[data-study-scroll]");
                  if (scroller instanceof HTMLElement) {
                    const offset =
                      target.getBoundingClientRect().top -
                      scroller.getBoundingClientRect().top +
                      scroller.scrollTop -
                      16;
                    scroller.scrollTo({ top: offset, behavior: "smooth" });
                  } else {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  setActiveId(section.id);
                }}
                className={`flex items-baseline gap-2 rounded-md px-1.5 py-1.5 text-[13px] leading-snug transition ${
                  active ? "bg-[#eee6fb] text-ink" : "text-ink/50 hover:bg-white/70 hover:text-ink"
                }`}
              >
                <span className="w-5 shrink-0 text-[11px] tabular-nums text-ink/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={active ? "font-medium" : ""}>{section.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
