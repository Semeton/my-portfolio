# Semeton Balogun Portfolio

A modern, minimalist portfolio website for Semeton Balogun, Backend Engineer. Built with Next.js, React, and Tailwind CSS, featuring a clean black and white design inspired by Apple's UI/UX aesthetic.

Live site: [https://semeton.xyz](https://semeton.xyz)

![Semeton Balogun Portfolio](/public/og-image.png)

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Light/Dark Mode**: System-preference detection with manual toggle option
- **Interactive Terminal**: Command-line interface to explore the portfolio
- **Modern Stack**: Built with Next.js 14, React, and Tailwind CSS
- **SEO Optimized**: Comprehensive metadata, structured data, and sitemap
- **Accessibility**: WCAG-compliant with proper semantic HTML and ARIA attributes
- **Performance**: Optimized for Core Web Vitals and fast loading

## Technologies

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## Project Structure

\`\`\`
semeton_portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap generator
│   └── robots.ts           # Robots.txt configuration
├── components/             # React components
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section with profile
│   ├── terminal.tsx        # Interactive terminal
│   ├── leadership.tsx      # Leadership & expertise section
│   ├── expertise.tsx       # Professional experience section
│   ├── projects.tsx        # Key projects section
│   ├── contact.tsx         # Contact information section
│   ├── footer.tsx          # Page footer
│   ├── theme-provider.tsx  # Dark/light mode provider
│   └── ui/                 # shadcn/ui components
├── hooks/                  # Custom React hooks
│   └── use-mobile.tsx      # Mobile detection hook
├── public/                 # Static assets
│   ├── images/             # Image assets
│   ├── favicon.ico         # Site favicon
│   ├── og-image.png        # Open Graph image
│   └── site.webmanifest    # PWA manifest
└── tailwind.config.ts      # Tailwind configuration
\`\`\`

## Professional Profile

### About

Semeton Balogun is a senior backend engineer with 5 years of experience architecting and scaling mission-critical systems for financial institutions, security platforms, and enterprise applications. Specializing in PHP (Laravel), Node.js, and distributed systems with a focus on security and scalability.

### Experience

- **Backend Engineer** at SeamlesHR (Current)
  - Architecting scalable API services handling 100K+ employees daily requests
  - Implementing AI integration for recruitment module with CV parsing and auto-screening of applicants
  - Developing secure data handling protocols for sensitive HR information

- **Technical Lead** at Zercom Systems (Apr 2023 – Sep 2024)
  - Led the re-architecture of Tangerine LMS, deployed across multiple banking institutions
  - Designed custom Laravel MSSQL driver enabling multi-bank support
  - Implemented CI/CD pipelines reducing deployment time by 70%

- **Backend Engineer** at ScholarshipIQ (Jun 2022 – Apr 2023)
  - Architected backend infrastructure for a nationwide academic funding platform
  - Boosted system performance by 50% through SQL optimization
  - Reduced production errors by 90% through staging workflows

- **Backend Developer** at Bincom Dev Center (Sep 2020 – Jul 2022)
  - Enhanced the ARM Learn Moodle web application by fixing 12 UAT-listed errors and integrating OAuth 2
  - Contributed to development of REST APIs in an Agile Scrum team
  - Facilitated training sessions for 5+ interns and community events with 30+ participants

### Key Projects

- **Trustcenta**: Enterprise Vulnerability Management Platform
- **Tangerine LMS**: Multi-Bank Learning Management System
- **Trustpass**: Security & ID Verification System

## Setup and Development

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/semeton/portfolio.git
   cd portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure the custom domain (semeton.xyz)
4. Deploy

For other hosting providers, build the project first:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

## SEO Information

The portfolio is optimized for search engines with:

- Comprehensive metadata
- Open Graph and Twitter Card tags
- JSON-LD structured data
- Dynamic sitemap
- Robots.txt configuration
- Semantic HTML structure
- Optimized image assets

## Contact

- **GitHub**: [github.com/semeton](https://github.com/semeton)
- **LinkedIn**: [linkedin.com/in/semetonbalogun](https://linkedin.com/in/semetonbalogun)
- **Resume**: [View Resume](https://docs.google.com/document/d/1NfYdtsJkmpsMdYHhVUiMH6Cd_hIFL0-scYoBItzEmZ4/edit?usp=sharing)

## License

MIT License

Copyright (c) 2025 Semeton Balogun

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
