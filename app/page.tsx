import Hero from "@/components/hero";
import Areas from "@/components/areas";
import Timeline from "@/components/timeline";
import { Writing } from "@/components/writing";
import OpenTo from "@/components/open-to";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main
      id="main"
      className="mx-auto min-h-screen max-w-[650px] px-4 py-16 sm:py-24"
    >
      <Hero />
      <Areas />
      <Timeline />
      <Writing limit={3} />
      <OpenTo />
      <Footer />
    </main>
  );
}
