import Section from "@/components/section";
import ClientList from "@/components/clients";

const projects = [
  {
    title: "Tangerine365",
    subtitle: (
      <>
        Multi-tenant LMS deployed across <ClientList />.
      </>
    ),
    description:
      "A full rewrite of a legacy PHP 7.4 LMS into a multi-tenant PHP 8 platform with per-tenant database isolation. The hard part was the multi-database strategy — keeping MySQL as default while supporting SQL Server for the banks that required it, without forking the codebase.",
    role: "Led",
    highlights: [
      "Designed the multi-tenancy layer using the strategy pattern; one codebase, multiple database drivers",
      "Two tenancy models from that codebase: subdomain-based in the cloud (tenant.tangerine365.com), ID-based inside Human Manager HRMS",
      "First Bank deployment: external load balancer → two proxying web servers → internal load balancer → two app servers → central SQL Server",
      "Wrote a custom MSSQL driver to support three banks on SQL Server while preserving the MySQL default",
      "Built core modules for user management, course delivery, and integrated Jitsi Meet proctoring",
      "Migrated infrastructure to Hostinger VPS — ~85% cost reduction",
      "Set up CI/CD across IIS (Windows Server) and Apache (Ubuntu) deployments",
    ],
    tech: [
      "PHP 8",
      "Laravel",
      "MySQL",
      "SQL Server",
      "Docker",
      "Jitsi Meet",
      "LDAP",
      "IIS",
    ],
    link: "https://tangerine365.com",
    articles: [
      {
        label: "The writeup, Part 1",
        link: "https://semeton.substack.com/p/the-architecture-i-didnt-design-part",
      },
      {
        label: "Part 2",
        link: "https://semeton.substack.com/p/the-architecture-i-didnt-design-part-86b",
      },
    ],
  },
  {
    title: "Terminoxx360",
    subtitle: "Real-time ATM monitoring for Access Bank Nigeria.",
    description:
      "Laravel application monitoring ATM fleet health across Access Bank infrastructure. I own it end to end — codebase, deployments, and the stakeholder relationship.",
    role: "Owner",
    highlights: [
      "Diagnosed transaction-heavy jobs stalling under database locks; rewrote them for transactional efficiency",
      "Added index-based query optimization and schema cleanup that cleared the persistent slow-query backlog",
      "Built auto-restart for stuck jobs to keep uptime continuous",
      "Manage the stakeholder relationship and release cycle directly",
    ],
    tech: ["Laravel", "MySQL", "Redis", "Queue workers"],
    link: "https://cloud.terminoxx360.com",
  },
  {
    title: "TrustCenta",
    subtitle: "Two products: estate access control and a cybersecurity suite.",
    description:
      "TrustPass handles QR-based entry passes for digital estates — role-based permissions, real-time revocation, web dashboard and mobile app. The Cybersecurity Suite wraps ZAP and Gophish behind clean APIs with scheduled scans and automated reporting.",
    role: "Sole engineer",
    highlights: [
      "Designed and built both systems from scratch",
      "Web (Next.js) for administrators; React Native for gate personnel",
      "Wrapped ZAP and Gophish behind clean APIs with scheduled scans and automated email reports",
    ],
    tech: [
      "Laravel",
      "Next.js",
      "React Native",
      "MySQL",
      "Docker",
      "ZAP",
      "Gophish",
    ],
    link: "https://trustcenta.com",
  },
  {
    title: "Agent Contract",
    subtitle:
      "A governance runtime that puts deterministic guardrails around AI coding agents.",
    description:
      "Published npm CLI that drops a policy layer into any repo so AI agents (Claude, Codex, Copilot) operate under explicit, enforceable rules instead of hoping they read the instructions file. Enforcement happens before writes land, not in post-hoc review.",
    role: "Creator",
    highlights: [
      "Designed a layered runtime: repository contract (policy) → execution role (scoped authority) → governance runtime (enforcement) → verified writes",
      "Built deterministic scope enforcement via exit codes — violations are blocked before they reach the codebase, not caught in diff review",
      "Added Repository Memory so architectural decisions and session state persist across executions instead of being rebuilt each time",
      "Made governance provider-independent, so the same contract holds whether the agent is Claude, OpenAI, or a future model",
      "Shipped and maintain it as an installable CLI: npm i -g @semeton/agent-contract",
    ],
    tech: ["Node.js", "CLI", "YAML", "Claude", "OpenAI"],
    link: "https://agent-contract.semeton.xyz",
    articles: [
      {
        label: "The writeup",
        link: "https://semeton.substack.com/p/beyond-prompts-repository-governance",
      },
    ],
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-10">
        {projects.map((project) => (
          <div key={project.title}>
            <p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
              >
                {project.title}
              </a>
              <span className="text-muted-foreground"> — {project.role}</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.subtitle}
            </p>
            <p className="mt-2 leading-relaxed">{project.description}</p>
            <details className="group mt-3 text-sm">
              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                What I did
              </summary>
              <ul className="mt-3 space-y-1.5 text-muted-foreground">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="flex-shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </details>
            <p className="mt-3 text-xs text-muted-foreground">
              {project.tech.join(" · ")}
              {project.articles?.map((article) => (
                <span key={article.link}>
                  {" · "}
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    {article.label}
                  </a>
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
