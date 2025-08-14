import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Enterprise Platform Development",
      description:
        "Specialized in building and re-architecting enterprise-grade platforms for financial institutions, manufacturing companies, and large organizations.",
      highlights: [
        "Multi-tenant, multi-database LMS architecture supporting MySQL and MSSQL",
        "Custom driver implementations for legacy system compatibility",
        "Scalable proctoring systems with chunked video streaming",
        "Distributed, cloud-ready solutions with modular integrations",
      ],
      technologies: "PHP 8.*, Laravel, MySQL, MSSQL, Docker, LDAP, REST APIs",
    },
    {
      title: "Security & Compliance",
      description:
        "Comprehensive security engineering with focus on vulnerability assessment, remediation, and compliance for enterprise systems.",
      highlights: [
        "High-risk vulnerability remediation for LMS and ATM monitoring systems",
        "Bank security audit compliance and certification",
        "Vulnerability scanning platforms with ZAP and Gophish integration",
        "Real-time monitoring for Docker containers and scheduled jobs",
      ],
      technologies: "ZAP, Gophish, Docker, Security Auditing, Compliance",
    },
    {
      title: "Infrastructure & DevOps",
      description:
        "Modern DevOps practices including containerization, CI/CD pipelines, and infrastructure optimization for cost and performance.",
      highlights: [
        "Legacy system containerization reducing setup time from days to hours",
        "CI/CD pipeline implementation reducing deployment time by 70%",
        "Infrastructure consolidation and performance optimization",
        "VPS migration reducing hosting costs by ~85%",
      ],
      technologies:
        "Docker, CI/CD, CyberPanel, VPS, Infrastructure Optimization",
    },
    {
      title: "Performance & Scalability",
      description:
        "Expertise in database optimization, query tuning, and system performance enhancement for high-traffic applications.",
      highlights: [
        "Database performance improvement by over 50% through indexing and tuning",
        "Resolution of database lock issues with automated recovery systems",
        "Stress testing and scalability validation",
        "Caching strategies and infrastructure consolidation",
      ],
      technologies: "MySQL, Query Optimization, Indexing, Caching, JMeter",
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Technical Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Deep technical knowledge across enterprise development, security
            engineering, and infrastructure optimization.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
                  {area.title}
                </CardTitle>
                <CardDescription className="text-base mt-2 text-gray-600 dark:text-gray-400">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Key Capabilities:
                  </h4>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {area.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Technologies:
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {area.technologies}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
