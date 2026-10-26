import Section from "@/components/section";

const linkClass =
  "text-[hsl(var(--brand))] hover:underline underline-offset-4";

export default function OpenTo() {
  return (
    <Section id="open-to" title="What I'm looking for">
      <p className="leading-relaxed">
        Lead roles: solutions architecture, or AI research on agent governance,
        meaning guardrails and repository memory for coding agents.
      </p>
      <p className="mt-4 text-sm">
        <a href="mailto:balogunsemeton@gmail.com" className={linkClass}>
          balogunsemeton@gmail.com
        </a>
        <span className="text-muted-foreground"> · </span>
        <a
          href="/semeton-balogun-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Résumé (PDF)
        </a>
      </p>
    </Section>
  );
}
