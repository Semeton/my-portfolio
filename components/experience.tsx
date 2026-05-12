export default function Experience() {
  const experiences = [
    {
      company: "SeamlessHR",
      role: "Backend Engineer",
      period: "Nov 2024 – present",
      description:
        "Backend services for a multi-tenant HRMS serving enterprise clients.",
      details: [
        "Built backend for the AI-integrated recruitment module: CV parsing, candidate ranking, automated screening",
        "Implemented webhooks for the recruitment pipeline",
        "Stabilizing and shipping features across exit, onboarding, and employee confirmation modules",
      ],
    },
    {
      company: "Zercom Systems",
      role: "Technical Lead",
      period: "Apr 2023 – Nov 2024",
      description:
        "Rewrote Tangerine LMS (PHP 7.4) into Tangerine365, a multi-tenant platform deployed across major Nigerian banks.",
      details: [
        "Re-architected the monolith into a multi-tenant, multi-database system using the strategy pattern — one codebase, MySQL and SQL Server running side by side",
        "Wrote a custom MSSQL driver to support three banks on SQL Server while preserving the MySQL default",
        "Deployed across IIS on Windows servers inside 3 bank environments and Apache on cloud for other tenants",
        "Cut infrastructure costs ~85% through VPS migration",
        "On Terminoxx360: diagnosed job stalls under database locks, rewrote long-running jobs, added auto-restart for continuous uptime",
      ],
      stack: "PHP 8 · Laravel · SQL Server · MySQL · Node.js · Memcached · Docker · IIS · Apache",
    },
    {
      company: "ScholarshipIQ",
      role: "Backend Engineer",
      period: "Jun 2022 – Apr 2023",
      description: "Built the backend for an academic matching and funding platform.",
      details: [
        "Backend services and REST APIs in Laravel, integrated with a React frontend",
        "Cut API response times ~50% through query optimization and indexing",
        "Introduced staging environments and branching discipline; cut the error rate reaching production significantly",
        "Integrated Flutterwave for payments, HubSpot for user management, and cron-driven email automation",
      ],
    },
    {
      company: "Bincom Dev Center",
      role: "Backend Developer",
      period: "Sep 2020 – Jul 2022",
      description:
        "First professional engineering role. Self-taught transition from a nursing background.",
      details: [
        "Backend components in Node.js and PHP across educational platforms (ARM Learn) and internal API systems",
        "OAuth2 integrations with Google and Facebook",
        "Trained 5+ interns; helped run technical community events",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white">
            Experience
          </h2>

          <div>
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-16 py-10">
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900 dark:text-white">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.role}</p>
                    <p className="text-xs font-mono text-gray-400 dark:text-gray-600 pt-0.5">
                      {exp.period}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>

                    {exp.details && (
                      <ul className="space-y-2">
                        {exp.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400"
                          >
                            <span className="text-gray-300 dark:text-gray-700 mt-0.5 flex-shrink-0">
                              —
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.stack && (
                      <p className="text-xs font-mono text-gray-400 dark:text-gray-600 pt-1">
                        {exp.stack}
                      </p>
                    )}
                  </div>
                </div>

                {index < experiences.length - 1 && (
                  <hr className="border-gray-100 dark:border-gray-900" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
