import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Expertise() {
  const experiences = [
    {
      company: "SeamlesHR",
      role: "Backend Engineer",
      period: "Current Role",
      description:
        "Contributing to enterprise HR systems used by major corporations across Africa.",
      highlights: [
        "Architecting scalable API services handling 50k+ employees daily requests",
        "Implementing AI integration for recruitment module with CV parsing and auto-screening of applicants",
        "Developing secure data handling protocols for sensitive HR information",
      ],
    },
    {
      company: "Zercom Systems",
      role: "Technical Lead",
      period: "Apr 2023 – Sep 2024",
      description:
        "Led the re-architecture of Tangerine LMS, deployed across multiple banking institutions in Nigeria.",
      highlights: [
        "Migrated legacy PHP 7.4 codebase to modern PHP 8.1 architecture",
        "Designed custom Laravel MSSQL driver enabling multi-bank support",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Conducted security audits and performance optimization",
      ],
      stack:
        "PHP, Laravel, SQL Server, MySQL, JavaScript, Node.js, Memcached, DigitalOcean, IIS, Apache",
    },
    {
      company: "ScholarshipIQ",
      role: "Backend Engineer",
      period: "Jun 2022 – Apr 2023",
      description:
        "Architected backend infrastructure for a rubust scholarship matching platform.",
      highlights: [
        "Designed RESTful API architecture with Laravel and MySQL",
        "Set up version control strategies, pipelines and handled deployments",
        "Boosted system performance by 50% through SQL optimization",
        "Reduced production errors by 90% through staging workflows",
      ],
    },
    {
      company: "Bincom Dev Center",
      role: "Backend Developer",
      period: "Sep 2020 – Jul 2022",
      description:
        "Contributed to educational platforms and API development in an Agile environment.",
      highlights: [
        "Enhanced the ARM Learn Moodle web application by fixing 12 UAT-listed errors and integrating OAuth 2 for Facebook and Google",
        "Contributed to development of REST APIs in an Agile Scrum team using PHP and Node.js",
        "Facilitated training sessions for 5+ interns and community events with 30+ participants",
      ],
      stack:
        "Node.js, PHP/Laravel, MySQL, REST APIs, Git/GitHub, CI/CD pipelines",
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Key roles where I've delivered significant technical impact and
            leadership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-800"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription className="text-lg font-medium mt-1">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 md:text-right">
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
                {exp.highlights && (
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
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
          ))}
        </div>
      </div>
    </section>
  );
}
