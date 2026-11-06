import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import Footer from "@/components/footer";

export default function Subpage({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto min-h-screen max-w-[650px] px-4 py-16 sm:py-24">
      <div className="mb-12 flex items-center justify-between text-sm">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground"
        >
          ← Semeton Balogun
        </Link>
        <ThemeToggle />
      </div>
      {children}
      <Footer />
    </main>
  );
}
