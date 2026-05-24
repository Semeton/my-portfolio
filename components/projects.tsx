"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "Tangerine365",
    subtitle: "Multi-tenant LMS deployed across Wema Bank, First Bank, and FCMB.",
    description:
      "A full rewrite of a legacy PHP 7.4 LMS into a multi-tenant PHP 8 platform with per-tenant database isolation. The hard part was the multi-database strategy — keeping MySQL as default while supporting SQL Server for the banks that required it, without forking the codebase.",
    role: "Led",
    highlights: [
      "Designed the multi-tenancy layer using the strategy pattern; one codebase, multiple database drivers",
      "Wrote a custom MSSQL driver to support three banks on SQL Server while preserving the MySQL default",
      "Built core modules for user management, course delivery, and integrated Jitsi Meet proctoring",
      "Migrated infrastructure to Hostinger VPS — ~85% cost reduction",
      "Set up CI/CD across IIS (Windows Server) and Apache (Ubuntu) deployments",
    ],
    tech: ["PHP 8", "Laravel", "MySQL", "SQL Server", "Docker", "Jitsi Meet", "LDAP", "IIS"],
    link: "https://tangerine365.com",
  },
  {
    title: "Terminoxx360",
    subtitle: "Real-time ATM monitoring for Access Bank Nigeria.",
    description:
      "Laravel application monitoring ATM fleet health across Access Bank infrastructure. I own it end to end — codebase, deployments, and the stakeholder relationship.",
    role: "Sole engineer",
    highlights: [
      "Diagnosed transaction-heavy jobs stalling under database locks; rewrote them for transactional efficiency",
      "Added index-based query optimization and schema cleanup that cleared the persistent slow-query backlog",
      "Built auto-restart for stuck jobs to keep uptime continuous",
      "Manage the stakeholder relationship and release cycle directly",
    ],
    tech: ["Laravel", "MySQL", "Redis", "Queue workers"],
    link: "https://atmapp.accessbankplc.com",
  },
  {
    title: "TrustCenta",
    subtitle: "Two products: estate access control and a cybersecurity suite.",
    description:
      "TrustPass handles QR-based entry passes for digital estates — role-based permissions, real-time revocation, web dashboard and mobile app. The Cybersecurity Suite wraps ZAP and Gophish behind clean APIs with scheduled scans and automated reporting.",
    role: "Sole engineer",
    highlights: [
      "Designed and built both systems from scratch",
      "Web (Next.js) for administrators; React Native for gate personnel",
      "Wrapped ZAP and Gophish behind clean APIs with scheduled scans and automated email reports",
    ],
    tech: ["Laravel", "Next.js", "React Native", "MySQL", "Docker", "ZAP", "Gophish"],
    link: "https://trustcenta.com",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl p-7 space-y-4 bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-gray-300 dark:text-gray-600">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          {project.role}
        </span>
      </div>

      <div className="flex items-start gap-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
          {project.title}
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400 transition-colors mt-0.5 flex-shrink-0"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">{project.subtitle}</p>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
        {project.description}
      </p>

      <p className="text-xs font-mono text-gray-400 dark:text-gray-500">
        {project.tech.join(" · ")}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors pt-1 w-fit"
      >
        {expanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
        {expanded ? "Collapse" : "What I did"}
      </button>

      {expanded && (
        <ul className="space-y-2.5 border-t border-gray-100 dark:border-gray-800 pt-4">
          {project.highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-gray-300 dark:text-gray-600 mt-0.5 flex-shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Three projects. Each one a different kind of ownership.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
