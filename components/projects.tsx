"use client";

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
    // {
    //   title: "VeriVault",
    //   subtitle: "End-to-End Zero Knowledge Proof Chatting Application",
    //   description:
    //     "End to end zero knowledge proof chatting application built with Laravel backend and React JS PWA. A side project focused on cybersecurity and online privacy.",
    //   highlights: [
    //     "End-to-end encrypted chatting with zero knowledge proof",
    //     "Secret-locked conversations with self-destruct capability",
    //     "Ability to purge all data and send encrypted emails",
    //     "Built as a progressive web app for privacy-focused communication",
    //   ],
    //   tech: ["Laravel", "React", "PWA", "Encryption", "Zero Knowledge Proof"],
    //   link: "https://app.encryptme.online",
    //   type: "built",
    // },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Key Projects Contributed to or Built
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Significant technical achievements that demonstrate my expertise in
            system architecture, security, and full-stack development.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors flex-shrink-0"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                      {project.subtitle}
                    </p>
                    <div className="flex items-center gap-3">
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

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                {/* Key Contributions */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white uppercase tracking-wide">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 4).map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-white mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                    {project.highlights.length > 4 && (
                      <li className="text-xs text-gray-500 dark:text-gray-500 italic">
                        +{project.highlights.length - 4} more contributions
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="px-2 py-1 text-xs font-normal bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50/0 via-gray-50/0 to-gray-50/0 group-hover:from-gray-50/10 group-hover:via-gray-50/5 group-hover:to-gray-50/0 transition-all duration-300 pointer-events-none"></div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 opacity-30 rounded-full -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
