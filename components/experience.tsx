import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      company: "SeamlessHR",
      role: "Backend Engineer",
      period: "November 2024 – Current",
      description:
        "Contributing to enterprise-grade backend systems and scalable API services.",
      details: [
        "Architecting scalable API services handling 100K+ employees daily requests",
        "Implementing AI integration for recruitment module with CV parsing, ranking and auto-screening of applicants",
        "Developing secure data handling protocols for sensitive HR information",
      ],
    },
    {
      company: "Zercom Systems",
      role: "Technical Lead",
      period: "Apr 2023 – November 2024",
      description:
        "Led the upgrade and re-architecture of Tangerine LMS, an enterprise learning platform deployed across banking institutions in Nigeria.",
      details: [
        "Led the upgrade of Tangerine LMS to a multitenant Tangerine365, deploying to IIS on physical Windows Servers across 3 banking infrastructures and Apache2 servers on multiple VPS Ubuntu cloud instances (DigitalOcean droplets, AWS EC2)",
        "Developed cross-functional REST APIs, enabling seamless integration with 5+ external organizations, notably Human Manager HRMS, making the LMS a modular solution",
        "Introduced SQL Server support with a custom MSSQL driver alongside the default MySQL driver, expanding capabilities to 3 banks using MSSQL",
        "Implemented test proctoring and video conferencing modules using Jitsi Meet and Zoom",
        "Enhanced application performance with caching strategies (libcache, memcached) and improved load times via Gzip/Brotli compression for static files",
        "Conducted vulnerability and performance testing using ZAP and JMeter",
        "Contributed to Terminoxx360 (ATM monitoring platform) by optimizing DB performance through indexing and schema cleanup, troubleshooting job failures caused by DB locks, and implementing auto-restart mechanisms",
      ],
      stack:
        "PHP, Laravel, SQL Server, MySQL, JavaScript, Node.js, Memcached, DigitalOcean, IIS, Apache, Gzip/Brotli",
    },
    {
      company: "ScholarshipIQ",
      role: "Backend Engineer",
      period: "Jun 2022 – Apr 2023",
      description:
        "Built the backend infrastructure for an academic matching and funding platform.",
      details: [
        "Developed and deployed the backend service and REST APIs using PHP/Laravel and MySQL, integrating them seamlessly with the frontend ReactJS application.",
        "Enhanced system efficiency by implementing email verifications to eliminate ghost emails, achieving 50% faster API responses through database query optimization and indexing, and improved user management by integrating third-party libraries like HubSpot.",
        "Implemented version control practices, including branching strategies and staging environments, resulting in a reduction of production errors by over 90%.",
        "Automated email notifications and scheduling using cron jobs to enhance user engagement and system notifications, and integrated Flutterwave payment gateway.",
      ],
    },
    {
      company: "Bincom Dev Center",
      role: "Backend Developer",
      period: "Sep 2020 – Jul 2022",
      description:
        "Contributed to educational platforms like ARM Learn and internal API systems.",
      details: [
        "Integrated OAuth2 with Facebook and Google",
        "Participated in Agile teams using Scrum methodology",
        "Delivered backend components using Node.js and PHP",
        "Trained 5+ interns and helped organize technical community events",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A roadmap of roles, impact, and lessons learned along the way.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline spine */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-3 h-3 w-3 rounded-full bg-gray-900 dark:bg-white border-2 border-white dark:border-gray-950 shadow" />

                  {/* Connector subtle backdrop for hover effect */}
                  <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-3 h-3 w-3 rounded-full bg-gray-900/5 dark:bg-white/10 blur-sm" />

                  <div
                    className={
                      isLeft
                        ? "md:col-start-1 md:pr-10"
                        : "md:col-start-2 md:pl-10"
                    }
                  >
                    <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl">
                              {exp.role}
                            </CardTitle>
                            <CardDescription className="text-lg font-medium mt-1">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">
                          {exp.description}
                        </p>
                        {exp.details && (
                          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                            {exp.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        )}
                        {exp.stack && (
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                            <p className="text-sm font-medium">Tech Stack:</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {exp.stack}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
