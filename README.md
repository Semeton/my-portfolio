# Semeton Balogun Portfolio

A modern, minimalist portfolio website for Semeton Balogun, Backend Engineer. Built with Next.js, React, and Tailwind CSS, featuring a clean black and white design inspired by Apple's UI/UX aesthetic.

Live site: [https://semeton.xyz](https://semeton.xyz)

![Semeton Balogun Portfolio](/public/og-image.png)

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Light/Dark Mode**: System-preference detection with manual toggle option
- **Modern Stack**: Built with Next.js 15, React 19, and Tailwind CSS
- **SEO Optimized**: Comprehensive metadata, structured data, and sitemap
- **Accessibility**: WCAG-compliant with proper semantic HTML and ARIA attributes
- **Performance**: Optimized for Core Web Vitals and fast loading

## Technologies

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
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
│   ├── hero.tsx            # Hero / about section
│   ├── experience.tsx      # Work experience section
│   ├── projects.tsx        # Key projects section
│   ├── writing.tsx         # Writing & media section
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

Semeton Balogun is a backend engineer working across banking, HR tech, and security platforms. Mostly PHP (Laravel) and Node.js, with a focus on multi-tenant systems and production debugging. See [components/hero.tsx](components/hero.tsx) for the current bio and [components/experience.tsx](components/experience.tsx) for the full work history — this section is a summary and can drift out of date.

### Experience

- **Backend Engineer** at SeamlessHR (Nov 2024 – present)
  - Backend for the AI-integrated recruitment module: CV parsing, candidate ranking, automated screening
  - Webhooks for the recruitment pipeline
  - Feature work across exit, onboarding, and employee confirmation modules

- **Technical Lead** at Zercom Systems (Apr 2023 – Nov 2024)
  - Rewrote a legacy PHP 7.4 LMS into Tangerine365, a multi-tenant platform deployed across three Nigerian banks
  - Built a custom MSSQL driver to support SQL Server banks alongside the MySQL default
  - Cut infrastructure costs ~85% through a VPS migration

- **Backend Engineer** at ScholarshipIQ (Jun 2022 – Apr 2023)
  - Backend and REST APIs for an academic matching and funding platform
  - Cut API response times ~50% through query optimization and indexing
  - Introduced staging environments and branching discipline, cutting the error rate reaching production

- **Backend Developer** at Bincom Dev Center (Sep 2020 – Jul 2022)
  - Backend components in Node.js and PHP across educational platforms (ARM Learn) and internal API systems
  - OAuth2 integrations with Google and Facebook
  - Trained interns and helped run technical community events

### Key Projects

- **Tangerine365** — multi-tenant LMS deployed across Wema Bank, First Bank, and FCMB
- **Terminoxx360** — real-time ATM monitoring for Access Bank Nigeria
- **TrustCenta** — estate access control (TrustPass) plus a cybersecurity suite wrapping ZAP and Gophish
- **Agent Contract** — npm CLI enforcing policy guardrails around AI coding agents

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
