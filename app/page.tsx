import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Writing from "@/components/writing";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
