import Section from "@/components/section";

const articles = [
  {
    title: "Your AI Coding Agent Forgets. Your Repository Shouldn't.",
    date: "Nov 2026",
    dek: "Repository memory, institutional engineering knowledge, and why persistent context needs to be verifiable.",
    link: "https://semeton.substack.com/p/your-ai-coding-agent-forgets-your",
  },
  {
    title: "Beyond Prompts: Repository Governance for AI Coding Agents",
    date: "Jul 2026",
    dek: "Deterministic guardrails for non-deterministic agents.",
    link: "https://semeton.substack.com/p/beyond-prompts-repository-governance",
  },
  {
    title: "The Architecture I Didn't Design, Part 1: Decisions Under Deadline",
    date: "May 2026",
    dek: "How a Central Bank vulnerability scan kicked off a six-month rebuild of an LMS deployed across several major Nigerian banks.",
    link: "https://semeton.substack.com/p/the-architecture-i-didnt-design-part",
  },
  {
    title: "The Architecture I Didn't Design, Part 2: Decisions Production Demanded",
    date: "May 2026",
    dek: "The rebuild was done. The architecture wasn't. What ten thousand users in production taught us about everything we hadn't thought to design.",
    link: "https://semeton.substack.com/p/the-architecture-i-didnt-design-part-86b",
  },
  {
    title: "When Your Security Platform Becomes the Target: A Post-Mortem (Part 1)",
    date: "May 2026",
    dek: 'How "small" convenience decisions added up to a full infrastructure rebuild.',
    link: "https://semeton.substack.com/p/when-your-security-platform-becomes",
  },
  {
    title: "When Your Security Platform Becomes the Target: A Post-Mortem (Part 2)",
    date: "May 2026",
    dek: "Five lessons from rebuilding from scratch, and the architecture I should have had on day one.",
    link: "https://semeton.substack.com/p/when-your-security-platform-becomes-ed0",
  },
  {
    title: "Understanding Is the Feature: What AI Agents Can't Do For You",
    date: "Mar 2026",
    dek: "Agents absorb routine coding; the hard bugs live at the seams between systems.",
    link: "https://semeton.substack.com/p/understanding-is-the-feature-what",
  },
  {
    title: "Engineering is More Than The Code",
    date: "Aug 2025",
    dek: "How I Cut Hosting Costs by 85% Without Sacrificing Performance.",
    link: "https://semeton.substack.com/p/engineering-is-more-than-the-code",
  },
];


const linkClass =
  "underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground";

const titleClass =
  "font-medium underline decoration-muted-foreground/60 underline-offset-4 hover:decoration-foreground";

export function Writing({ limit }: { limit?: number }) {
  return (
    <Section id="writing" title="Writing">
      <p className="mb-6 text-muted-foreground">
        Engineering writing on{" "}
        <a
          href="https://semeton.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Codeplified
        </a>
        .
      </p>
      <ul className="space-y-6">
        {articles.slice(0, limit).map((article) => (
          <li key={article.link}>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={titleClass}
            >
              {article.title}
            </a>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              <span className="tabular-nums">{article.date}</span> ·{" "}
              {article.dek}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm">
        <a
          href={limit ? "https://semeton.substack.com/archive" : "https://semeton.substack.com/subscribe"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[hsl(var(--brand))] hover:underline underline-offset-4"
        >
          {limit ? "All writing on Substack →" : "Subscribe on Substack"}
        </a>
      </p>
    </Section>
  );
}
