import Link from "next/link";
import Section from "@/components/section";
import { experiences } from "@/components/experience";

export default function Timeline() {
  return (
    <Section id="work" title="Work">
      <ul className="divide-y">
        {experiences.map((exp) => (
          <li
            key={exp.company}
            className="flex flex-wrap items-baseline justify-between gap-x-4 py-2.5"
          >
            <p>
              <span className="font-medium">{exp.company}</span>
              <span className="text-muted-foreground"> — {exp.role}</span>
            </p>
            <p className="text-sm text-muted-foreground tabular-nums">
              {exp.period}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <Link
          href="/work"
          className="text-[hsl(var(--brand))] hover:underline underline-offset-4"
        >
          Full work history →
        </Link>
      </p>
    </Section>
  );
}
