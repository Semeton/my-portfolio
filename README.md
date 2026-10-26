# semeton.xyz

Personal site of Semeton Balogun, a backend and systems engineer moving into solutions architecture.

Live site: [https://semeton.xyz](https://semeton.xyz)

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`, built to `out/`)
- React 19, TypeScript
- Tailwind CSS 3 with theme tokens in [app/globals.css](app/globals.css); the accent colour is the `--brand` variable
- next-themes for light and dark mode
- Inter via `next/font`

## Pages

| Route | Source | Content |
|---|---|---|
| `/` | [app/page.tsx](app/page.tsx) | Intro, the four problem areas, a short work timeline, latest writing, elsewhere |
| `/work` | [app/work/page.tsx](app/work/page.tsx) | Full work history |
| `/projects/<slug>` | [app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx) | Case studies, written as Business goal / Context / Decisions / Result |
| `/about` | [app/about/page.tsx](app/about/page.tsx) | Background: nursing, design, the move into software |

## Where the content lives

| To change | Edit |
|---|---|
| Intro and header links | [components/hero.tsx](components/hero.tsx) |
| The four problem areas on the home page | [components/areas.tsx](components/areas.tsx) |
| Work history (home timeline and `/work`) | [components/experience.tsx](components/experience.tsx) |
| Case studies and shared essay links | [lib/case-studies.ts](lib/case-studies.ts) |
| Writing and Elsewhere lists | [components/writing.tsx](components/writing.tsx) |
| Background page | [components/background.tsx](components/background.tsx) |
| Page title, description, structured data | [app/layout.tsx](app/layout.tsx) |
| Sitemap | [app/sitemap.ts](app/sitemap.ts) (case-study URLs are generated from `lib/case-studies.ts`) |

Adding an entry to `caseStudies` in `lib/case-studies.ts` creates a new `/projects/<slug>` page and sitemap entry at build time.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

Stop `npm run dev` before running `npm run build`: both write to `.next/`, and running them together breaks the dev server until `.next/` is deleted.

## Deployment

The site is a static export deployed to GitHub Pages.

- `npm run deploy` builds the site and pushes `out/` to the `gh-pages` branch.
- A Pages workflow is also defined in [.github/workflows/setup-node/publish.yml](.github/workflows/setup-node/publish.yml). GitHub only runs workflow files placed directly in `.github/workflows/`, so it does not run from its current location.

## Images

- `public/og-image.png` is the 1200×630 social sharing image.
- Photos in `public/images/` are resized and have their EXIF/GPS metadata stripped before publishing.

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
