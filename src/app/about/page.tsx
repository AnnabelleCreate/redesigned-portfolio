import type { Metadata } from "next";
import Image from "next/image";
import { aboutImages, hobbies } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

const favoriteProducts = [
  {
    name: "Woozoo Fan",
    category: "Industrial design",
    color: "#fff4c2",
    rotate: "-1.2deg",
  },
  {
    name: "HEYTEA App",
    category: "Digital product design",
    color: "#ead9ff",
    rotate: "1deg",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl pb-8">
      <div className="mt-6 grid items-center gap-8 min-[601px]:grid-cols-[minmax(15rem,0.85fr)_minmax(0,1.15fr)]">
        <div className="relative mx-auto aspect-square w-full max-w-[15rem] overflow-hidden rounded-[50%]">
          <Image
            src={aboutImages.portrait}
            alt="Annabelle Chow"
            width={1200}
            height={1292}
            className="absolute h-auto max-w-none"
            style={{ width: "202%", left: "-21%", top: "-120%" }}
            sizes="(min-width: 601px) 15rem, 75vw"
            priority
          />
        </div>

        <div>
          <p className="font-serif text-4xl tracking-[-0.03em] text-crayon sm:text-5xl">
            hello! i&apos;m Annabelle :D
          </p>
          <p className="mt-4 text-[17px] leading-7 text-muted">
            Junior at Carnegie Mellon studying Business Administration and HCI. I care
            about the messy middle of systems — operations, trust, and the interfaces
            people actually have to live inside.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <p className="text-[15px] text-muted">
          In my free time, you will find me doing a bunch of different random hobbies:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {hobbies.map((hobby) => (
            <span
              key={hobby}
              className="rounded-full bg-pill px-4 py-2 text-sm text-crayon"
            >
              {hobby}
            </span>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {aboutImages.hobbies.map((src) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-[22px]">
              <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </div>

      <section className="mt-16">
        <div
          className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-white px-5 py-7 shadow-[0_8px_30px_rgba(40,24,70,0.07)] min-[351px]:px-8"
          style={{
            backgroundImage: "radial-gradient(#d2d0ca 1.1px, transparent 1.2px)",
            backgroundSize: "22px 22px",
          }}
        >
          <div
            className="figjam-sticky inline-block px-4 py-3"
            style={{ background: "#d6ebff", rotate: "-0.8deg" }}
          >
            <p className="text-[11px] uppercase tracking-[0.12em] text-ink/45">
              Inspiration board
            </p>
            <h2 className="mt-1 font-serif text-2xl tracking-[-0.02em]">
              Products I love
            </h2>
          </div>

          <div className="mt-7 grid gap-6 min-[601px]:grid-cols-2">
            {favoriteProducts.map((product) => (
              <article
                key={product.name}
                className="figjam-card figjam-card-lift relative p-4"
                style={{ rotate: product.rotate }}
              >
                <span
                  aria-hidden
                  className="absolute left-1/2 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-crayon shadow-sm"
                />
                <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-ink/15 bg-[#f8f7f3] text-[11px] uppercase tracking-[0.12em] text-ink/35">
                  Add product image
                </div>
                <div
                  className="figjam-sticky relative -mt-3 ml-3 inline-block px-3 py-2"
                  style={{ background: product.color, rotate: "-1deg" }}
                >
                  <p className="text-[10px] uppercase tracking-[0.1em] text-ink/45">
                    {product.category}
                  </p>
                  <h3 className="mt-0.5 font-serif text-xl">{product.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
