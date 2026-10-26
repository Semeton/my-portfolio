import Link from "next/link";
import Section from "@/components/section";
import { essays, type Essay } from "@/lib/case-studies";

type Area = {
  kicker: string;
  title: string;
  goal: string;
  body: string;
  caseStudies: { label: string; href: string }[];
  essays: Essay[];
};

const areas: Area[] = [
  {
    kicker: "Banks & enterprise SaaS",
    title: "Multi-tenant platforms",
    goal: "Sell one product to many organisations, each with its own branding, rules and infrastructure, without keeping a codebase per client.",
    body: "As CTO of Lawyering I'm building a platform where law firms and individual practitioners each get an isolated workspace for their staff and clients. At Zercom I merged per-client copies of an LMS into Tangerine365: one codebase, tenants by subdomain or by ID. At Seamless I work on tenant isolation for a multi-tenant HR suite.",
    caseStudies: [
      { label: "Lawyering", href: "/projects/lawyering" },
      { label: "Tangerine365", href: "/projects/tangerine365" },
      { label: "Terminoxx360", href: "/projects/terminoxx360" },
    ],
    essays: [essays.architecturePart1, essays.architecturePart2],
  },
  {
    kicker: "Solutions architecture",
    title: "Deployment and infrastructure design",
    goal: "Run each system on infrastructure that fits its budget, its compliance rules and its risk.",
    body: "For client deployments I write the sizing, server requirements and deployment architecture, including First Bank's three-tier on-premise build. For Zercom's own internal tools, staging and UAT, I moved separate DigitalOcean droplets onto one server running CyberPanel and LiteSpeed, configured for wildcard subdomains, and cut that hosting bill by about 85%.",
    caseStudies: [{ label: "TrustCenta rebuild", href: "/projects/trustcenta" }],
    essays: [essays.hosting, essays.postMortem1],
  },
  {
    kicker: "National health campaigns",
    title: "Offline-first data systems",
    goal: "Field workers in malaria campaigns get credited and paid for the days they actually worked, even when their phones sync late.",
    body: "On contract with eGov Foundation I support DIGIT HCM across Abuja, Bauchi, Taraba and Borno. I traced worker lockouts to activities being dated at sync time instead of creation time, and I'm sizing infrastructure and support staffing for a 2027–29 programme across 11 states (~27M people).",
    caseStudies: [{ label: "Role details", href: "/work" }],
    essays: [],
  },
  {
    kicker: "How I work",
    title: "Guardrails for AI coding agents",
    goal: "Get the speed of AI coding agents on production codebases without losing control of what they change.",
    body: "I work agent-first. agent-contract, my npm CLI, checks every write an agent attempts against the repository's rules and blocks anything outside the task's scope before it lands.",
    caseStudies: [{ label: "Agent Contract", href: "/projects/agent-contract" }],
    essays: [essays.beyondPrompts, essays.understanding],
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
      {area.essays.length > 0 && (
        <ul className="text-muted-foreground">
          {area.essays.map((essay) => (
            <li key={essay.link}>
              <a
                href={essay.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                Essay: {essay.label} ↗
              </a>
            </li>
          ))}
        </ul>
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
            <p className="mt-2 leading-relaxed">
              <span className="font-medium">Goal: </span>
              {area.goal}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {area.body}
            </p>
            <AreaLinks area={area} />
          </article>
        ))}
      </div>
    </Section>
  );
}
