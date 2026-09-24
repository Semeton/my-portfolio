import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";

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
      <div className="flex items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Semeton Balogun
          </h1>
          <p className="mt-1 text-muted-foreground">
            Software engineer. Backend systems for banks, enterprise SaaS, and
            public health.
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
          I studied nursing at the University of Lagos, working as a graphic
          designer and creative director for about five years alongside the
          degree. I graduated with distinction and qualified as a registered
          nurse. Curiosity got me teaching myself to code. In 2020 I joined
          the tech apprenticeship at Bincom Dev Center, which became my first
          engineering role, with{" "}
          <a
            href="https://ogwodev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
          >
            Emmanuel Ogwo
          </a>{" "}
          as my mentor.
        </p>
        <p>
          Since then I've mostly built backend systems: education platforms at
          Bincom and ScholarshipIQ, then as technical lead at Zercom Systems,
          where I led the rewrite of a banking LMS used by Wema Bank, First
          Bank, and FCMB. What I keep coming back to, and write about, is how
          architecture decisions hold up once they meet production.
        </p>
        <p>
          Currently at SeamlessHR, and on contract with eGov Foundation on
          DIGIT, the platform behind Nigeria's health campaigns. Pursuing a
          Master's in Information Technology at Miva Open University, working
          toward deep systems architecture and ultimately solutions
          engineering.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
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
    </section>
  );
}
