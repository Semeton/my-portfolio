import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon, LinkedinIcon, FileTextIcon } from "lucide-react"

export default function Hero() {
  return (
    <section id="about" className="py-28 md:py-36 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
            <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0 order-1 md:order-2">
              <div className="absolute inset-0 rounded-xl overflow-hidden border-4 border-white dark:border-black shadow-lg">
                <Image
                  src="/images/semeton-balogun.png"
                  alt="Semeton Balogun"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover grayscale"
                  priority
                />
              </div>
            </div>

            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 leading-tight">
                Backend <br className="hidden md:block" />
                Engineer
              </h1>

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

              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  I'm <span className="font-semibold">Semeton Balogun</span>, a senior backend engineer with 5 years of
                  experience architecting and scaling mission-critical systems for financial institutions, security
                  platforms, and enterprise applications.
                </p>

                <p className="leading-relaxed">
                  I specialize in designing resilient backend architectures, optimizing system performance, and leading
                  technical teams through complex implementations. My expertise spans PHP (Laravel), Node.js, and
                  distributed systems with a focus on security and scalability.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild className="rounded-full px-8 py-6 text-base">
                  <Link href="#contact">Get in touch</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base">
                  <Link href="#projects">View key projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
