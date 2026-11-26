import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/site-nav";

const linkClass =
  "text-foreground underline decoration-muted-foreground/60 underline-offset-4 hover:decoration-foreground";

export default function Hero() {
  return (
    <section id="about">
      <SiteNav home />
      <div className="flex items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">
            Semeton Balogun
          </h1>
          <p className="mt-3 text-lg">
            Backend and systems engineer. I design multi-tenant platforms and
            the infrastructure they run on.
          </p>
        </div>
        <Image
          src="/images/semeton.jpeg"
          alt="Semeton Balogun"
          width={72}
          height={72}
          className="h-[72px] w-[72px] flex-shrink-0 rounded-full object-cover"
          priority
        />
      </div>

      <p className="mt-6 leading-relaxed text-muted-foreground">
        Six years building backend systems in production. At Zercom I led the
        move from a codebase per client to one multi-tenant LMS used by over
        35,000 people at First Bank, Wema Bank, FCMB, PremiumTrust Bank and
        Seven-Up Bottling Company, and designed
        First Bank&apos;s on-premise deployment. Now I work on HR software at{" "}
        <a
          href="https://seamlesstech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Seamless Technologies
        </a>
        , on health campaign systems with{" "}
        <a
          href="https://egov.global/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          eGov Foundation
        </a>
        , and on open source guardrails for AI coding agents.
      </p>

      <p className="mt-4 leading-relaxed">
        Open to lead roles in solutions architecture or agent governance.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
        <a
          href="mailto:balogunsemeton@gmail.com"
          className="inline-flex rounded-md bg-foreground px-3.5 py-2 font-medium text-background hover:opacity-90"
        >
          Email me
        </a>
        <a
          href="/semeton-balogun-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 text-[hsl(var(--brand))] underline-offset-4 hover:underline"
        >
          Résumé (PDF)
        </a>
        <Link
          href="/projects"
          className="py-2 text-[hsl(var(--brand))] underline-offset-4 hover:underline"
        >
          Case studies →
        </Link>
      </div>
    </section>
  );
}
