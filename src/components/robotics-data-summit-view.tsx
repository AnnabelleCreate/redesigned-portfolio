import Image from "next/image";
import Link from "next/link";

const bookletUrl =
  "https://drive.google.com/file/d/1kaTNUGKj9q7GSqvVAriRKNSUE1qGh6xj/preview";
const bookletLink =
  "https://drive.google.com/file/d/1kaTNUGKj9q7GSqvVAriRKNSUE1qGh6xj/view?usp=sharing";

const campaignPieces = [
  {
    src: "/robotics-data-summit/flyers/summit-banner.webp",
    alt: "Robotics and Data Summit digital banner",
    label: "Digital banner",
    className: "min-[500px]:col-span-2 min-[700px]:col-span-12 aspect-[5/1]",
    imageClassName: "object-contain",
  },
  {
    src: "/robotics-data-summit/flyers/summit-flyer.webp",
    alt: "Robotics and Data Summit event flyer",
    label: "Event flyer",
    className: "min-[700px]:col-span-5 min-[700px]:row-span-2 aspect-[3/4]",
    imageClassName: "object-contain",
  },
  {
    src: "/robotics-data-summit/sticker-robot.webp",
    alt: "Circular Robotics and Data Summit sticker",
    label: "Event sticker",
    className: "min-[700px]:col-span-7 aspect-square",
    imageClassName: "object-contain p-5 min-[700px]:p-10",
  },
  {
    src: "/robotics-data-summit/flyers/panelist-cover.webp",
    alt: "Panelist campaign cover",
    label: "Panelist campaign",
    className: "min-[700px]:col-span-7 aspect-[3/4]",
    imageClassName: "object-contain",
  },
  {
    src: "/robotics-data-summit/flyers/panelist-list-data-wars.webp",
    alt: "Data Wars panelist lineup",
    label: "Panel one",
    className: "min-[700px]:col-span-6 aspect-[3/4]",
    imageClassName: "object-contain",
  },
  {
    src: "/robotics-data-summit/flyers/panelist-list-deployment.webp",
    alt: "Data to Deployment panelist lineup",
    label: "Panel two",
    className: "min-[700px]:col-span-6 aspect-[3/4]",
    imageClassName: "object-contain",
  },
  {
    src: "/robotics-data-summit/flyers/panelist-terence.webp",
    alt: "Panelist spotlight for Terence Bennett",
    label: "Speaker spotlight",
    className: "min-[700px]:col-span-4 aspect-[4/5]",
    imageClassName: "object-contain",
  },
  {
    src: "/robotics-data-summit/flyers/panelist-ritwik.webp",
    alt: "Panelist spotlight for Ritwik Pandey",
    label: "Speaker spotlight",
    className: "min-[700px]:col-span-4 aspect-[4/5]",
    imageClassName: "object-contain",
  },
  {
    src: "/robotics-data-summit/flyers/panelist-chjango.webp",
    alt: "Panelist spotlight for Chjango Unchained",
    label: "Speaker spotlight",
    className: "min-[700px]:col-span-4 aspect-[4/5]",
    imageClassName: "object-contain",
  },
  {
    src: "/robotics-data-summit/flyers/panelist-iliya.webp",
    alt: "Panelist spotlight for Iliya Shadfar",
    label: "Speaker spotlight",
    className: "min-[700px]:col-span-4 aspect-[4/5]",
    imageClassName: "object-contain",
  },
  {
    src: "/robotics-data-summit/flyers/panelist-neil.webp",
    alt: "Panelist spotlight for Neil Nie",
    label: "Speaker spotlight",
    className: "min-[700px]:col-span-4 aspect-[4/5]",
    imageClassName: "object-contain",
  },
];

export function RoboticsDataSummitView({ overlay = false }: { overlay?: boolean }) {
  return (
    <div
      className={`mx-auto max-w-6xl pb-12 ${
        overlay ? "px-5 pt-6 sm:px-8" : ""
      }`}
    >
      {!overlay ? (
        <Link
          href="/#visual"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-muted transition hover:text-ink"
        >
          <span aria-hidden>←</span> Back to visual work
        </Link>
      ) : null}

      <header
        className={`grid gap-6 border-b border-ink/10 pb-9 min-[700px]:grid-cols-[minmax(0,1.25fr)_minmax(15rem,0.75fr)] min-[700px]:items-end ${
          overlay ? "" : "mt-7"
        }`}
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-crayon">
            Visual identity · Marketing design
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.75rem,7vw,5.6rem)] leading-[0.9] tracking-[-0.055em] text-ink">
            Robotics &amp; Data Summit
          </h1>
        </div>
        <p className="max-w-md text-[15px] leading-6 text-muted">
          A dark, technical event system spanning campaign graphics, speaker
          announcements, printed collateral, and a summit booklet.
        </p>
      </header>

      <section className="mt-10" aria-labelledby="campaign-heading">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2
            id="campaign-heading"
            className="font-serif text-3xl tracking-[-0.03em] text-ink"
          >
            Campaign system
          </h2>
          <p className="hidden text-[11px] uppercase tracking-[0.12em] text-muted min-[500px]:block">
            Social · Print · Environmental
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 min-[500px]:grid-cols-2 min-[700px]:grid-flow-dense min-[700px]:grid-cols-12">
          {campaignPieces.map((piece, index) => (
            <figure
              key={piece.src}
              className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#030509] shadow-[0_10px_28px_rgba(8,12,20,0.14)] transition duration-500 hover:z-10 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_18px_40px_rgba(8,12,20,0.24)] ${piece.className} ${
                index % 3 === 1
                  ? "min-[700px]:rotate-[0.35deg]"
                  : index % 3 === 2
                    ? "min-[700px]:-rotate-[0.3deg]"
                    : ""
              }`}
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                className={`${piece.imageClassName} transition duration-700 group-hover:scale-[1.018]`}
                sizes="(min-width: 1000px) 30vw, (min-width: 700px) 45vw, 94vw"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/65 px-3 py-1 text-[9px] uppercase tracking-[0.12em] text-white/75 backdrop-blur-md">
                {piece.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="booklet-heading">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-crayon">
              Editorial design
            </p>
            <h2
              id="booklet-heading"
              className="mt-1 font-serif text-3xl tracking-[-0.03em] text-ink"
            >
              Summit booklet
            </h2>
          </div>
          <a
            href={bookletLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/15 bg-white px-4 py-2 text-[12px] text-ink transition hover:-translate-y-0.5 hover:border-crayon/35 hover:text-crayon"
          >
            Open in Google Drive ↗
          </a>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-[#080a0e] shadow-[0_16px_45px_rgba(20,20,35,0.16)]">
          <iframe
            src={bookletUrl}
            title="Robotics and Data Summit booklet"
            className="h-[70vh] min-h-[34rem] w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
