import SiteNav from "@/components/site-nav";
import Footer from "@/components/footer";

export default function Subpage({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen max-w-[650px] px-4 py-16 sm:py-24">
      <SiteNav />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
