import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Subpage from "@/components/subpage";
import CaseStudy from "@/components/case-study";
import { caseStudies, findCaseStudy } from "@/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = findCaseStudy((await params).slug);
  if (!study) return {};
  return {
    title: `${study.title} | Semeton Balogun`,
    description: study.goal,
    alternates: { canonical: `/projects/${study.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const study = findCaseStudy((await params).slug);
  if (!study) notFound();
  return (
    <Subpage>
      <CaseStudy study={study} />
    </Subpage>
  );
}
