import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const writingActivities = [
  {
    title: "Codeplified — Substack",
    subtitle: "Engineering writing for practitioners",
    description:
      "Engineering writing. Practitioner to practitioner, reflective rather than instructional. Production debugging stories, architecture decisions, notes from working through Designing Data-Intensive Applications.",
    link: "https://semeton.substack.com",
    embed: true,
  },
  {
    title: "Medium",
    subtitle: "Essays and journaling",
    description:
      "Essays and journaling. Includes 'On the God Question' — a long-form piece on naturalistic agnosticism and why no existing religion produces a portrait of God that isn't too small and too human.",
    link: "https://medium.com/@semeton",
  },
  {
    title: "Perspective Podcast",
    subtitle: "Conversational podcast co-host",
    description:
      "Co-hosted with a close friend. Conversational, not specialist — ambition, attention, adult friendships, discipline, identity.",
    link: "https://open.spotify.com/show/6IIbErw26bSWgRs5NWz8vw",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Writing & Media
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I write. The list is short on purpose.
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {writingActivities.map((activity, index) => (
            <div key={index} className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {activity.title}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                    {activity.subtitle}
                  </p>
                </div>
                <Link
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  Visit
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {activity.description}
              </p>
              {activity.embed && (
                <div className="flex flex-col sm:flex-row gap-6 items-start pt-2">
                  <div className="flex-1 overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800">
                    <iframe
                      src="https://semeton.substack.com/embed"
                      width="100%"
                      height="320"
                      title="Codeplified Substack newsletter"
                      style={{ border: 0, background: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <Image
                      src="/qr-code.svg"
                      alt="Scan to subscribe to Codeplified"
                      width={110}
                      height={110}
                      className="rounded"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Scan to subscribe
                    </p>
                  </div>
                </div>
              )}
              {index < writingActivities.length - 1 && (
                <hr className="border-gray-200 dark:border-gray-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
