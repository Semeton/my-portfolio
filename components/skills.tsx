import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        "PHP (Laravel)",
        "JavaScript (ES6+)",
        "Node.js",
        "TypeScript",
        "SQL & Database Design",
      ],
    },
    {
      title: "Databases & ORMs",
      skills: [
        "MySQL",
        "PostgreSQL",
        "SQL Server",
        "Prisma ORM",
        "Eloquent ORM",
      ],
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        "Docker",
        "CI/CD Pipelines",
        "Git & GitHub",
        "Nginx & Apache",
        "Cloud Deployment",
      ],
    },
    {
      title: "Security & Performance",
      skills: [
        "OWASP ZAP",
        "Authentication & Authorization",
        "Performance Testing",
        "Caching Strategies",
        "API Security",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Core Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Essential technologies I use to build and deploy enterprise systems.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill}
                        </span>
                      </div>
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
