# Chai Reader

An AI-powered book-commerce UI — browse, discover, and "chat" with books.
A pixel-focused, fully responsive frontend built from the provided Figma design.

> Front-End Assessment — July 2026. Built as a static, Capacitor-ready Next.js app.

## Tech Stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router)      |
| Language       | TypeScript                                         |
| Styling        | Tailwind CSS v4                                     |
| UI primitives  | [shadcn/ui](https://ui.shadcn.com) (Radix)         |
| Icons          | lucide-react                                        |
| Carousels      | embla-carousel                                     |
| Fonts          | Poppins (display) + Inter (body) via `next/font`   |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export -> ./out
npm run start      # serve the production build
npm run lint
```

## Architecture Notes

- **Static export (`output: "export"`).** The app builds to plain HTML/CSS/JS so
  it can be dropped straight into a Capacitor `webDir` for Android/iOS with no
  Node server. As a consequence the app avoids server-only features (server
  actions, request-time rendering) and uses unoptimized images.
- **Design tokens** live in [`src/app/globals.css`](src/app/globals.css) as CSS
  variables, surfaced as Tailwind utilities (`bg-cream`, `text-brand`,
  `bg-tag`, …). Colors were sampled from the design screenshots.
- **Light-first.** The design ships a single light theme; the app is styled for
  light. A `.dark` fallback exists but is not a design target.

## Assumptions

- The Figma file wasn't directly accessible, so typography (Poppins + Inter),
  exact hex values, and any content beyond the three provided screens were
  inferred from the screenshots and documented here.
- Book covers / author photos use generated placeholder art; in production these
  would come from a catalog API.

## Trade-offs & Future Work

_Documented as the build progresses — see the final section for the full list._

---

_This README is expanded as each part of the app is completed._
