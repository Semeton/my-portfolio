"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

export default function Terminal() {
  const [output, setOutput] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [location, setLocation] = useState<string | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Simulate typing effect
  useEffect(() => {
    const commands = [
      "whoami",
      "Semeton Balogun",
      "skills --top",
      "PHP (Laravel) | Node.js | System Architecture | Security",
      "projects --count",
      "5 major projects completed",
      "experience --years",
      "5 years of professional experience",
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
    }, 500);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
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
        let response = "Command not recognized";

        if (command === "clear") {
          setOutput([]);
          setCurrentCommand("");
          return;
        } else if (command === "help") {
          response =
            "Available commands: whoami, skills, projects, experience, location, clear, help";
        } else if (command === "whoami") {
          response = "Semeton Balogun - Backend Engineer & Technical Lead";
        } else if (command === "skills") {
          response =
            "PHP (Laravel) | Node.js | System Architecture | Security | Docker | CI/CD";
        } else if (command === "projects") {
          response =
            "Trustcenta | Tangerine LMS | Trustpass | ScholarshipIQ | Verivault";
        } else if (command === "experience") {
          response =
            "5 years of professional experience in backend development and technical leadership";
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
    <Card className="border border-gray-200 dark:border-gray-800 bg-gray-900 text-gray-100 p-4 w-full max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center mb-2 pb-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm text-gray-400">semeton@portfolio:~</div>
      </div>

      <div
        ref={terminalRef}
        className="font-mono text-sm h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
        onClick={focusInput}
      >
        {output.map((line, index) => (
          <div
            key={index}
            className={
              isCommand(line) ? "text-green-400 mt-2" : "text-gray-300 mb-1"
            }
          >
            {line}
          </div>
        ))}
        <div className="flex items-center mt-2">
          <span className="text-green-400">$ </span>
          <span className="ml-1">{currentCommand}</span>
          <span
            className={`ml-0.5 w-2 h-4 bg-gray-300 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
          ></span>
        </div>
      </div>

      <input
        type="text"
        ref={inputRef}
        className="sr-only"
        value={currentCommand}
        onChange={(e) => setCurrentCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />

      <div className="mt-2 text-xs text-gray-500">
        Type <span className="text-gray-400 font-semibold">help</span> for
        available commands
      </div>
    </Card>
  );
}
