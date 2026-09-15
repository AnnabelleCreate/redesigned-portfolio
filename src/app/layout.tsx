import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { RecruiterProvider } from "@/components/recruiter";
import { SiteShell } from "@/components/site-shell";
import { StudyOverlayProvider } from "@/components/study-overlay";
import { site } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Product Design`,
    template: `%s | ${site.name}`,
  },
  description: site.bio,
  icons: {
    icon: [{ url: "/studying.gif", type: "image/gif" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <RecruiterProvider>
          <StudyOverlayProvider>
            <SiteShell>{children}</SiteShell>
          </StudyOverlayProvider>
        </RecruiterProvider>
      </body>
    </html>
  );
}
