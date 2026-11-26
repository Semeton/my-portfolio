import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

const items = [
  { label: "Work", href: "/work" },
  { label: "Case studies", href: "/projects" },
  { label: "Background", href: "/about" },
  { label: "Résumé", href: "/semeton-balogun-resume.pdf", external: true },
];

const itemClass = "py-2 text-muted-foreground hover:text-foreground";

/** Site-wide navigation. On subpages it starts with a link home. */
export default function SiteNav({ home = false }: { home?: boolean }) {
  return (
    <header className="mb-12">
      <nav
        aria-label="Main"
        className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm"
      >
        {!home && (
          <Link href="/" className={`${itemClass} font-medium`}>
            Semeton Balogun
          </Link>
        )}
        {items.map((item) =>
          item.external ? (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={itemClass}
            >
              {item.label}
            </a>
          ) : (
            <Link key={item.href} href={item.href} className={itemClass}>
              {item.label}
            </Link>
          ),
        )}
        <span className="ml-auto">
          <ThemeToggle />
        </span>
      </nav>
    </header>
  );
}
