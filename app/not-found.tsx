import type { Metadata } from "next";
import Link from "next/link";
import Subpage from "@/components/subpage";

export const metadata: Metadata = {
  title: "Page not found | Semeton Balogun",
  robots: { index: false, follow: true },
};

const linkClass =
  "text-[hsl(var(--brand))] hover:underline underline-offset-4";

export default function NotFound() {
  return (
    <Subpage>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        That page doesn&apos;t exist, or it moved.
      </p>
      <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        <Link href="/" className={linkClass}>
          Home →
        </Link>
        <Link href="/#areas" className={linkClass}>
          What I work on →
        </Link>
        <Link href="/work" className={linkClass}>
          Work history →
        </Link>
      </p>
    </Subpage>
  );
}
