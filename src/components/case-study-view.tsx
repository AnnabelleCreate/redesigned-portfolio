import Image from "next/image";
import { CaseStudyToc } from "@/components/case-study-toc";
import { ImageSlot } from "@/components/image-slot";
import type { CaseStudy } from "@/lib/content";

const stickyColors = ["#fff4c2", "#ead9ff", "#d4efd8", "#d6ebff", "#ffdcc8"];

export function CaseStudyView({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose?: () => void;
}) {
  const stickyClass = onClose
    ? "lg:sticky lg:top-4 lg:self-start"
    : "lg:sticky lg:top-24 lg:self-start";

  return (
    <div className="grid w-full gap-6 px-5 pb-20 pt-6 sm:px-8 lg:grid-cols-[10.5rem_minmax(0,1fr)] lg:gap-x-6 lg:px-6">
      <div className="figjam-card overflow-hidden lg:col-span-2">
        {study.hero ? (
          <Image
            src={study.hero}
            alt=""
            width={1800}
            height={1350}
            className="mx-auto h-auto w-full max-w-[48rem]"
            sizes="(min-width: 1024px) 48rem, 80vw"
            priority
          />
        ) : (
          <ImageSlot label="Hero image" className="h-[clamp(12rem,32vh,22rem)]" />
        )}
      </div>

      <div className="lg:col-start-2 lg:row-start-2">
        <div className="figjam-card px-6 py-7 sm:px-8 sm:py-8">
          <h1 className="font-serif text-[2rem] leading-[1.15] tracking-[-0.03em] sm:text-[2.45rem]">
            {study.title}
          </h1>
          <p className="mt-3 max-w-2xl text-[16px] leading-7 text-muted">{study.summary}</p>

          <div className="mt-6 flex w-full flex-wrap items-start justify-between gap-x-4 gap-y-3">
            {study.meta.map((item, index) => (
              <div
                key={item.label}
                className="figjam-sticky figjam-note px-2 py-1.5"
                style={{
                  background: stickyColors[index % stickyColors.length],
                  rotate: `${[-2.4, 1.8, -1.2, 2.1, -0.7][index % 5]}deg`,
                }}
              >
                <p className="text-[9px] uppercase tracking-[0.14em] text-ink/45">{item.label}</p>
                <p className="mt-1 text-[11.5px] font-medium leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-start-1 lg:row-start-2 lg:row-span-2">
        <CaseStudyToc sections={study.sections} stickyClass={stickyClass} />
      </div>

      <div className="space-y-5 lg:col-start-2 lg:row-start-3">
        {study.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`figjam-card px-6 py-6 ${onClose ? "scroll-mt-6" : "scroll-mt-28"}`}
          >
            {section.kicker ? (
              <p className="text-[11px] tracking-[0.1em] text-muted uppercase">{section.kicker}</p>
            ) : null}
            {section.title ? (
              <h2 className="mt-1 text-[1.35rem] font-semibold leading-snug tracking-[-0.02em]">
                {section.title}
              </h2>
            ) : null}
            {section.body ? (
              <p className="mt-3 text-[15.5px] leading-7 text-muted">{section.body}</p>
            ) : null}
            {section.points ? (
              <div className="mt-5 space-y-5">
                {section.points.map((point) => (
                  <div key={point.title}>
                    <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em]">{point.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-6 text-muted">{point.body}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {section.stats ? (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {section.stats.map((stat, index) => (
                  <div
                    key={stat.value}
                    className="figjam-sticky px-4 py-4"
                    style={{ background: stickyColors[index % stickyColors.length] }}
                  >
                    <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
                    <p className="mt-1 text-[13px] leading-5 text-ink/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {section.bullets ? (
              <ul className="mt-4 space-y-2 text-[15px] leading-6 text-muted">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
            {section.images || section.imageSlots ? (
              <div
                className={`mt-5 grid gap-3 ${
                  (section.images?.length ?? 0) + (section.imageSlots ?? 0) > 1
                    ? "sm:grid-cols-2"
                    : ""
                }`}
              >
                {section.images?.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink/8 bg-[#eee]"
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
                  </div>
                ))}
                {Array.from({ length: section.imageSlots ?? 0 }, (_, index) => (
                  <ImageSlot
                    key={`${section.id}-slot-${index}`}
                    label="Image"
                    className="aspect-[4/3]"
                  />
                ))}
              </div>
            ) : null}
          </section>
        ))}

        {onClose ? (
          <p className="pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-ink/10 bg-white px-4 py-2 text-[14px] shadow-sm hover:bg-white"
            >
              Back to board
            </button>
          </p>
        ) : null}
      </div>
    </div>
  );
}
