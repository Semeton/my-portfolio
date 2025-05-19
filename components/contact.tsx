import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Interested in discussing technical challenges or opportunities? Let's connect.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-6">
                <Link
                  href="https://github.com/semeton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <GithubIcon className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">github.com/semeton</p>
                  </div>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/semetonbalogun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <LinkedinIcon className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">linkedin.com/in/semetonbalogun</p>
                  </div>
                </Link>

                <Link
                  href="mailto:contact@semetonbalogun.com"
                  className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <MailIcon className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">contact@semetonbalogun.com</p>
                  </div>
                </Link>
              </div>

              <div className="mt-8 text-center">
                <Button asChild className="rounded-full px-8 py-6 text-base">
                  <a href="mailto:contact@semetonbalogun.com">Schedule a consultation</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
