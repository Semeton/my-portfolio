import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import { Writing, Elsewhere } from "@/components/writing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[650px] px-4 py-16 sm:py-24">
      <Hero />
      <Experience />
      <Projects />
      <Writing />
      <Elsewhere />
      <Footer />
    </main>
  );
}
