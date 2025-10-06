"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

export default function Terminal() {
  const [output, setOutput] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [location, setLocation] = useState<string | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Simulate typing effect with backend-focused commands
  useEffect(() => {
    const commands = [
      "whoami",
      "Semeton Balogun - Backend Engineer & Technical Lead",
      "backend --expertise",
      "PHP (Laravel), Node.js, System Architecture, Database Design, API Development",
      "architecture --show",
      "Multi-tenant systems, Microservices, REST APIs, GraphQL, Event-driven architecture",
      "database --skills",
      "MySQL, PostgreSQL, SQL Server, Redis, Database optimization, Query tuning",
      "security --focus",
      "OWASP compliance, Authentication, Authorization, Vulnerability scanning, Penetration testing",
      "devops --tools",
      "Docker, CI/CD, Git, AWS, Performance monitoring, Infrastructure as code",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < commands.length) {
        setOutput((prev) => [...prev, commands[i]]);
        i++;
      } else {
        clearInterval(interval);
        // After commands are done, try to get location
        fetchLocation();
      }
    }, 600);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchLocation = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      if (data.city && data.country_name) {
        setOutput((prev) => [
          ...prev,
          "location --current",
          `Visitor from ${data.city}, ${data.country_name}`,
        ]);
        setLocation(`${data.city}, ${data.country_name}`);
      }
    } catch (error) {
      setOutput((prev) => [
        ...prev,
        "location --current",
        "Location data unavailable",
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const command = currentCommand.trim();
      if (command) {
        let response =
          "Command not recognized. Type 'help' for available commands.";

        if (command === "clear") {
          setOutput([]);
          setCurrentCommand("");
          return;
        } else if (command === "help") {
          response =
            "Available commands: whoami, backend, architecture, database, security, devops, projects, experience, location, clear, help";
        } else if (command === "whoami") {
          response =
            "Semeton Balogun - Backend Engineer & Technical Lead. I architect and build scalable enterprise systems.";
        } else if (command === "backend") {
          response =
            "Core expertise: PHP (Laravel), Node.js, Python, System Architecture, API Development, Database Design, Performance Optimization";
        } else if (command === "architecture") {
          response =
            "I design: Multi-tenant systems, Microservices, Event-driven architecture, REST APIs, GraphQL, CQRS patterns, Domain-driven design";
        } else if (command === "database") {
          response =
            "Expertise: MySQL, PostgreSQL, SQL Server, Redis, Database optimization, Query tuning, Indexing strategies, Data modeling, ACID compliance";
        } else if (command === "security") {
          response =
            "Security focus: OWASP compliance, Authentication flows, Authorization systems, Vulnerability assessment, Penetration testing, Security audits";
        } else if (command === "devops") {
          response =
            "DevOps tools: Docker, Kubernetes, CI/CD pipelines, Git, AWS, Performance monitoring, Infrastructure as code, Automated testing";
        } else if (command === "projects") {
          response =
            "Enterprise projects: TrustCenta (security), Tangerine365 (LMS), Eventshores (platform), SkuleIQ (AI), and more. Check projects section!";
        } else if (command === "experience") {
          response =
            "5+ years building enterprise systems for banks, manufacturing companies, and large organizations. Led teams, architected solutions, optimized performance.";
        } else if (command === "location") {
          response = location
            ? `Visitor from ${location}`
            : "Location data unavailable";
        }

        setOutput((prev) => [...prev, `$ ${command}`, response]);
        setCurrentCommand("");
      }
    }
  };

  // Helper function to determine if a line is a command (starts with $)
  const isCommand = (line: string): boolean => {
    return typeof line === "string" && line.indexOf("$") === 0;
  };

  return (
    <Card className="border border-gray-200 dark:border-gray-800 bg-gray-900 text-gray-100 p-6 w-full max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
      <div className="flex items-center mb-4 pb-3 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm text-gray-400 font-mono">
          semeton@backend:~
        </div>
      </div>

      <div
        ref={terminalRef}
        className="font-mono text-sm h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
        onClick={focusInput}
      >
        {output.map((line, index) => (
          <div
            key={index}
            className={
              isCommand(line)
                ? "text-green-400 mt-3 font-semibold"
                : "text-gray-300 mb-2 leading-relaxed"
            }
          >
            {line}
          </div>
        ))}
        <div className="flex items-center mt-3">
          <span className="text-green-400 font-semibold">$ </span>
          <input
            ref={inputRef}
            type="text"
            className="ml-2 flex-1 bg-transparent outline-none border-none text-gray-100 placeholder-gray-500"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type a command (try 'help')"
          />
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500 text-center">
        Type <span className="text-gray-400 font-semibold">help</span> for
        available commands
      </div>
    </Card>
  );
}
