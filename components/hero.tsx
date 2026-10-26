import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

const links = [
  { label: "GitHub", href: "https://github.com/semeton" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/semetonbalogun/" },
  {
    label: "Resume",
    href: "/semeton-balogun-resume.pdf",
  },
  { label: "Substack", href: "https://semeton.substack.com" },
  { label: "Email", href: "mailto:balogunsemeton@gmail.com" },
];

const linkClass =
  "text-foreground underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground";

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
            className="text-muted-foreground hover:text-foreground"
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
          <h1 className="text-3xl font-semibold tracking-tight">
            Semeton Balogun
          </h1>
          <p className="mt-2 text-lg">
            Backend and systems engineer, moving into solutions architecture.
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
        I turn business goals into systems that hold up in production: tenant
        isolation for banks and enterprise SaaS, deployments inside bank
        networks, and data that stays correct across offline devices. I'm CTO
        at{" "}
        <a
          href="https://lawyering.cloud"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Lawyering
        </a>
        , and work at{" "}
        <a
          href="https://seamlesstech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Seamless Technologies
        </a>{" "}
        and on contract with{" "}
        <a
          href="https://egov.global/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          eGov Foundation
        </a>
        .
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        I came to software from nursing, after qualifying as a registered nurse
        at the University of Lagos.{" "}
        <Link
          href="/about"
          className="text-[hsl(var(--brand))] hover:underline underline-offset-4"
        >
          My background →
        </Link>
      </p>
    </section>
  );
}
