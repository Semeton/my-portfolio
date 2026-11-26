const links = [
  { label: "Email", href: "mailto:balogunsemeton@gmail.com" },
  { label: "GitHub", href: "https://github.com/semeton" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/semetonbalogun/" },
  { label: "Substack", href: "https://semeton.substack.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t pt-6 text-sm text-muted-foreground">
      <span>© {currentYear} Semeton Balogun</span>
      <span className="flex flex-wrap gap-x-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="py-1 hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </span>
    </footer>
  );
}
