import Section from "@/components/section";

export const experiences = [
  {
    company: "Lawyering",
    url: "https://lawyering.cloud",
    role: "CTO",
    period: "May 2026 – present",
    description:
      "A workspace for law firms and individual practitioners: cases, engagements, documents, billing and client communication. I'm the only engineer, building agent-first.",
    details: [
      "Designed the platform as a modular monolith of 19 Laravel modules with tenant scoping on every tenant-owned record",
      "Built Drive: server-side encryption at rest, participant permissions, and share links with expiry and access codes for viewers without accounts",
      "Built PayTrack billing in naira and US dollars, with payment plans and automatic retainer renewals",
      "In production since June 2026, with over 1,200 automated tests",
    ],
    stack: "PHP 8.4 · Laravel · Inertia · React · TypeScript · Tailwind · Pest",
  },
  {
    company: "eGov Foundation",
    url: "https://egov.global/",
    role: "Hub Software Engineer, West Africa (Contract)",
    period: "Jun 2026 – present",
    description:
      "Bridge between country programme teams and the platform engineering team on DIGIT HCM, the open-source platform running national malaria campaigns (SMC and ITN).",
    details: [
      "Supported SMC and ITN campaigns across Abuja, Bauchi, Taraba and Borno, including on-site field support",
      "Diagnosed activity dates being stamped at server sync time instead of on-device creation time: late-synced work counted against the next day's quota, locking field workers out of working days and skewing attendance-based payment. Documented the root cause and the fix requirement",
      "Contributed to the stock-reconciliation design for an ITN distribution pilot: partial receipts, auto-returned shortfalls, and in-transit vs lost states in an offline-first ledger",
      "Sizing infrastructure and support staffing for a 2027–29 multi-state campaign programme (11 states, ~27M target population)",
    ],
    stack:
      "DIGIT HCM · PostgreSQL · Elasticsearch · Kibana · Offline-first sync",
  },
  {
    company: "Seamless Technologies",
    url: "https://seamlesstech.com/",
    role: "Backend Engineer",
    period: "Nov 2024 – present",
    description:
      "Recruitment platform and HRMS modules (internal recruitment, exit, onboarding) for a multi-tenant HR suite serving enterprise clients.",
    details: [
      "Built the Kafka pipeline publishing recruitment, exit and onboarding data to the company data lake, as a non-blocking side effect so a mapping failure can't fail the primary write",
      "Implemented the two-way integration between the recruitment platform and the core HRMS: requisition-to-job creation, status sync back, internal-applicant pre-fill, SSO with company-access checks, service-to-service auth",
      "Led tenant-isolation and security hardening: SSRF-safe webhooks, company-scoped reads and writes, per-client mail credentials with delivery logging, throttled upload limits, GDPR self-service deletion (anonymise or hard-delete)",
      "Backend for AI-assisted hiring: CV parsing, candidate ranking with normalised scores, automated screening; frictionless apply with no sign-up, OAuth pre-fill and magic-link login",
    ],
    stack:
      "PHP 8 · Laravel · MySQL · Kafka · Redis/Horizon · Algolia · S3 · Pest",
  },
  {
    company: "Zercom Systems",
    role: "Technical Lead",
    period: "Apr 2023 – Nov 2024",
    description:
      "Led engineering on Tangerine LMS: from a separate codebase per client to one multi-tenant platform, Tangerine365, running on-premise at banks and enterprises, as a self-serve cloud product, and inside Human Manager HRMS.",
    details: [
      "Set up version control and merged the per-client codebases into one, with per-client customisation — a bug fix now shipped once instead of once per deployment",
      "Acted as solutions architect for client deployments: chose the architecture and server specifications, and represented engineering in every critical stakeholder meeting",
      "Designed the hardest rollout, First Bank's three-tier on-premise deployment built to the bank's infrastructure requirements",
      "Launched the self-serve cloud version at tangerine365.com, and made it the default learning module in Human Manager HRMS so every new HRMS tenant gets an LMS",
      "Wrote a custom SQL Server driver alongside the MySQL default; deployed across IIS inside bank networks, Apache, DigitalOcean, and AWS",
      "Consolidated the company's own internal tools, staging and UAT from separate DigitalOcean droplets onto one CyberPanel/LiteSpeed server with wildcard subdomains for tenant routing, cutting that hosting cost ~85%",
      "Built REST integrations with 5+ external organisations, ran security and load testing with OWASP ZAP and JMeter, and trained client teams on the platform",
    ],
    stack:
      "PHP 8 (vanilla, no framework) · SQL Server · MySQL · Node.js · Memcached · Docker · IIS · Apache",
  },
  {
    company: "ScholarshipIQ",
    role: "Backend Engineer",
    period: "Jun 2022 – Apr 2023",
    description:
      "Built the backend for an academic matching and funding platform.",
    details: [
      "Backend services and REST APIs in Laravel, integrated with a React frontend",
      "Cut API response times ~50% through query optimization and indexing",
      "Introduced staging environments and branching discipline; cut production errors by over 90%",
      "Added email verification to eliminate ghost sign-ups",
      "Integrated Flutterwave for payments, HubSpot for user management, and cron-driven email automation",
    ],
  },
  {
    company: "Bincom Dev Center",
    role: "Backend Developer",
    period: "Sep 2020 – Jul 2022",
    description:
      "Joined through Bincom's tech apprenticeship; became my first engineering role.",
    details: [
      "Backend components in Node.js and PHP across educational platforms (ARM Learn) and internal API systems",
      "OAuth2 integrations with Google and Facebook",
      "Trained 5+ interns; helped run technical community events",
    ],
  },
];

export default function Experience({ title = "Work" }: { title?: string }) {
  return (
    <Section id="work" title={title}>
      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p>
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span className="font-medium">{exp.company}</span>
                )}
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
