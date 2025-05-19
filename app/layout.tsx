import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Semeton Balogun | Backend Engineer & Technical Lead",
  description:
    "Semeton Balogun is a senior backend engineer with 5 years of experience in PHP (Laravel), Node.js, and distributed systems, specializing in system architecture and security.",
  keywords: [
    "Semeton Balogun",
    "Backend Engineer",
    "PHP Developer",
    "Laravel Developer",
    "Node.js Developer",
    "Technical Lead",
    "System Architecture",
    "API Development",
    "Security Engineering",
    "Performance Optimization",
    "Nigeria Developer",
    "Software Engineer",
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
      "Semeton Balogun is a senior backend engineer with 5 years of experience in PHP (Laravel), Node.js, and distributed systems, specializing in system architecture and security.",
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
      "Semeton Balogun is a senior backend engineer with 5 years of experience in PHP (Laravel), Node.js, and distributed systems, specializing in system architecture and security.",
    images: ["/og-image.png"],
    creator: "@semetonbalogun",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.ico",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "verification_token",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
                name: "SeamlesHR",
              },
              sameAs: ["https://github.com/semeton", "https://www.linkedin.com/in/semetonbalogun/"],
              description:
                "Semeton Balogun is a senior backend engineer with 5 years of experience in PHP (Laravel), Node.js, and distributed systems, specializing in system architecture and security.",
              knowsAbout: [
                "Backend Development",
                "PHP",
                "Laravel",
                "Node.js",
                "System Architecture",
                "API Development",
                "Security Engineering",
                "Performance Optimization",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
