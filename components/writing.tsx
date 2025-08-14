"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mic, PenTool, Newspaper, Podcast } from "lucide-react";

export default function Writing() {
  const writingActivities = [
    {
      title: "Medium Blog",
      subtitle: "Personal & Socioeconomic Commentary",
      description:
        "I write about politics, socioeconomic issues, and topics that pique my interest. Sharing perspectives on current events and societal trends.",
      icon: <PenTool className="h-6 w-6" />,
      link: "https://semeton.medium.com",
      type: "writing",
      highlights: [
        "Political commentary and analysis",
        "Socioeconomic issue exploration",
        "Personal insights and perspectives",
        "Current events discussion",
      ],
      tech: ["Medium", "Content Creation", "Analysis"],
    },
    {
      title: "Technical Substack",
      subtitle: "Tech Insights & Tutorials",
      description:
        "A dedicated space for technical content, tutorials, and insights from my development experience.",
      icon: <Newspaper className="h-6 w-6" />,
      link: "https://semeton.substack.com",
      type: "writing",
      highlights: [
        "Technical tutorials and guides",
        "Development insights and best practices",
        "Code reviews and architecture discussions",
        "Industry trends and analysis",
      ],
      tech: ["Substack", "Technical Writing", "Tutorials"],
    },
    {
      title: "Perspective Podcast Newsletter",
      subtitle: "Major Contributor",
      description:
        "I'm a major contributor to the Perspective Podcast Newsletter on Substack, helping curate and create content that complements the podcast discussions.",
      icon: <Newspaper className="h-6 w-6" />,
      link: "https://substack.com/@perspectivepodcastwithej",
      type: "collaboration",
      highlights: [
        "Newsletter content creation and curation",
        "Podcast episode summaries and insights",
        "Guest research and background preparation",
        "Community engagement and discussion",
      ],
      tech: ["Substack", "Newsletter", "Content Curation"],
    },
    {
      title: "Perspective with Emma and Josh",
      subtitle: "Podcast Co-host",
      description:
        "I co-host a podcast where we discuss trending and topical issues around the world, providing diverse perspectives on current events.",
      icon: <Podcast className="h-6 w-6" />,
      link: "https://open.spotify.com/show/6IIbErw26bSWgRs5NWz8vw",
      type: "podcast",
      highlights: [
        "Co-hosting weekly podcast episodes",
        "Discussing global trending topics",
        "Providing diverse perspectives on current events",
        "Engaging with listeners and community",
      ],
      tech: ["Spotify", "Podcasting", "Discussion", "Current Events"],
    },
  ];

  return (
    <section id="writing" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            I Write, Not Just Code
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Beyond coding, I share my thoughts on technology, society, and
            current events through writing and podcasting.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {writingActivities.map((activity, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-900 dark:bg-white rounded-xl text-white dark:text-gray-900 shadow-lg">
                        {activity.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                          {activity.title}
                          {activity.link && (
                            <a
                              href={activity.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </h3>
                        <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                          {activity.subtitle}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        activity.type === "podcast"
                          ? "default"
                          : activity.type === "writing"
                          ? "secondary"
                          : "outline"
                      }
                      className="text-xs bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white"
                    >
                      {activity.type === "podcast"
                        ? "Podcast"
                        : activity.type === "writing"
                        ? "Writing"
                        : "Collaboration"}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      What I Do:
                    </h4>
                    <div className="space-y-2">
                      {activity.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-white mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {activity.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs font-normal bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-200 dark:bg-gray-700 opacity-30 rounded-full -translate-y-12 translate-x-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
