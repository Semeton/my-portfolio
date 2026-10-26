import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title =
  "Semeton Balogun | Backend & Systems Engineer, Solutions Architecture";
const description =
  "Backend and systems engineer moving into solutions architecture. Multi-tenant platforms for banks and enterprise SaaS; offline-first data systems for national health campaigns. At Seamless Technologies and eGov Foundation (DIGIT).";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Semeton Balogun",
    "Software Engineer",
    "Backend Engineer",
    "Laravel",
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "Kafka",
    "Multi-tenant Architecture",
    "Systems Architecture",
    "Solutions Architecture",
    "Offline-first sync",
    "Data migration",
    "Production Debugging",
    "AI coding agents",
  ],
  authors: [{ name: "Semeton Balogun" }],
  creator: "Semeton Balogun",
  publisher: "Semeton Balogun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://semeton.xyz"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://semeton.xyz",
    title,
    description,
    siteName: "Semeton Balogun Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Semeton Balogun - Backend & Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
    creator: "@semetonbalogun",
  },
  icons: {
    icon: [{ url: "/icon-32.png", sizes: "32x32", type: "image/png" }],
    apple: "/icon-180.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Semeton Balogun",
              url: "https://semeton.xyz",
              jobTitle: "Backend & Systems Engineer",
              worksFor: [
                { "@type": "Organization", name: "Lawyering" },
                { "@type": "Organization", name: "Seamless Technologies" },
                { "@type": "Organization", name: "eGov Foundation" },
              ],
              sameAs: [
                "https://github.com/semeton",
                "https://www.linkedin.com/in/semetonbalogun/",
                "https://semeton.substack.com",
              ],
              description,
              knowsAbout: [
                "Backend Development",
                "Solutions Architecture",
                "System Architecture",
                "Multi-tenant Architecture",
                "PHP",
                "Laravel",
                "Node.js",
                "MySQL",
                "PostgreSQL",
                "Kafka",
                "Offline-first Sync",
                "Data Migration",
                "Production Debugging",
                "AI Coding Agent Governance",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
