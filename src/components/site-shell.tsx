"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaseStudyOverlay } from "@/components/case-study-overlay";
import { Clock } from "@/components/clock";
import { FlipHeadline } from "@/components/flip-headline";
import { NowPlaying } from "@/components/now-playing";
import { SidebarContact } from "@/components/sidebar-contact";
import { SidebarIllustration } from "@/components/sidebar-illustration";
import { roles, site } from "@/lib/content";

const nav = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/playground", label: "Playground" },
];

const contactItems = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    copyValue: site.linkedin,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    copyValue: site.email,
  },
  {
    label: "Resume",
    href: site.resume,
    copyValue: site.resume,
  },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const fullPageStudy = pathname.startsWith("/work/");

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div
          className={`flex-1 ${
            fullPageStudy
              ? ""
              : "min-[801px]:grid min-[801px]:grid-cols-[minmax(200px,26%)_minmax(0,1fr)]"
          }`}
        >
          <aside
            aria-hidden={fullPageStudy}
            inert={fullPageStudy}
            className={`crayon-panel relative px-4 py-5 min-[351px]:px-8 min-[351px]:py-7 min-[801px]:sticky min-[801px]:top-0 min-[801px]:h-screen min-[801px]:overflow-hidden min-[801px]:py-5 ${
              fullPageStudy ? "hidden" : "flex flex-col"
            }`}
          >
            <div className="grain absolute inset-0 opacity-35" />
            <div className="relative z-10 grid gap-7 min-[351px]:grid-cols-2 min-[351px]:items-center min-[801px]:flex min-[801px]:min-h-0 min-[801px]:flex-1 min-[801px]:flex-col min-[801px]:items-stretch min-[801px]:justify-between min-[801px]:gap-0">
              <div className="min-w-0 min-[801px]:contents">
                <Clock />
                <SidebarIllustration />
                <div className="mt-2 w-full [container-type:inline-size]">
                  <FlipHeadline />
                </div>
              </div>

              <div className="min-w-0 min-[801px]:contents">
                <div className="space-y-4 text-[13px] leading-5">
                  {roles.map((role) => (
                    <div key={role.label}>
                      <p className="flex items-center gap-2 font-semibold">
                        <Sparkle />
                        {role.label}
                      </p>
                      {"detail" in role && role.detail ? (
                        <p className="mt-0.5 pl-5 text-muted">{role.detail}</p>
                      ) : null}
                      <ul className="mt-0.5 pl-5 text-muted">
                        {role.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-5 min-[801px]:mt-3">
                  <p className="mb-1 text-[10px] leading-3 text-ink/45">
                    what i&apos;m listening to while making this portfolio
                  </p>
                  <NowPlaying />
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6 hidden shrink-0 min-[351px]:block min-[801px]:mt-3">
              <SidebarContact items={contactItems} />
              <p className="mt-3 text-[10px] text-ink/35">© {site.name} 2026</p>
            </div>
          </aside>

          <div className="figjam-canvas flex min-h-screen flex-col">
            <header className="sticky top-0 z-20 flex items-center justify-between gap-3 bg-[#f4f4f1]/80 px-3 py-3 backdrop-blur-sm min-[351px]:px-8 min-[801px]:px-10">
              <Link href="/" className="flex shrink-0 items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/illustration.png"
                  alt="Annabelle Chow"
                  className="h-10 w-10 object-contain min-[351px]:h-16 min-[351px]:w-16"
                />
                <span className="hidden text-[14px] font-medium tracking-[-0.01em] text-ink min-[351px]:inline">
                  Annabelle Chow
                </span>
              </Link>
              <nav className="flex items-center gap-3 text-[12px] min-[351px]:gap-8 min-[351px]:text-[15px]">
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/" || pathname.startsWith("/work")
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`transition ${
                        active ? "text-ink" : "text-ink/50 hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </header>

            <main className="flex-1 px-3 pb-12 pt-2 min-[351px]:px-8 min-[801px]:px-10">
              {children}
            </main>
          </div>
        </div>

        <footer className="figjam-canvas block px-4 pb-6 pt-2 min-[351px]:hidden">
          <SidebarContact items={contactItems} />
          <p className="mt-3 text-[10px] text-ink/35">© {site.name} 2026</p>
        </footer>
      </div>
      <CaseStudyOverlay />
    </>
  );
}

function Sparkle() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
      <path d="M7 0c.3 2.8 1.4 5 3.5 6.2C8.4 7.4 7.3 9.6 7 14c-.3-4.4-1.4-6.6-3.5-7.8C5.6 5 6.7 2.8 7 0Z" />
    </svg>
  );
}
