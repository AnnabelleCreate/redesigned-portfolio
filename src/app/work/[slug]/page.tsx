import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyGate } from "@/components/case-study-gate";
import { CaseStudyView } from "@/components/case-study-view";
import { caseStudies, getCaseStudy } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return { title: study?.title ?? "Case study" };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return (
    <CaseStudyGate locked={study.locked}>
      <CaseStudyView study={study} />
    </CaseStudyGate>
  );
}
