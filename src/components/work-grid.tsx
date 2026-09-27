"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRecruiter } from "@/components/recruiter";
import { useStudyOverlay } from "@/components/study-overlay";
import { projects, visualCards, type WorkKind } from "@/lib/content";

const filters: { id: WorkKind; label: string }[] = [
  { id: "product", label: "Product" },
  { id: "visual", label: "Visual" },
];

const tagColors = ["#fff4c2", "#ead9ff", "#d4efd8", "#d6ebff"];
const projectOrder = ["core", "cavalry", "cmused", "ladle", "homehudl", "sonaride", "gotr"];

export function WorkGrid() {
  const [filter, setFilter] = useState<WorkKind>("product");
  const { recruiter } = useRecruiter();
  const { openStudy } = useStudyOverlay();

  useEffect(() => {
    const syncFilterToHash = () => {
      if (window.location.hash === "#visual") setFilter("visual");
    };
    syncFilterToHash();
    window.addEventListener("hashchange", syncFilterToHash);
    return () => window.removeEventListener("hashchange", syncFilterToHash);
  }, []);

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
              onClick={() => {
                setFilter(item.id);
                window.history.replaceState(
                  null,
                  "",
                  item.id === "visual" ? "/#visual" : "/",
                );
              }}
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
                className="figjam-card figjam-card-lift group relative overflow-hidden border-[1.5px] border-ink/10"
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
                <div className="relative px-5 py-4">
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
                  <div className="mt-2.5 flex items-start justify-between gap-3">
                    <h2 className="text-[1.15rem] font-semibold leading-snug tracking-[-0.02em]">
                      {project.title}
                    </h2>
                    {project.locked ? (
                      <span
                        role="img"
                        aria-label="Password protected"
                        title="Password protected"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lavender/55 text-crayon"
                      >
                        <LockIcon />
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 line-clamp-1 text-[14px] leading-5 text-muted">
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

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect
        x="3.25"
        y="7"
        width="9.5"
        height="6.75"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VisualBento() {
  const { openStudy } = useStudyOverlay();
  const featured = visualCards.filter((card) => !card.comingSoon);
  const upcoming = visualCards.filter((card) => card.comingSoon);

  return (
    <div className="space-y-5">
      <div className="grid gap-5">
        {featured.map((card) => (
          <Link
            key={card.id}
            href={card.href ?? "/"}
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
              openStudy(`visual:${card.id}`);
            }}
            className="group block rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crayon"
          >
            <article className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#05070a] shadow-[0_12px_36px_rgba(15,18,28,0.18)] min-[601px]:grid-cols-[minmax(13rem,0.72fr)_minmax(0,1fr)]">
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-contain transition duration-700 group-hover:scale-[1.025]"
                    sizes="(min-width: 801px) 26vw, (min-width: 601px) 38vw, 94vw"
                  />
                ) : null}
              </div>
              <div className="relative flex min-h-64 flex-col justify-between overflow-hidden p-6 text-white min-[601px]:p-8">
                <div
                  aria-hidden
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_35%,rgba(161,187,226,0.36),rgba(22,42,70,0.08)_58%,transparent_70%)] blur-[1px] transition duration-700 group-hover:scale-110"
                />
                <div className="relative flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-white/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="relative mt-14">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Visual work
                  </p>
                  <h2 className="mt-2 font-serif text-3xl tracking-[-0.03em] min-[801px]:text-4xl">
                    {card.title}
                  </h2>
                  <p className="mt-3 max-w-sm text-[14px] leading-6 text-white/62">
                    {card.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-white/85">
                    View project <span aria-hidden>↗</span>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 min-[500px]:grid-cols-2 min-[1000px]:grid-cols-3">
        {upcoming.map((card, index) => (
          <article
            key={card.id}
            className="group overflow-hidden rounded-[24px] border border-ink/10 bg-white shadow-[0_8px_24px_rgba(40,24,70,0.07)]"
            style={{ rotate: `${[-0.35, 0.4, -0.2][index % 3]}deg` }}
          >
            <div
              className={`relative aspect-square overflow-hidden ${
                card.id === "nova-ai-hackathon"
                  ? "bg-[radial-gradient(circle_at_70%_20%,#846ee0_0,transparent_30%),linear-gradient(145deg,#171128,#2b2256_55%,#0d0a16)]"
                  : "bg-black"
              }`}
            >
              {card.image ? (
                <Image
                  src={card.image}
                  alt={`${card.title} logo`}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-[1.035]"
                  sizes="(min-width: 1000px) 20vw, (min-width: 500px) 42vw, 92vw"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-white/55">
                    AI Hackathon
                  </span>
                  <span className="mt-2 font-serif text-[clamp(2.8rem,8vw,4.5rem)] tracking-[-0.06em]">
                    NOVA
                  </span>
                  <span
                    aria-hidden
                    className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  />
                </div>
              )}
              <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[9px] uppercase tracking-[0.14em] text-white backdrop-blur-md">
                Coming soon
              </span>
            </div>
            <div className="px-5 py-4">
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-lavender/55 px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-crayon"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-3 text-[1.05rem] font-semibold leading-snug">
                {card.title}
              </h2>
              <p className="mt-1 text-[13px] leading-5 text-muted">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
