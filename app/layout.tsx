import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Semeton Balogun | Backend Engineer & Technical Lead",
  description:
    "Backend engineer. Systems for banks and enterprise SaaS. Currently at SeamlessHR, previously led the Tangerine365 rewrite deployed across major Nigerian banks.",
  keywords: [
    "Semeton Balogun",
    "Backend Engineer",
    "Laravel",
    "NestJS",
    "PostgreSQL",
    "Distributed Systems",
    "Multi-tenant Architecture",
    "Systems Architecture",
    "Production Debugging",
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
    title: "Semeton Balogun | Backend Engineer & Technical Lead",
    description:
      "Backend engineer. Systems for banks and enterprise SaaS. Currently at SeamlessHR, previously led the Tangerine365 rewrite deployed across major Nigerian banks.",
    siteName: "Semeton Balogun Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Semeton Balogun - Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semeton Balogun | Backend Engineer & Technical Lead",
    description:
      "Backend engineer. Systems for banks and enterprise SaaS. Currently at SeamlessHR, previously led the Tangerine365 rewrite deployed across major Nigerian banks.",
    images: ["/og-image.png"],
    creator: "@semetonbalogun",
  },
  icons: {
    icon: "/favicon.ico",
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
              jobTitle: "Backend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "SeamlessHR",
              },
              sameAs: [
                "https://github.com/semeton",
                "https://www.linkedin.com/in/semetonbalogun/",
              ],
              description:
                "Backend engineer. Systems for banks and enterprise SaaS. Currently at SeamlessHR, previously led the Tangerine365 rewrite deployed across major Nigerian banks.",
              knowsAbout: [
                "Backend Development",
                "PHP",
                "Laravel",
                "Node.js",
                "System Architecture",
                "API Development",
                "Production Debugging",
                "Multi-tenant Architecture",
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
