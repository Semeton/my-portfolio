import type { Metadata } from "next";
import Subpage from "@/components/subpage";
import Background from "@/components/background";

export const metadata: Metadata = {
  title: "Background | Semeton Balogun",
  description:
    "From registered nurse and brand designer to backend and systems engineer.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "Background | Semeton Balogun", description: "From registered nurse and brand designer to backend and systems engineer." },
  twitter: { title: "Background | Semeton Balogun", description: "From registered nurse and brand designer to backend and systems engineer." },
};

export default function AboutPage() {
  return (
    <Subpage>
      <h1 className="mb-8 text-4xl font-semibold tracking-tight">Background</h1>
      <Background />
    </Subpage>
  );
}
