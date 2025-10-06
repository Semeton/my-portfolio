import Header from "@/components/header";
import Hero from "@/components/hero";
import Terminal from "@/components/terminal";
import Leadership from "@/components/leadership";
import Projects from "@/components/projects";
import Writing from "@/components/writing";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Experience from "@/components/experience";
import CollapsibleSection from "@/components/collapsible-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Terminal</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Interact with my portfolio through this command line interface.
            </p>
          </div>
          <Terminal />
        </div>
      </section>
      <CollapsibleSection title="Professional Experience" defaultOpen={false}>
        <Experience />
      </CollapsibleSection>
      <CollapsibleSection
        title="Leadership & Technical Expertise"
        defaultOpen={false}
      >
        <Leadership />
      </CollapsibleSection>
      <CollapsibleSection title="Projects" defaultOpen={false}>
        <Projects />
      </CollapsibleSection>
      <CollapsibleSection title="Writing & Media" defaultOpen={false}>
        <Writing />
      </CollapsibleSection>
      <Contact />
      <Footer />
    </main>
  );
}
