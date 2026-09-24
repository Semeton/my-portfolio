import Section from "@/components/section";

export default function Experience() {
  const experiences = [
    {
      company: "eGov Foundation",
      role: "Hub Software Engineer (Contract)",
      period: "Jun 2026 – present",
      description:
        "Working with the Solutions Engineering team on DIGIT HCM, the open-source platform running health campaigns in Nigeria.",
      details: [
        "Diagnose field-reported issues: sync failures, stock and beneficiary data problems, app rollout issues",
        "Write root-cause analyses and escalate confirmed defects to product engineering",
      ],
    },
    {
      company: "SeamlessHR",
      role: "Backend Engineer",
      period: "Nov 2024 – present",
      description:
        "Backend services for a multi-tenant HRMS serving enterprise clients.",
      details: [
        "Built backend for the AI-integrated recruitment module: CV parsing, candidate ranking, automated screening",
        "Implemented webhooks for the recruitment pipeline",
        "Stabilizing and shipping features across exit, onboarding, and employee confirmation modules",
      ],
    },
    {
      company: "Zercom Systems",
      role: "Technical Lead",
      period: "Apr 2023 – Nov 2024",
      description:
        "Rewrote Tangerine LMS (PHP 7.4) into Tangerine365, a multi-tenant platform deployed across major Nigerian banks.",
      details: [
        "Re-architected the monolith into a multi-tenant, multi-database system using the strategy pattern — one codebase, MySQL and SQL Server running side by side",
        "Wrote a custom MSSQL driver to support three banks on SQL Server while preserving the MySQL default",
        "Deployed across IIS on Windows servers inside 3 bank environments and Apache on cloud for other tenants",
        "Cut infrastructure costs ~85% through VPS migration",
        "On Terminoxx360: diagnosed job stalls under database locks, rewrote long-running jobs, added auto-restart for continuous uptime",
      ],
      stack: "PHP 8 · Laravel · SQL Server · MySQL · Node.js · Memcached · Docker · IIS · Apache",
    },
    {
      company: "ScholarshipIQ",
      role: "Backend Engineer",
      period: "Jun 2022 – Apr 2023",
      description: "Built the backend for an academic matching and funding platform.",
      details: [
        "Backend services and REST APIs in Laravel, integrated with a React frontend",
        "Cut API response times ~50% through query optimization and indexing",
        "Introduced staging environments and branching discipline; cut the error rate reaching production significantly",
        "Integrated Flutterwave for payments, HubSpot for user management, and cron-driven email automation",
      ],
    },
    {
      company: "Bincom Dev Center",
      role: "Backend Developer",
      period: "Sep 2020 – Jul 2022",
      description:
        "Joined through Bincom's tech apprenticeship; became my first engineering role. Mentored by Emmanuel Ogwo.",
      details: [
        "Backend components in Node.js and PHP across educational platforms (ARM Learn) and internal API systems",
        "OAuth2 integrations with Google and Facebook",
        "Trained 5+ interns; helped run technical community events",
      ],
    },
  ];

  return (
    <Section id="work" title="Work">
      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p>
                <span className="font-medium">{exp.company}</span>
                <span className="text-muted-foreground"> — {exp.role}</span>
              </p>
              <p className="text-sm text-muted-foreground tabular-nums">
                {exp.period}
              </p>
            </div>
            <p className="mt-2 leading-relaxed">{exp.description}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {exp.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="flex-shrink-0">–</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            {exp.stack && (
              <p className="mt-3 text-xs text-muted-foreground">{exp.stack}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
