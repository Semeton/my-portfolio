import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      company: "SeamlesHR",
      role: "Backend Engineer",
      period: "Current Role",
      description: "Contributing to enterprise-grade backend systems and scalable API services.",
      details: ["Details will be shared once publicly available."],
    },
    {
      company: "Zercom Systems",
      role: "Technical Lead",
      period: "Apr 2023 – Sep 2024",
      description:
        "Led the upgrade and re-architecture of Tangerine LMS, an enterprise learning platform deployed across banking institutions in Nigeria.",
      details: [
        "Migrated monolithic PHP 7.4 codebase to modern PHP 8.1 and refactored frontend from ES5 to ES6",
        "Oversaw deployments to IIS (Windows) and Apache2 (Ubuntu/DigitalOcean)",
        "Designed and integrated a custom Laravel MSSQL driver for multi-bank support",
        "Developed new modules: test proctoring, gamification, and video conferencing",
        "Improved deployment efficiency with Git-based CI/CD pipelines, staging environments, and branch management",
        "Conducted vulnerability assessments using ZAP and stress testing via JMeter",
      ],
      stack: "PHP, Laravel, SQL Server, MySQL, JavaScript, Node.js, Memcached, DigitalOcean, IIS, Apache, Gzip/Brotli",
    },
    {
      company: "ScholarshipIQ",
      role: "Backend Engineer",
      period: "Jun 2022 – Apr 2023",
      description: "Built the backend infrastructure for a nationwide academic funding platform.",
      details: [
        "Developed robust RESTful APIs using Laravel and MySQL",
        "Integrated with ReactJS frontend and external services (Flutterwave, HubSpot)",
        "Boosted performance by 50% via SQL optimization and proper indexing",
        "Implemented secure user verification, cron-based scheduling, and automated email alerts",
        "Reduced production errors by 90% through staging workflows and code reviews",
      ],
    },
    {
      company: "Bincom Dev Center",
      role: "Backend Developer",
      period: "Sep 2020 – Jul 2022",
      description: "Contributed to educational platforms like ARM Learn and internal API systems.",
      details: [
        "Integrated OAuth2 with Facebook and Google",
        "Participated in Agile teams using Scrum methodology",
        "Delivered backend components using Node.js and PHP",
        "Trained 5+ interns and helped organize technical community events",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">
            My journey building scalable backend systems and leading technical teams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription className="text-lg font-medium mt-1">{exp.company}</CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{exp.description}</p>
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.stack}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
