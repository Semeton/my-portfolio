import Link from "next/link";
import Section from "@/components/section";
import { essays, type Essay } from "@/lib/case-studies";

type Reading = Essay & { kind: "Essay" | "Talk" };

type Area = {
  kicker: string;
  title: string;
  outcome: string;
  goal: string;
  body: string;
  caseStudies: { label: string; href: string }[];
  reading: Reading[];
};

const essay = (item: Essay): Reading => ({ ...item, kind: "Essay" });

const areas: Area[] = [
  {
    kicker: "Banks & enterprise SaaS",
    title: "Multi-tenant platforms",
    outcome:
      "One codebase now serves Wema Bank, First Bank, PremiumTrust Bank and Seven-Up, with over 10,000 production users, where each client used to run its own copy. Lawyering, built solo with agents, has been in production since June 2026: 19 modules, over 1,200 tests.",
    goal: "Sell one product to many organisations, each with its own branding, rules and infrastructure, without keeping a codebase per client.",
    body: "Lawyering gives law firms and individual practitioners each an isolated workspace for their staff and clients. Tangerine365 separates tenants by subdomain or by ID. At Seamless I work on tenant isolation for a multi-tenant HR suite.",
    caseStudies: [
      { label: "Lawyering", href: "/projects/lawyering" },
      { label: "Tangerine365", href: "/projects/tangerine365" },
      { label: "Terminoxx360", href: "/projects/terminoxx360" },
    ],
    reading: [essay(essays.architecturePart1), essay(essays.architecturePart2)],
  },
  {
    kicker: "Solutions architecture",
    title: "Deployment and infrastructure design",
    outcome:
      "Cut the hosting bill for Zercom's internal tools, staging and UAT by about 85%, and wrote the deployment architecture for First Bank's three-tier on-premise build.",
    goal: "Run each system on infrastructure that fits its budget, its compliance rules and its risk.",
    body: "For client deployments I write the sizing, server requirements and deployment architecture. For Zercom's own environments I moved separate DigitalOcean droplets onto one server running CyberPanel and LiteSpeed, configured for wildcard subdomains.",
    caseStudies: [{ label: "TrustCenta rebuild", href: "/projects/trustcenta" }],
    reading: [essay(essays.hosting), essay(essays.postMortem1)],
  },
  {
    kicker: "National health campaigns",
    title: "Offline-first data systems",
    outcome:
      "Traced field-worker lockouts to activities being dated at sync time instead of creation time. Now sizing infrastructure and support staffing for a 2027–29 programme across 11 states (~27M people).",
    goal: "Field workers in malaria campaigns get credited and paid for the days they actually worked, even when their phones sync late.",
    body: "On contract with eGov Foundation I support DIGIT HCM, the platform behind Nigeria's health campaigns, across Abuja, Bauchi, Taraba and Borno.",
    caseStudies: [{ label: "Role details", href: "/work" }],
    reading: [],
  },
  {
    kicker: "Agent governance",
    title: "Guardrails for AI coding agents",
    outcome:
      "Three open source npm packages. In my experiment, agents asked to purge old orders hard-deleted them 4 times out of 4; given a reviewed decision record, they kept the order numbers 3 times out of 3.",
    goal: "Get the speed of AI coding agents on production codebases without losing control of what they change.",
    body: "One package for each point where an agent's work can go wrong. agent-contract blocks any write outside the task's scope before it lands. repo-memory keeps the reasons behind the code as records that CI checks and only a human can accept. change-evidence reads every pull request as data and tells the reviewer where to look. I build Lawyering under all three.",
    caseStudies: [
      { label: "Agent Contract", href: "/projects/agent-contract" },
      { label: "repo-memory", href: "/projects/repo-memory" },
      { label: "change-evidence", href: "/projects/change-evidence" },
    ],
    reading: [
      {
        kind: "Talk",
        label: "Engineering Memory for AI Coding Agents (PHP Talks Lagos)",
        link: "https://docs.google.com/presentation/d/1E58OnIoIlSkVlJRUSPuiKE2wjXhqHBivirl7jXOPZN4/edit?usp=sharing",
      },
      essay(essays.beyondPrompts),
      essay(essays.understanding),
    ],
  },
];

const actionClass =
  "text-[hsl(var(--brand))] hover:underline underline-offset-4";

function AreaLinks({ area }: { area: Area }) {
  return (
    <div className="mt-3 space-y-1 text-sm">
      <p className="flex flex-wrap gap-x-4">
        {area.caseStudies.map((study) => (
          <Link key={study.href} href={study.href} className={actionClass}>
            {study.label} →
          </Link>
        ))}
      </p>
      {area.reading.length > 0 && (
        <p className="leading-relaxed text-muted-foreground">
          {area.reading.map((item, index) => (
            <span key={item.link}>
              {index > 0 && " · "}
              {item.kind === "Talk" && "Talk: "}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {item.label} ↗
              </a>
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

export default function Areas() {
  return (
    <Section id="areas" title="What I work on">
      <div className="space-y-10">
        {areas.map((area) => (
          <article
            key={area.title}
            className="border-l-2 border-[hsl(var(--brand))] pl-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[hsl(var(--brand))]">
              {area.kicker}
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">
              {area.title}
            </h3>
            <p className="mt-2 leading-relaxed">{area.outcome}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Goal: </span>
              {area.goal}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {area.body}
            </p>
            <AreaLinks area={area} />
          </article>
        ))}
      </div>
    </Section>
  );
}
