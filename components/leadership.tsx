import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UsersIcon, ShieldIcon, BarChartIcon, CodeIcon } from "lucide-react";

export default function Leadership() {
  const expertiseAreas = [
    {
      title: "Technical Leadership & Enterprise Development",
      description:
        "Directed cross-functional teams delivering enterprise platforms for banks, manufacturing companies, and large estates, ensuring technical strategies aligned with business objectives.",
      highlights: [
        "Led multi-tenant, multi-database LMS architecture eliminating redundant deployments",
        "Took ownership of legacy systems under critical security scrutiny, leading modernization efforts",
        "Championed containerization across projects, reducing environment setup times",
        "Built scalable proctoring systems with chunked video streaming for reliability",
      ],
      technologies: "PHP 8.*, Laravel, MySQL, MSSQL, Docker, LDAP, REST APIs",
      icon: <UsersIcon className="h-8 w-8" />,
    },
    {
      title: "Strategic Architecture & System Design",
      description:
        "Guided architectural decisions for complex enterprise systems, eliminating redundancy and enabling flexible technology adoption.",
      highlights: [
        "Designed distributed, cloud-ready solutions with custom UI theming per tenant",
        "Oversaw modular integrations for diverse enterprise clients",
        "Built fault-tolerant systems with adaptable frameworks",
        "Implemented structured development, deployment, and CI/CD processes",
      ],
      technologies:
        "System Architecture, Multi-tenancy, Cloud Solutions, CI/CD",
      icon: <CodeIcon className="h-8 w-8" />,
    },
    {
      title: "Security Leadership & Engineering",
      description:
        "Led enterprise-wide vulnerability remediation programs, ensuring compliance with stringent security audits for banking and financial systems.",
      highlights: [
        "Directed development of proactive security platforms with automated scanning",
        "Built vulnerability scanning platforms integrating ZAP and Gophish",
        "Established real-time monitoring for Docker containers and scheduled jobs",
        "Ensured compliance with bank security audits and certifications",
      ],
      technologies: "ZAP, Gophish, Docker, Security Auditing, Compliance",
      icon: <ShieldIcon className="h-8 w-8" />,
    },
    {
      title: "Performance & Infrastructure Leadership",
      description:
        "Spearheaded performance improvement initiatives across multiple enterprise systems, optimizing infrastructure, database operations, and hosting strategies.",
      highlights: [
        "Led infrastructure consolidation and cloud cost-reduction programs",
        "Cut operational costs by over 80% without sacrificing uptime",
        "Boosted system performance by over 50% through database optimization",
        "Migrated environments to optimized VPS with CyberPanel",
      ],
      technologies:
        "Docker, CI/CD, CyberPanel, VPS, Infrastructure Optimization, MySQL",
      icon: <BarChartIcon className="h-8 w-8" />,
    },
  ];

  return (
    <section
      id="leadership"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Leadership & Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I lead with a balance of technical depth and strategic foresight,
            guiding teams to deliver secure, scalable, and high-impact
            enterprise systems from concept to production.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Icon and Title Section */}
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg">
                      {area.icon}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {area.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {area.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                        >
                          <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Technologies & Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.split(", ").map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 dark:bg-gray-700 opacity-30 rounded-full -translate-y-16 translate-x-16"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
