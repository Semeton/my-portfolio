import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        "PHP (Laravel)",
        "JavaScript (ES6+)",
        "Node.js",
        "SQL",
        "HTML/CSS",
        "Bash scripting",
        "TypeScript (basic to intermediate)",
      ],
    },
    {
      title: "Database & ORM",
      skills: ["MySQL", "PostgreSQL", "SQL Server", "Prisma ORM", "Eloquent ORM", "Raw SQL optimization", "Indexing"],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Docker",
        "Git, GitHub, Bitbucket",
        "Nginx, Apache2, IIS",
        "CI/CD pipelines",
        "GitHub Actions",
        "DigitalOcean droplets",
        "JMeter (performance testing)",
        "OWASP ZAP (security testing)",
      ],
    },
    {
      title: "Security & Performance",
      skills: [
        "ZAP-based automated scanning",
        "Caching with libcache, Memcached",
        "Compression with Gzip, Brotli",
        "Authentication flows: OAuth2, JWT, session-based",
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Technical Skill Set</h2>
          <p className="text-gray-600 dark:text-gray-400">My toolkit for building robust, scalable backend systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="mr-2 text-black dark:text-white">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
