export type Essay = { label: string; link: string };

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  period?: string;
  goal: string;
  context: string[];
  decisions: { title: string; body: string }[];
  result: string[];
  stack: string[];
  link: string;
  essays: Essay[];
};

export const essays = {
  architecturePart1: {
    label: "The Architecture I Didn't Design, Part 1",
    link: "https://semeton.substack.com/p/the-architecture-i-didnt-design-part",
  },
  architecturePart2: {
    label: "The Architecture I Didn't Design, Part 2",
    link: "https://semeton.substack.com/p/the-architecture-i-didnt-design-part-86b",
  },
  hosting: {
    label: "Engineering is More Than The Code",
    link: "https://semeton.substack.com/p/engineering-is-more-than-the-code",
  },
  postMortem1: {
    label: "When Your Security Platform Becomes the Target, Part 1",
    link: "https://semeton.substack.com/p/when-your-security-platform-becomes",
  },
  postMortem2: {
    label: "When Your Security Platform Becomes the Target, Part 2",
    link: "https://semeton.substack.com/p/when-your-security-platform-becomes-ed0",
  },
  beyondPrompts: {
    label: "Beyond Prompts",
    link: "https://semeton.substack.com/p/beyond-prompts-repository-governance",
  },
  understanding: {
    label: "Understanding Is the Feature",
    link: "https://semeton.substack.com/p/understanding-is-the-feature-what",
  },
} satisfies Record<string, Essay>;

export const caseStudies: CaseStudy[] = [
  {
    slug: "lawyering",
    title: "Lawyering",
    summary:
      "A workspace for law firms and individual practitioners: cases, engagements, documents, billing and client communication in one place.",
    role: "CTO, building solo with AI agents",
    period: "2026 – present",
    goal: "Turn the paperwork of legal practice into a digital workspace. The founder, a lawyer, wanted a Slack for law firms, where firms manage their cases, engagements, documents and clients in one secure place.",
    context: [
      "Two kinds of tenant: law firms with staff, roles and departments, and individual practitioners. Clients are invited by a firm and get their own portal with their cases, engagements and invoices.",
      "Lawyers need to share documents with clients and outside parties who will never sign up for an account.",
      "One engineer. I build it agent-first, under rules enforced by agent-contract.",
    ],
    decisions: [
      {
        title: "A modular monolith",
        body: "Each domain is a self-contained Laravel module: Cases, Engagements, Drive, Chat, PayTrack, Signatures, StaffTrack and more. Modules talk only through services and events, which keeps boundaries clear for me and for the agents writing code inside them.",
      },
      {
        title: "Tenant scoping by default",
        body: "Every tenant-owned record carries a tenant ID. Middleware resolves the firm or practitioner from the route, and a global scope filters every query, so cross-tenant leaks need a deliberate bypass rather than a forgotten where-clause.",
      },
      {
        title: "Encrypted at rest, not end-to-end, for Drive",
        body: "Inline previews, ZIP extraction and viewers without accounts all need the server to read the file. So Drive encrypts files at rest on the server, and access is controlled by participants, expiring share links and optional access codes.",
      },
      {
        title: "Share links that work without an account",
        body: "A link can expire after 24 hours, 7 days, 30 days or never, can require an access code, and locks for 10 minutes after repeated wrong codes, notifying the folder's creator.",
      },
      {
        title: "Billing that matches how firms get paid",
        body: "PayTrack has no payment gateway. A billing record holds one period, renewals create the next one, and invoices are in naira or US dollars, with reports that never add the two together.",
      },
    ],
    result: [
      "In production since June 2026, with Cases and Engagements, Drive, PayTrack billing, StaffTrack, e-signatures, and Google Calendar and Google Drive integration.",
      "The latest release, in October 2026, added automatic retainer renewals and billing in naira or US dollars.",
      "19 modules and over 1,200 automated tests, built by one engineer working with agents since May 2026.",
    ],
    stack: ["PHP 8.4", "Laravel", "Inertia", "React", "TypeScript", "Tailwind", "Pest"],
    link: "https://lawyering.cloud",
    essays: [],
  },
  {
    slug: "tangerine365",
    title: "Tangerine365",
    summary:
      "One multi-tenant LMS for banks and enterprises, replacing a separate codebase per client.",
    role: "Technical lead and solutions architect, Zercom Systems",
    period: "2023 – 2024",
    goal: "Sell one learning platform to banks and enterprises with very different branding, compliance and infrastructure rules, without maintaining a copy of the code for every client.",
    context: [
      "A Central Bank of Nigeria-mandated vulnerability scan flagged the LMS's PHP 7.4 runtime as end-of-life. The banks' remediation deadline became ours.",
      "Each client ran its own hand-edited copy of the project. Ten clients meant ten diverging codebases, so a bug fix shipped ten times.",
      "Days before one bank's go-live, its infrastructure team required SQL Server. The previous vendor had abandoned a separate SQL Server fork because it couldn't keep two repositories in sync.",
      "The codebase was vanilla PHP with no framework, and the deadline ruled out adopting one. Every piece of infrastructure a framework would provide, from queues and scheduling to the database dispatcher and theming, we had to build ourselves. That is what made it hard to architect at scale.",
    ],
    decisions: [
      {
        title: "Shrink to a core, then rebuild upward",
        body: "Strip the LMS to a lean core on PHP 8.1, then re-add modules one at a time as plugins, so each bank turns on only the features it bought.",
      },
      {
        title: "One codebase, two database drivers",
        body: "MySQL by default and SQL Server where a bank requires it, chosen at runtime by a dispatcher. Every query is written twice, which is the cost of never forking again.",
      },
      {
        title: "Tenancy by subdomain or by ID",
        body: "Tenants are separated by subdomain by default (tenant.tangerine365.com). Inside Human Manager HRMS they are scoped by ID, so every new HRMS customer gets an LMS automatically. Branding is configuration, not code.",
      },
      {
        title: "Deploy from release tags, not zip files",
        body: "Bank deployments moved from operators copying zip files to git pulls of verified release tags during controlled windows. That gave the banks an audit trail, integrity checks and rollback.",
      },
      {
        title: "Size and design each deployment",
        body: "I wrote the infrastructure sizing and deployment architecture for each client. First Bank's on-premise build runs external load balancer → two proxying web servers → internal load balancer → two app servers → central SQL Server.",
      },
    ],
    result: [
      "One codebase deployed at Wema Bank, First Bank, PremiumTrust Bank and Seven-Up Bottling Company, plus a self-serve cloud product.",
      "Over 10,000 production users, most migrated from the legacy LMS.",
      "Production then taught the rest: queue-backed reports, an in-app scheduler, chunked proctoring recordings and mandatory authenticator-app 2FA for admins.",
      "Before I left, we had planned the migration to Laravel, the framework investment the deadline had ruled out at the start.",
    ],
    stack: ["PHP 8 (vanilla)", "MySQL", "SQL Server", "IIS", "Apache", "Docker", "Jitsi Meet", "LDAP"],
    link: "https://tangerine365.com",
    essays: [essays.architecturePart1, essays.architecturePart2],
  },
  {
    slug: "terminoxx360",
    title: "Terminoxx360",
    summary:
      "ATM fleet monitoring and incident response, running at Access Bank and rebuilt for multi-country banking groups.",
    role: "Maintainer at Access Bank; sole engineer on the new version",
    goal: "Tell a bank which ATMs are down before its customers do, get the right person fixing each one, and report uptime the way the Central Bank of Nigeria requires. The new version serves a banking group's subsidiaries across several countries from one deployment.",
    context: [
      "At Access Bank, transaction-heavy jobs stalled under database locks, and a backlog of slow queries kept growing.",
      "The banks' ATM middleware has no webhooks, so status has to be polled.",
      "Different people need different uptime numbers. CBN reports use a regulatory formula that weights downtime ten times; operations need uptime based on missed SLAs.",
      "Every bank signs in differently: local accounts, LDAP and Active Directory, or the bank's own API. Some cannot send any data outside their network.",
    ],
    decisions: [
      {
        title: "Fix the running system first",
        body: "At Access Bank I rewrote the stalling jobs for transactional efficiency, added indexes and schema clean-up to clear the slow queries, and added auto-restart for stuck jobs.",
      },
      {
        title: "One job owns every ticket",
        body: "Every minute a single job closes tickets for recovered ATMs, escalates overdue ones from custodian to support to vendor, and opens tickets for ATMs offline past tolerance in business hours. It never creates duplicates across workers, pauses itself and alerts admins when the feed goes stale, and stops the SLA clock on holidays.",
      },
      {
        title: "Two uptime numbers, never mixed",
        body: "A pure calculator with no database access produces the regulatory and internal figures separately, pre-computed for 12, 24, 48 and 72-hour windows, so compliance reports and operations dashboards each get the number they need.",
      },
      {
        title: "Tenancy by subsidiary",
        body: "Every table carries a subsidiary ID enforced by the database and a global query scope. Roles are scoped per subsidiary, so an admin in one is not an admin in another, and a subsidiary can inherit settings from its parent.",
      },
      {
        title: "Configuration, not forks, for each bank",
        body: "Sign-in adapters for LDAP and bank APIs plug in per deployment. The AI assistant runs on Claude where the bank allows cloud access, or on Ollama inside the bank's network where no data may leave.",
      },
    ],
    result: [
      "Cleared the slow-query backlog and the stalled jobs at Access Bank.",
      "A multi-tenant rebuild, started in April 2026, with map views, full monitoring history, reports and an AI assistant that queries live fleet data, covered by over 600 automated tests.",
    ],
    stack: ["PHP 8.4", "Laravel", "Livewire", "Flux UI", "MySQL", "Redis", "Horizon", "Claude", "Ollama"],
    link: "https://cloud.terminoxx360.com",
    essays: [],
  },
  {
    slug: "trustcenta",
    title: "TrustCenta",
    summary:
      "A multi-tenant security platform: vulnerability scanning, risk, compliance, staff training and phishing simulation in one product.",
    role: "Sole engineer",
    period: "2024 – present",
    goal: "Give a company one place to find its security weaknesses, track the risk, prove compliance and train its staff, instead of a separate tool for each.",
    context: [
      "Five disciplines in one product, built on three open-source engines: OWASP ZAP for scanning, Gophish for phishing simulation and CISO Assistant for compliance frameworks.",
      "Each engine brings its own runtime and database, and none of them knows about tenants.",
      "In 2026 the production server was found running a cryptominer. Small convenience decisions had added up: a web-panel user in the docker group, one flat Docker network, root processes in containers, admin panels on the public internet.",
    ],
    decisions: [
      {
        title: "Own the domain, wrap the engines",
        body: "ZAP, Gophish and CISO Assistant each sit behind an adapter. TrustCenta owns the data model, and replacing an engine means rewriting one adapter.",
      },
      {
        title: "Long scans run on a queue",
        body: "A scan can take more than 30 minutes, so the API queues it and returns at once. A worker drives ZAP with timeouts and retries, and reports the real reason when a scan fails.",
      },
      {
        title: "Connect the domains through events",
        body: "A finished scan turns high and critical findings into risks and files the report as compliance evidence. A failed phishing test assigns the employee training. A workflow engine handles these links, so modules never import each other.",
      },
      {
        title: "One database, company-scoped queries",
        body: "Every domain table carries a company ID taken from the signed-in session. One database means one migration path and one backup. The cost is that a missing filter would leak data, so the architecture review names database row-level security as the next safeguard.",
      },
      {
        title: "Wipe, don't patch; then expose nothing",
        body: "After the compromise I treated the host as untrusted, reinstalled it and rotated every credential. The services still share one Docker network, but none of them publishes a port, and the whole server sits behind a firewall.",
      },
    ],
    result: [
      "One product covering five security disciplines, including an ISO 27001 Statement of Applicability and a reviewed mapping from Cyber Essentials to ISO 27001.",
      "A public post-mortem on what convenience cost, and the architecture it should have had on day one.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker", "OWASP ZAP", "Gophish", "CISO Assistant"],
    link: "https://trustcenta.com",
    essays: [essays.postMortem1, essays.postMortem2],
  },
  {
    slug: "agent-contract",
    title: "Agent Contract",
    summary: "Deterministic guardrails for AI coding agents, published on npm.",
    role: "Creator",
    period: "2026 – present",
    goal: "Get the speed of AI coding agents on production codebases without turning every review into an audit of what else the agent touched.",
    context: [
      "Agents drift beyond the task: renaming functions, refactoring unrelated modules.",
      "Instruction files like CLAUDE.md communicate intent but don't enforce it.",
    ],
    decisions: [
      {
        title: "Move determinism out of the model",
        body: "The repository declares roles, each with a path scope. Every write an agent attempts is checked against the contract before it happens, and writes outside scope are blocked.",
      },
      {
        title: "Memory lives in the repo",
        body: "Decisions, conventions and a codebase map persist between sessions instead of being rediscovered, which also cuts context use.",
      },
      {
        title: "Provider-independent",
        body: "The same contract holds for Claude, Codex or Copilot.",
      },
    ],
    result: [
      "Review shifts from 'what else did it touch?' to 'is this the right solution?'.",
      "Shipped as npm i -g @semeton/agent-contract, with a companion Azure Boards CLI. I use it daily, including on this site.",
    ],
    stack: ["Node.js", "CLI", "YAML", "Claude", "OpenAI"],
    link: "https://agent-contract.semeton.xyz",
    essays: [essays.beyondPrompts],
  },
];

export function findCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
