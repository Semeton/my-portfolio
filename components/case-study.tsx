import type { CaseStudy as Study } from "@/lib/case-studies";

const labelClass =
  "mb-3 text-xs font-medium uppercase tracking-[0.12em] text-[hsl(var(--brand))]";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="flex-shrink-0 text-muted-foreground">–</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Header({ study }: { study: Study }) {
  return (
    <header>
      <h1 className="text-3xl font-semibold tracking-tight">{study.title}</h1>
      <p className="mt-2 text-lg text-muted-foreground">{study.summary}</p>
      <p className="mt-4 text-sm text-muted-foreground">
        {study.role}
        {study.period && <span className="tabular-nums"> · {study.period}</span>}
        {" · "}
        <a
          href={study.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[hsl(var(--brand))] hover:underline underline-offset-4"
        >
          {study.link.replace("https://", "")} ↗
        </a>
      </p>
    </header>
  );
}

function Decisions({ study }: { study: Study }) {
  return (
    <section>
      <h2 className={labelClass}>Decisions</h2>
      <div className="space-y-5">
        {study.decisions.map((decision) => (
          <div key={decision.title}>
            <h3 className="font-semibold">{decision.title}</h3>
            <p className="mt-1 leading-relaxed text-muted-foreground">
              {decision.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Essays({ study }: { study: Study }) {
  if (study.essays.length === 0) return null;
  return (
    <section>
      <h2 className={labelClass}>Read more</h2>
      <ul className="space-y-1">
        {study.essays.map((essay) => (
          <li key={essay.link}>
            <a
              href={essay.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
            >
              {essay.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CaseStudy({ study }: { study: Study }) {
  return (
    <article className="space-y-12">
      <Header study={study} />
      <section className="rounded-md bg-muted px-5 py-4">
        <h2 className={labelClass}>Business goal</h2>
        <p className="text-lg leading-relaxed">{study.goal}</p>
      </section>
      <section>
        <h2 className={labelClass}>Context</h2>
        <Bullets items={study.context} />
      </section>
      <Decisions study={study} />
      <section>
        <h2 className={labelClass}>Result</h2>
        <Bullets items={study.result} />
      </section>
      <Essays study={study} />
      <p className="text-xs text-muted-foreground">{study.stack.join(" · ")}</p>
    </article>
  );
}
