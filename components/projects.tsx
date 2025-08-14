import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Tangerine365 (formerly TangerineLMS)",
      subtitle: "Learning Management System for Major Nigerian Banks",
      description:
        "A complete rebuild of a legacy PHP 7.4 learning management system used by major Nigerian banks including Wema Bank, First Bank, and FCMB. The project demanded stripping down tightly coupled, outdated code into a modern, scalable PHP 8.* architecture.",
      highlights: [
        "Implemented core modules for user and course management",
        "Added integrated JitsiMeet video conferencing and exam proctoring system",
        "Built multi-tenancy framework with multi-database support via strategy patterns",
        "Reduced infrastructure costs by approximately 85% through Hostinger VPS migration",
        "Fully Dockerized application with centralized scheduler and CI/CD deployment scripts",
        "Handled security audits, LDAP and email integrations",
        "Provided architectural guidance to junior engineers throughout development",
      ],
      tech: ["PHP 8.*", "Laravel", "MySQL", "Docker", "JitsiMeet", "LDAP"],
      link: "https://tangerine365.com",
      type: "contributed",
    },
    {
      title: "Terminoxx360 (ATM Monitoring)",
      subtitle: "Real-time ATM Monitoring for Access Bank",
      description:
        "A Laravel-based real-time ATM monitoring application for Access Bank. My role spanned QA, engineering, and performance optimization.",
      highlights: [
        "Diagnosed and resolved transaction-heavy processes that intermittently stalled job execution",
        "Implemented index-based query optimizations and cleaned up redundant database structures",
        "Redesigned long-running jobs for transactional efficiency",
        "Added automatic restart mechanism to ensure continuous uptime",
        "Implemented job monitoring endpoints for operational visibility",
      ],
      tech: ["Laravel", "MySQL", "Redis", "Queue Jobs"],
      link: "https://atmapp.accessbankplc.com",
      type: "contributed",
    },
    {
      title: "TrustCenta",
      subtitle: "Digital Estate Access Control & Cybersecurity Suite",
      description:
        "I served as the sole engineer for two distinct but interconnected products. TrustPass is a digital estate access control system, while the Cybersecurity Suite combines vulnerability scanning, phishing simulations, and compliance tracking.",
      highlights: [
        "TrustPass: QR-based entry passes, granular role-based permissions, real-time revocation",
        "Web interface for administrators and mobile app for gate personnel and residents",
        "Cybersecurity Suite: vulnerability scanning (ZAPROXY), phishing simulations (Gophish)",
        "Domain verification, scheduled scans, automated email reporting",
        "Security training using Gophish tools and real-time Docker container monitoring",
      ],
      tech: [
        "Laravel",
        "React Native",
        "Next.js",
        "MySQL",
        "Docker",
        "Zaproxy",
        "Gophish",
      ],
      link: "https://trustcenta.com",
      type: "built",
    },
    {
      title: "Eventshores",
      subtitle: "Ticketing and Event Management Platform",
      description:
        "A ticketing and event management platform built with Laravel for the backend and React/Vite for the frontend.",
      highlights: [
        "Supports livestreaming of events",
        "Integrates Flutterwave and Stripe for payments in multiple currencies",
        "Provides organizers with real-time ticket sales dashboards",
        "Full-stack event management solution",
      ],
      tech: ["Laravel", "React", "Vite", "MySQL", "Flutterwave", "Stripe"],
      link: "https://eventshores.xyz",
      type: "built",
    },
    {
      title: "SkuleIQ",
      subtitle: "AI-Powered Progressive Web App for Secondary Education",
      description:
        "An AI-powered progressive web app built with Next.js for guided learning in secondary education. Unlike answer-delivery bots, SkuleIQ uses ChatGPT-style interaction to walk students through problem-solving processes.",
      highlights: [
        "ChatGPT-style interaction for guided problem-solving",
        "Tracks strengths and weaknesses over time",
        "Auto-generates targeted practice questions",
        "Maintains user progress profiles and supports multi-device access",
        "Progressive web app functionality",
      ],
      tech: ["Next.js", "React", "AI/ML", "PWA", "ChatGPT API", "PostgreSQL"],
      link: "https://app.skuleiq.com",
      type: "built",
    },
    {
      title: "WhiskNPuff",
      subtitle: "E-commerce Platform for Food Business",
      description:
        "A Stripe-integrated e-commerce platform for a growing food business. Customers can place and pay for orders online, track their order status, and view purchase history.",
      highlights: [
        "Stripe-integrated payment processing",
        "Online ordering and payment system",
        "Order tracking and purchase history",
        "Owner dashboard with customizable product listings",
        "Real-time sales reporting and order management",
      ],
      tech: ["Laravel", "React", "MySQL", "Stripe", "E-commerce"],
      link: "https://whisknpuffbites.com",
      type: "built",
    },
    {
      title: "VeriVault",
      subtitle: "End-to-End Zero Knowledge Proof Chatting Application",
      description:
        "End to end zero knowledge proof chatting application built with Laravel backend and React JS PWA. A side project focused on cybersecurity and online privacy.",
      highlights: [
        "End-to-end encrypted chatting with zero knowledge proof",
        "Secret-locked conversations with self-destruct capability",
        "Ability to purge all data and send encrypted emails",
        "Built as a progressive web app for privacy-focused communication",
      ],
      tech: ["Laravel", "React", "PWA", "Encryption", "Zero Knowledge Proof"],
      link: "https://app.encryptme.online",
      type: "built",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Key Projects Contributed to or Built
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Significant technical achievements that demonstrate my expertise in
            system architecture, security, and full-stack development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      {project.title}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </CardTitle>
                    <CardDescription className="text-lg mt-1">
                      {project.subtitle}
                    </CardDescription>
                    <div className="mt-2">
                      <Badge
                        variant={
                          project.type === "built" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {project.type === "built" ? "Built" : "Contributed"}
                      </Badge>
                    </div>
                  </div>
                </div>
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
                    <Badge key={i} variant="outline" className="font-normal">
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
