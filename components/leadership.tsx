import { Card, CardContent } from "@/components/ui/card"
import { CodeIcon, UsersIcon, ShieldIcon, BarChartIcon } from "lucide-react"

export default function Leadership() {
  const leadershipAreas = [
    {
      title: "Technical Leadership",
      description:
        "Led cross-functional teams on enterprise deployments for learning management systems. Dockerized applications for easy development and deployment, established version control strategies, and managed deployment pipelines.",
      icon: <UsersIcon className="h-6 w-6" />,
    },
    {
      title: "System Architecture",
      description:
        "Designed scalable architectures for high-traffic applications, including custom MSSQL drivers for Tangerine LMS for multi-bank support and distributed systems for learning management. Architected multi-tenancy cloud-based solutions.",
      icon: <CodeIcon className="h-6 w-6" />,
    },
    {
      title: "Security Engineering",
      description:
        "Conducted comprehensive vulnerability assessments using ZAP for enterprise applications. Handled high-risk vulnerabilities for an ATM monitoring solution, implementing robust security protocols and automated scanning tools.",
      icon: <ShieldIcon className="h-6 w-6" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Boosted system performance by 50% through SQL optimization, caching strategies, and infrastructure improvements. Conducted stress testing with JMeter to ensure scalability.",
      icon: <BarChartIcon className="h-6 w-6" />,
    },
  ]

  return (
    <section id="leadership" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Leadership & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My approach combines technical excellence with strategic leadership to deliver robust, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leadershipAreas.map((area, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gray-100 dark:bg-gray-900 rounded-md">{area.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
