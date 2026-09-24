import Section from "@/components/section";

const articles = [
  {
    title: "The Architecture I Didn't Design, Part 1: Decisions Under Deadline",
    dek: "How a Central Bank vulnerability scan kicked off a six-month rebuild of an LMS deployed across several major Nigerian banks.",
    link: "https://semeton.substack.com/p/the-architecture-i-didnt-design-part",
  },
  {
    title: "The Architecture I Didn't Design, Part 2: Decisions Production Demanded",
    dek: "The rebuild was done. The architecture wasn't. What ten thousand users in production taught us about everything we hadn't thought to design.",
    link: "https://semeton.substack.com/p/the-architecture-i-didnt-design-part-86b",
  },
  {
    title: "Beyond Prompts: Repository Governance for AI Coding Agents",
    dek: "Deterministic guardrails for non-deterministic agents.",
    link: "https://semeton.substack.com/p/beyond-prompts-repository-governance",
  },
];

const elsewhere = [
  {
    title: "Perspective",
    kind: "Podcast",
    description:
      "Co-hosted with a close friend. Conversational, not specialist — ambition, attention, adult friendships, discipline, identity.",
    link: "https://open.spotify.com/show/6IIbErw26bSWgRs5NWz8vw",
  },
  {
    title: "Medium",
    kind: "Essays",
    description:
      "Essays and journaling. Includes 'On the God Question' — a long-form piece on naturalistic agnosticism and why no existing religion produces a portrait of God that isn't too small and too human.",
    link: "https://medium.com/@semeton",
  },
];

const linkClass =
  "underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground";

export function Writing() {
  return (
    <Section id="writing" title="Writing">
      <p className="mb-6 leading-relaxed text-muted-foreground">
        Engineering writing on{" "}
        <a
          href="https://semeton.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Codeplified
        </a>
        . Practitioner to practitioner: production debugging stories,
        architecture decisions, notes from working through Designing
        Data-Intensive Applications.
      </p>
      <ul className="space-y-6">
        {articles.map((article) => (
          <li key={article.link}>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium ${linkClass}`}
            >
              {article.title}
            </a>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {article.dek}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm">
        <a
          href="https://semeton.substack.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Subscribe on Substack
        </a>
      </p>
    </Section>
  );
}

export function Elsewhere() {
  return (
    <Section id="elsewhere" title="Elsewhere">
      <ul className="space-y-6">
        {elsewhere.map((item) => (
          <li key={item.link}>
            <p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium ${linkClass}`}
              >
                {item.title}
              </a>
              <span className="text-muted-foreground"> — {item.kind}</span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
