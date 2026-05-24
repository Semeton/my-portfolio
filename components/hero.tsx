import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedinIcon, FileTextIcon } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="py-28 md:py-36 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
            <div className="w-56 h-56 md:w-80 md:h-80 relative flex-shrink-0 order-1 md:order-2 group">
              <div className="absolute inset-0 rounded-xl overflow-hidden border-4 border-white dark:border-black shadow-lg">
                <Image
                  src="/images/semeton-black.jpeg"
                  alt="Semeton Balogun"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                  priority
                />
                <Image
                  src="/images/semeton.jpeg"
                  alt="Semeton Balogun"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>

            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 leading-tight">
                Semeton <br className="hidden md:block" />
                Balogun
              </h1>
              <hr className="my-4" />
              <p className="text-lg uppercase font-bold text-gray-600 dark:text-gray-400">
                Backend engineer. Systems for banks and enterprise SaaS.
              </p>

              <div className="flex items-center justify-center md:justify-start space-x-4 mt-4 mb-12">
                <a
                  href="https://github.com/semeton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/semetonbalogun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://docs.google.com/document/d/1NfYdtsJkmpsMdYHhVUiMH6Cd_hIFL0-scYoBItzEmZ4/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Resume"
                >
                  <FileTextIcon className="h-6 w-6" />
                </a>
              </div>

              <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  A registered nurse who codes. The instinct transfers: assess before you act,
                  find what's actually broken, not just the presenting symptom.
                </p>

                <p className="leading-relaxed">
                  Taught myself to code, led the rewrite of a legacy banking LMS into a
                  multi-tenant platform across Wema Bank, First Bank, and FCMB, built custom
                  database drivers, physical server deployments inside bank networks.
                  The unconventional path tends to produce the unconventional solution.
                </p>

                <p className="leading-relaxed">
                  Currently at SeamlessHR. Pursuing a Master of Information Technology
                  (MIT) at Miva Open University. Building towards systems (and solutions) architecture.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild className="rounded-full px-8 py-6 text-base">
                  <Link href="#contact">Email me</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base"
                >
                  <Link href="#projects">See the work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
