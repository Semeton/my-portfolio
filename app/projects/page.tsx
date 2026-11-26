import type { Metadata } from "next";
import Link from "next/link";
import Subpage from "@/components/subpage";
import { caseStudies } from "@/lib/case-studies";

const title = "Case studies | Semeton Balogun";
const description =
  "Multi-tenant platforms, deployment design and guardrails for AI coding agents: goal, context, decisions and results for each.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects", title, description },
  twitter: { title, description },
};

export default function ProjectsPage() {
  return (
    <Subpage>
      <h1 className="text-4xl font-semibold tracking-tight">Case studies</h1>
      <p className="mt-3 text-muted-foreground">
        Each one: the business goal, the context, the decisions and what came of
        them.
      </p>
      <ul className="mt-10 space-y-8">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <Link
              href={`/projects/${study.slug}`}
              className="text-lg font-medium text-[hsl(var(--brand))] underline-offset-4 hover:underline"
            >
              {study.title} →
            </Link>
            <p className="mt-1 leading-relaxed text-muted-foreground">
              {study.summary}
            </p>
            <p className="mt-1 text-sm">{study.highlights.join(" · ")}</p>
          </li>
        ))}
      </ul>
    </Subpage>
  );
}
