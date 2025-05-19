import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Trustcenta",
      subtitle: "Enterprise Vulnerability Management Platform",
      description:
        "Architected and developed a comprehensive security platform for automated vulnerability scanning and management.",
      highlights: [
        "Designed microservice architecture with Node.js and PostgreSQL",
        "Implemented Docker containerization for consistent deployment",
        "Built role-based access control system with granular permissions",
        "Integrated with ZAPROXY for automated security scanning",
      ],
      tech: ["Node.js", "Next.js", "PostgreSQL", "Prisma", "Docker"],
    },
    {
      title: "Tangerine LMS",
      subtitle: "Multi-Bank Learning Management System",
      description:
        "Led the re-architecture of an enterprise learning platform deployed across multiple banking institutions.",
      highlights: [
        "Designed custom database architecture supporting multi-tenant isolation",
        "Implemented advanced caching strategies reducing load times by 60%",
        "Built custom MSSQL driver for multi-database support as well as video conferencing and proctoring modules",
        "Deployed across Windows IIS and Linux Apache environments",
      ],
      tech: ["PHP 8.1", "Laravel", "MySQL", "SQL Server", "OpCache", "Docker"],
    },
    {
      title: "Trustpass",
      subtitle: "Security & ID Verification System",
      description:
        "Architected a secure visitor management system for gated communities.",
      highlights: [
        "Designed secure API architecture for sensitive identification data",
        "Implemented QR code-based verification system with cryptographic security",
        "Built real-time monitoring and notification systems",
        "Developed role-based dashboard for security personnel",
      ],
      tech: ["Laravel", "React Native", "MySQL", "Redis"],
    },
    {
      title: "ScholarshipIQ",
      subtitle: "AI-Powered Scholarship Aggregator",
      description:
        "Built an intelligent platform to match students with scholarships tailored to their background and academic profile.",
      highlights: [
        "Integrated external scholarship APIs and web scraping for real-time data aggregation",
        "Developed advanced filtering and AI-based recommendation engine",
        "Implemented user authentication and personalized dashboards",
        "Deployed scalable Laravel backend with modular structure",
      ],
      tech: ["Laravel", "MySQL", "Node.js", "React", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Significant technical achievements that demonstrate my expertise in
            system architecture and security.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-800"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-lg mt-1">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600 dark:text-gray-400 text-lg">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-base font-medium mb-3">
                    Key Contributions:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
