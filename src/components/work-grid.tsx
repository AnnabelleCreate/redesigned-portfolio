"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRecruiter } from "@/components/recruiter";
import { useStudyOverlay } from "@/components/study-overlay";
import { projects, visualCards, type WorkKind } from "@/lib/content";

const filters: { id: WorkKind; label: string }[] = [
  { id: "product", label: "Product" },
];

const tagColors = ["#fff4c2", "#ead9ff", "#d4efd8", "#d6ebff"];
const projectOrder = ["core", "cavalry", "cmused", "ladle", "homehudl", "sonaride", "gotr"];

export function WorkGrid() {
  const [filter, setFilter] = useState<WorkKind>("product");
  const { recruiter } = useRecruiter();
  const { openStudy } = useStudyOverlay();

  const visible = useMemo(
    () =>
      projects
        .filter((project) => project.kind === filter)
        .sort(
          (first, second) =>
            projectOrder.indexOf(first.slug) - projectOrder.indexOf(second.slug),
        ),
    [filter],
  );

  return (
    <div>
      <div className="mb-7 flex justify-end">
        <div
          className="inline-flex rounded-xl bg-white/85 p-1"
          style={{
            boxShadow:
              "0 0 0 1.5px #c4b4ea, 1px 2px 0 1.5px #d9cef3, 0 3px 0 0 rgba(109, 92, 184, 0.12)",
          }}
        >
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`rounded-lg px-3.5 py-1.5 text-[13px] transition ${
                filter === item.id
                  ? "bg-lavender font-medium text-ink"
                  : "text-ink/45 hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {filter === "visual" ? (
        <VisualBento />
      ) : (
        <div className="grid gap-6 min-[801px]:grid-cols-2">
          {visible.map((project, index) => {
            const Card = (
              <article
                className="figjam-card figjam-card-lift group overflow-hidden"
                style={{ rotate: `${[-0.45, 0.55, -0.25, 0.35][index % 4]}deg` }}
              >
                <div className="overflow-hidden bg-[#e8e4f5]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1600}
                      height={1000}
                      className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 34vw, 90vw"
                    />
                  ) : (
                    <div className="checkerboard relative aspect-[16/10]" />
                  )}
                </div>
                <div className="px-5 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="figjam-sticky px-2 py-1 text-[11px] font-medium leading-none"
                        style={{
                          background: tagColors[tagIndex % tagColors.length],
                          rotate: `${[-0.8, 0.6, -0.4, 0.9][tagIndex % 4]}deg`,
                          boxShadow: "none",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-2.5 text-[1.15rem] font-semibold leading-snug tracking-[-0.02em]">
                    {project.title}
                  </h2>
                  <p className="mt-1.5 line-clamp-2 text-[14px] leading-5 text-muted">
                    {recruiter ? project.recruiter : project.description}
                  </p>
                </div>
              </article>
            );

            return project.external ? (
              <a key={project.slug} href={project.href} target="_blank" rel="noreferrer">
                {Card}
              </a>
            ) : (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                onClick={(event) => {
                  if (
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey ||
                    event.button !== 0
                  ) {
                    return;
                  }
                  event.preventDefault();
                  openStudy(project.slug);
                }}
              >
                {Card}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function VisualBento() {
  return (
    <div className="grid grid-cols-1 items-start gap-5 min-[801px]:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] min-[801px]:grid-rows-[auto_auto]">
      {visualCards.map((card) => (
        <article
          key={card.id}
          className={`relative overflow-hidden rounded-[28px] bg-white shadow-[0_8px_30px_rgba(40,24,70,0.06)] ${
            card.size === "compact"
              ? "min-[801px]:col-start-1 min-[801px]:row-start-1"
              : card.size === "tall"
                ? "min-[801px]:col-start-2 min-[801px]:row-start-1"
                : "min-[801px]:col-span-2"
          }`}
        >
          <div
            className={`checkerboard ${
              card.size === "compact"
                ? "aspect-[4/5] min-h-[240px]"
                : card.size === "tall"
                  ? "aspect-[4/5] min-h-[320px] min-[801px]:aspect-[5/6]"
                  : "aspect-[16/9] min-h-[260px]"
            }`}
          />
          <div
            className={`pointer-events-none absolute bottom-4 left-4 ${
              card.size === "wide" ? "right-auto w-[min(100%,420px)]" : "right-4"
            }`}
          >
            <div className="crayon-caption px-5 py-4">
              <p className="text-[15px] font-bold uppercase tracking-[0.04em] text-ink">
                {card.title}
              </p>
              <p className="mt-0.5 text-[12px] uppercase tracking-[0.08em] text-muted">
                {card.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
