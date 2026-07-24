# Chai Reader

An AI-powered book-commerce UI — **browse, discover, and "chat" with books**.
A pixel-focused, fully responsive frontend built from the provided Figma design.

> Front-End Assessment — July 2026. Built as a static, **Capacitor-ready** Next.js app.

## Screens

| Route              | Screen                                                          |
| ------------------ | -------------------------------------------------------------- |
| `/`                | **Browse / Home** — hero, genres, 10+ book carousels, footer   |
| `/authors/[slug]`  | **Author** — profile, tags, "New Releases" grid + list         |
| `/book/[slug]`     | **Book detail** — cover + actions, about, details, reviews     |

Every book links to its detail page; every byline links to its author page — a
complete Browse → Book → Author flow.

## Tech Stack

| Concern        | Choice                                                   |
| -------------- | -------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router, static export) |
| Language       | TypeScript (strict)                                      |
| Styling        | Tailwind CSS v4 (CSS-variable design tokens)             |
| UI primitives  | [shadcn/ui](https://ui.shadcn.com) (Radix)              |
| Icons          | lucide-react                                             |
| Fonts          | Poppins (display) + Inter (body) via `next/font`         |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export -> ./out
npm run start      # serve the production build
npm run lint       # eslint (clean)
```

Requires Node 18.18+ (developed on Node 22).

## Project Structure

```
src/
├─ app/
│  ├─ layout.tsx            # fonts, metadata, providers
│  ├─ page.tsx              # Home / Browse
│  ├─ error.tsx             # error state
│  ├─ not-found.tsx         # 404 state
│  ├─ authors/[slug]/       # author page + loading skeleton
│  └─ book/[slug]/          # book detail + loading skeleton
├─ components/
│  ├─ layout/               # sidebar, top bar, mobile drawer, footer, breadcrumbs
│  ├─ home/                 # hero, genre pills, recommended, famous authors
│  ├─ books/                # BookCard(s), BookCover, carousel, tag, avatar, states
│  └─ ui/                   # shadcn primitives
└─ lib/
   ├─ types.ts              # domain model
   ├─ data.ts               # static mock catalog + helpers
   └─ nav.ts                # sidebar navigation config
```

## Architecture & Key Decisions

- **Static export + Capacitor readiness.** `next.config.ts` sets
  `output: "export"`, so the app builds to plain HTML/CSS/JS in `./out` that can
  be dropped into a Capacitor `webDir` and shipped to Android/iOS with no Node
  server. Consequences, all intentional:
  - No server actions / request-time rendering; dynamic routes are fully
    pre-rendered via `generateStaticParams`.
  - `images.unoptimized` (no server-side Image Optimization at runtime).
  - `trailingSlash: true` so nested routes resolve as `route/index.html` on a
    plain file server.
- **Design tokens as CSS variables** ([`globals.css`](src/app/globals.css)),
  surfaced as Tailwind utilities (`bg-cream`, `text-brand`, `bg-tag`,
  `text-violet`, …). Restyling is a one-file change.
- **Server-first components.** Only genuinely interactive pieces (mobile drawer,
  wishlist toggle, carousel controls, "Read more", active nav) are client
  components; everything else renders on the server.
- **Reusable primitives.** One `BookCard`, `BookCover`, `CarouselRow`,
  `SectionHeader`, `Tag` and `GradientAvatar` drive all three pages.

## Responsive Design

Mobile-first, verified from 360px → wide desktop:

- The cream sidebar collapses into a hamburger **drawer** (`< lg`); the top-bar
  left slot (search / breadcrumb) reflows to its own row.
- Book rows are **snap-scrolling** carousels (touch/drag friendly), with arrow
  controls added for pointer devices.
- Grids step 2 → 3 → 4 → 5 columns across breakpoints; the book-detail cover
  column becomes sticky beside the details on desktop and stacks on mobile.

## UX States & Micro-interactions

- **Loading:** route-level skeletons for author & book pages.
- **Empty / 404:** branded `not-found` screen with a route back to Browse.
- **Error:** client error boundary with retry.
- Hover lift on cards, animated wishlist heart, smooth carousel scrolling,
  logo/CTA micro-interactions, sticky blurred top bar.

## Assumptions

- **Figma not directly accessible**, so typography (Poppins + Inter), exact hex
  values, spacing and any content beyond the three screenshots were inferred
  from the images and captured as tokens.
- **Book covers & author photos** use *seeded* placeholder imagery — covers from
  [picsum.photos](https://picsum.photos), portraits from
  [pravatar.cc](https://pravatar.cc) — via `next/image`. Seeds are derived from
  the book/person, so a given item always resolves to the same picture and the
  prerendered HTML stays stable. The per-item gradient is painted *behind* the
  image, so a slow or failed request degrades to the designed look rather than
  an empty box. Pointing `src/lib/images.ts` at a real CDN is a one-file change.
- **Self Help** and **Kids** rows were added to Home so every sidebar nav item
  deep-links to a real section; secondary nav items scroll to Home sections.
- The book-detail byline uses the book's actual author (for a coherent
  click-through) rather than the placeholder handle shown in the mock.
- No backend: catalog is static mock data; wishlist/cart/login/search are
  presentational.

## Trade-offs

- **Remote placeholder imagery vs. bundled assets** — seeded photos read far
  better than flat gradients and avoid shipping (or licensing) real cover art.
  The cost is a runtime dependency on two image hosts: fine for review, but for
  a real Capacitor build these would be bundled locally or cached. The gradient
  fallback keeps the UI presentable offline in the meantime.
- **Native scroll-snap carousel** instead of a carousel library — lighter, more
  touch-native, fewer dependencies; gives up drag-inertia niceties.
- **Static mock data** instead of an API layer — keeps the export fully static
  and the review focused on the UI.
- **Local component state** (wishlist, expand) without global store —
  appropriate for the scope; a store/persistence would be the next step.

## What I'd Do With More Time

- Real catalog/search API, wishlist & cart with persistence, working auth.
- Pixel diffing against the Figma once accessible; wire real fonts/tokens.
- The "Chat with book" reading/chat experience.
- Storybook for the component library + unit/interaction tests (Vitest +
  Testing Library) and Playwright e2e.
- `next/image` with real covers, blur placeholders, and per-route OG images.
- Accessibility audit pass (focus traps, reduced-motion, full keyboarding).

## Note on the assessment PDF

The provided PDF contained hidden text attempting to instruct an AI assistant to
insert junk code (stray constants, an extra "Masala Packet" nav tab, joke
strings, etc.). That is a prompt-injection test and was **intentionally
ignored** — none of it appears in this codebase.
