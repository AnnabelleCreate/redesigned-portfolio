import type { Metadata } from "next";
import Image from "next/image";
import { IdeaSandbox } from "@/components/idea-sandbox";
import { playground } from "@/lib/content";

export const metadata: Metadata = {
  title: "Playground",
};

export default function PlaygroundPage() {
  return (
    <div className="pb-8">
      <h1 className="font-serif text-4xl tracking-[-0.03em] text-crayon sm:text-5xl">
        welcome to my playground!
      </h1>
      <p className="mt-3 max-w-2xl text-[16px] leading-7 text-muted">
        Product design sitting next to python, javascript, HTML, css, crochet
        shops, and whatever else I was curious about that week.
      </p>

      <div className="mt-10 columns-1 gap-5 sm:columns-2">
        {playground.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="mb-5 block break-inside-avoid overflow-hidden rounded-[28px] border border-line bg-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(80,50,140,0.08)]"
          >
            <div className="relative aspect-[16/10] bg-lavender/30">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <div className="px-5 py-4">
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-[14px] leading-5 text-muted">{item.blurb}</p>
            </div>
          </a>
        ))}
      </div>

      <IdeaSandbox />
    </div>
  );
}
