import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import ClientList from "@/components/clients";

const links = [
  { label: "GitHub", href: "https://github.com/semeton" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/semetonbalogun/" },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1NfYdtsJkmpsMdYHhVUiMH6Cd_hIFL0-scYoBItzEmZ4/edit?usp=sharing",
  },
  { label: "Substack", href: "https://semeton.substack.com" },
  { label: "Email", href: "mailto:balogunsemeton@gmail.com" },
];

export default function Hero() {
  return (
    <section id="about">
      <div className="mb-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
          >
            {link.label}
          </a>
        ))}
        <span className="ml-auto">
          <ThemeToggle />
        </span>
      </div>
      <div className="flex items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Semeton Balogun
          </h1>
          <p className="mt-1 text-muted-foreground">
            Backend and systems engineer. Multi-tenant platforms for banks and
            enterprise SaaS; offline-first data systems for national health
            campaigns.
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

      <div className="mt-8 space-y-4 leading-relaxed">
        <p>
          I build backend systems where the hard part is production: tenant
          isolation, data that has to stay correct across services and offline
          devices, and deployments inside bank networks. At{" "}
          <a
            href="https://seamlesstech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
          >
            Seamless Technologies
          </a>{" "}
          I work on a multi-tenant HR suite. On contract with{" "}
          <a
            href="https://egov.global/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
          >
            eGov Foundation
          </a>{" "}
          I work on DIGIT, the open-source platform behind Nigeria's malaria
          campaigns. Since mid-2026 I've worked agent-first, under rules
          enforced by a tool I built,{" "}
          <a
            href="https://agent-contract.semeton.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
          >
            agent-contract
          </a>
          .
        </p>
        <p>
          Before that I was technical lead at Zercom Systems. I led the rewrite
          of an LMS used by <ClientList />, and acted as solutions architect
          for its bank deployments. What I keep coming back to, and write
          about, is how architecture decisions hold up once they meet
          production.
        </p>
        <p>
          I came to software from nursing. I studied at the University of
          Lagos, graduated with distinction and qualified as a registered
          nurse, while working as a graphic designer and creative director on
          the side. Curiosity got me teaching myself to code. In 2020 I joined
          the tech apprenticeship at Bincom Dev Center, my first engineering
          role, with{" "}
          <a
            href="https://ogwodev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
          >
            Emmanuel Ogwo
          </a>{" "}
          as my mentor. I'm now pursuing a Master's in Information Technology
          at Miva Open University.
        </p>
      </div>

    </section>
  );
}
