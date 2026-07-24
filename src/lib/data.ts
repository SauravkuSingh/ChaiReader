import type { Author, Book, BookSection, Genre, Review } from "./types";

/*
 * Static mock catalog. In production this would come from a catalog API; here
 * it's local data so the app is fully static-exportable. Cover/portrait art is
 * represented as gradient stops (see BookCover / placeholder components).
 */

const G = {
  midnight: ["#1e3a8a", "#0f172a"],
  ocean: ["#0ea5e9", "#1e3a8a"],
  ember: ["#f59e0b", "#b45309"],
  rose: ["#ec4899", "#7c2d12"],
  forest: ["#059669", "#064e3b"],
  plum: ["#7c3aed", "#4c1d95"],
  crimson: ["#dc2626", "#7f1d1d"],
  slate: ["#475569", "#1e293b"],
  teal: ["#0d9488", "#134e4a"],
  gold: ["#ca8a04", "#713f12"],
  berry: ["#be185d", "#831843"],
  sky: ["#38bdf8", "#0369a1"],
  sand: ["#d97706", "#92400e"],
  indigo: ["#4f46e5", "#312e81"],
  moss: ["#65a30d", "#365314"],
  wine: ["#9f1239", "#4c0519"],
} satisfies Record<string, [string, string]>;

type Seed = {
  title: string;
  author: string;
  authorSlug: string;
  cover: [string, string];
  tags?: string[];
  description?: string;
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const DEFAULT_TAGS = [
  "Classic",
  "Books to read",
  "Historical Fiction",
  "Historical Fiction",
  "Historical Fiction",
];

const DEFAULT_DESC =
  "A clash of armies, a battle of gods, and the rage of a hero fuel this epic tale of war. When a leader's pride ignites a conflict, the greatest warrior withdraws, leaving his comrades to face devastating losses. Explore a world of mighty heroes and bitter rivalries, where courage and honor are tested by fate.";

function makeBook(seed: Seed): Book {
  const slug = slugify(seed.title);
  return {
    id: slug,
    slug,
    title: seed.title,
    author: seed.author,
    authorSlug: seed.authorSlug,
    cover: seed.cover,
    description: seed.description ?? DEFAULT_DESC,
    tags: seed.tags ?? DEFAULT_TAGS,
    publisher: "Ailaysa",
    publicationDate: "21 December 2025",
    language: "English",
    pages: 160,
  };
}

const ROWLING = { author: "J.K Rowling", authorSlug: "jk-rowling" };
const HOUSEL = { author: "Morgan Housel", authorSlug: "morgan-housel" };

const SEEDS: Seed[] = [
  { title: "The Casual Vacancy", ...ROWLING, cover: G.ocean },
  { title: "The Hogwarts Library", ...ROWLING, cover: G.ember },
  { title: "Fantastic Beasts", ...ROWLING, cover: G.midnight },
  { title: "The Sorcerer's Stone", ...ROWLING, cover: G.ember },
  { title: "Prisoner of Azkaban", ...ROWLING, cover: G.ocean },
  { title: "Crimes of Grindelwald", ...ROWLING, cover: G.teal },
  { title: "The Ickabog", ...ROWLING, cover: G.forest },
  { title: "The Philosopher's Stone", ...ROWLING, cover: G.midnight },
  { title: "Order of the Phoenix", ...ROWLING, cover: G.berry },
  { title: "The Cursed Child", ...ROWLING, cover: G.gold },
  {
    title: "Death before Breakfast",
    ...ROWLING,
    cover: G.rose,
    description:
      "A clash of armies, a battle of gods, and the rage of a hero fuel this epic tale of war. When a leader's pride ignites a conflict, the greatest warrior withdraws, leaving his comrades to face devastating losses. Explore a world of mighty heroes and bitter rivalries, where courage and honor are tested by fate. Witness the brutal dance of battle, the clash of bronze, and the complex ties that bind even enemies. Can a prophecy alter the course of war, or is destiny set in stone?",
  },
  { title: "The Psychology of Money", ...HOUSEL, cover: G.slate },
  { title: "The Richest Man in Babylon", ...HOUSEL, cover: G.gold },
  { title: "Million to One", ...HOUSEL, cover: G.sand },
  { title: "I Know How the Story Ends", ...HOUSEL, cover: G.teal },
  { title: "Memory", author: "Bernard Kane", authorSlug: "bernard-kane", cover: G.slate },
  { title: "A Girl Named Harper", author: "Nate Jeffries", authorSlug: "nate-jeffries", cover: G.plum },
  { title: "Sherlock Mysteries", author: "A. Doyle", authorSlug: "a-doyle", cover: G.midnight },
  { title: "The Past is Rising", author: "Kathryn Bywaters", authorSlug: "kathryn-bywaters", cover: G.ocean },
  { title: "Battle for the King's Throne", author: "R. Storm", authorSlug: "r-storm", cover: G.crimson },
  { title: "The Promised Fate", author: "R. Storm", authorSlug: "r-storm", cover: G.plum },
  { title: "Pirate's Desire", author: "R. Storm", authorSlug: "r-storm", cover: G.wine },
  { title: "Why Women Don't Talk Money", author: "Nadia Park", authorSlug: "nadia-park", cover: G.ember },
  { title: "What if This is Grief", author: "Nadia Park", authorSlug: "nadia-park", cover: G.sky },
  { title: "The Universe and Dr Einstein", author: "Lincoln Barnett", authorSlug: "lincoln-barnett", cover: G.slate },
  { title: "The Rules We Live By", author: "Aarav Sharma", authorSlug: "aarav-sharma", cover: G.crimson },
  { title: "Sleeping Volcano", author: "Aarav Sharma", authorSlug: "aarav-sharma", cover: G.forest },
  { title: "Indian Polity", author: "M. Laxmikanth", authorSlug: "m-laxmikanth", cover: G.moss },
  { title: "UPSC Complete Guide", author: "Vision Press", authorSlug: "vision-press", cover: G.crimson },
  { title: "Physics for Everyone", author: "L. Landau", authorSlug: "l-landau", cover: G.teal },
  { title: "Learn English in 30 Days", author: "Skill Press", authorSlug: "skill-press", cover: G.gold },
  { title: "Start Your Own Business", author: "Rieva Lesonsky", authorSlug: "rieva-lesonsky", cover: G.crimson },
  { title: "International Business", author: "Charles Hill", authorSlug: "charles-hill", cover: G.sky },
  { title: "Indian Business Strategy", author: "Nirmalya Kumar", authorSlug: "nirmalya-kumar", cover: G.ocean },
  { title: "The Second-Best Business Book", author: "Ten Marks", authorSlug: "ten-marks", cover: G.sand },
  { title: "Tech Dot Com", author: "Aaron Rio", authorSlug: "aaron-rio", cover: G.crimson },
  { title: "Web Technology", author: "Uttam Roy", authorSlug: "uttam-roy", cover: G.ocean },
  { title: "ChatGPT for Beginners", author: "Priya Menon", authorSlug: "priya-menon", cover: G.berry },
  { title: "AI and ChatGPT in Education", author: "Priya Menon", authorSlug: "priya-menon", cover: G.plum },
  { title: "UI/UX Master Guide", author: "Design Co", authorSlug: "design-co", cover: G.sand },
  { title: "Tales from Indian Classics", author: "Vyasa", authorSlug: "vyasa", cover: G.ember },
  { title: "Poet Empress", author: "Meera Rao", authorSlug: "meera-rao", cover: G.wine },
  { title: "The Greatest Books of Ancient India", author: "Vyasa", authorSlug: "vyasa", cover: G.gold },
  { title: "Curtain Call", author: "Kate Searle", authorSlug: "kate-searle", cover: G.sky },
  { title: "Looking for Lala", author: "M. Iqbal", authorSlug: "m-iqbal", cover: G.indigo },
  { title: "Atomic Focus", author: "James Reed", authorSlug: "james-reed", cover: G.forest },
  { title: "The Power of Now", author: "E. Tolle", authorSlug: "e-tolle", cover: G.teal },
];

export const BOOKS: Book[] = SEEDS.map(makeBook);

const bySlug = new Map(BOOKS.map((b) => [b.slug, b]));
const pick = (...slugs: string[]) =>
  slugs.map((s) => bySlug.get(s)).filter((b): b is Book => Boolean(b));

/** Pad a curated list up to `count` books using other titles from the pool. */
function expand(seed: Book[], count: number): Book[] {
  if (seed.length >= count) return seed.slice(0, count);
  const seen = new Set(seed.map((b) => b.slug));
  const extras = BOOKS.filter((b) => !seen.has(b.slug));
  const result = [...seed];
  let i = 0;
  while (result.length < count && extras.length > 0) {
    result.push(extras[i % extras.length]);
    i++;
  }
  return result;
}

export const AUTHORS: Author[] = [
  {
    slug: "jk-rowling",
    name: "J.K Rowling",
    bio: "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world.",
    tags: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    portrait: ["#8a7f7a", "#5c534f"],
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Vinuja",
    text: "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world. British author best known for creating the Harry Potter.",
    avatar: ["#f59e0b", "#b45309"],
  },
  {
    id: "r2",
    name: "Vinuja",
    text: "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world. British author best known for creating the Harry Potter.",
    avatar: ["#ec4899", "#7c2d12"],
  },
];

export const GENRES: Genre[] = [
  { label: "People", slug: "people", image: G.sand },
  { label: "History", slug: "history", image: G.slate },
  { label: "Politics", slug: "politics", image: G.gold },
  { label: "Kids", slug: "kids", image: G.teal },
  { label: "Education", slug: "education", image: G.forest },
];

const RAW_SECTIONS: BookSection[] = [
  {
    id: "new-arrivals",
    title: "New Arrivals",
    subtitle: "Trending books among readers",
    books: pick(
      "memory",
      "sherlock-mysteries",
      "a-girl-named-harper",
      "the-sorcerer-s-stone",
      "death-before-breakfast",
      "the-casual-vacancy",
    ),
  },
  {
    id: "best-sellers",
    title: "Our Best Sellers",
    subtitle: "Trending books among readers",
    books: pick(
      "million-to-one",
      "the-richest-man-in-babylon",
      "i-know-how-the-story-ends",
      "memory",
      "a-girl-named-harper",
      "the-psychology-of-money",
    ),
  },
  {
    id: "self-help",
    title: "Self Help",
    subtitle: "Trending books among readers",
    books: pick(
      "the-psychology-of-money",
      "atomic-focus",
      "the-power-of-now",
      "why-women-don-t-talk-money",
      "what-if-this-is-grief",
    ),
  },
  {
    id: "crime-fiction",
    title: "Crime Fiction",
    subtitle: "Trending books among readers",
    books: pick(
      "the-past-is-rising",
      "battle-for-the-king-s-throne",
      "the-promised-fate",
      "pirate-s-desire",
      "sherlock-mysteries",
    ),
  },
  {
    id: "non-fiction",
    title: "Non Fiction Books",
    subtitle: "Trending books among readers",
    books: pick(
      "why-women-don-t-talk-money",
      "what-if-this-is-grief",
      "the-universe-and-dr-einstein",
      "the-rules-we-live-by",
      "sleeping-volcano",
    ),
  },
  {
    id: "academics",
    title: "Academics",
    subtitle: "Trending books among readers",
    books: pick(
      "indian-polity",
      "upsc-complete-guide",
      "physics-for-everyone",
      "the-power-of-now",
      "learn-english-in-30-days",
    ),
  },
  {
    id: "business",
    title: "Business",
    subtitle: "Trending books among readers",
    books: pick(
      "the-second-best-business-book",
      "international-business",
      "start-your-own-business",
      "indian-business-strategy",
      "the-richest-man-in-babylon",
    ),
  },
  {
    id: "tech-books",
    title: "Tech Books",
    subtitle: "Trending books among readers",
    books: pick(
      "tech-dot-com",
      "web-technology",
      "chatgpt-for-beginners",
      "ai-and-chatgpt-in-education",
      "ui-ux-master-guide",
    ),
  },
  {
    id: "kids",
    title: "Kids",
    subtitle: "Trending books among readers",
    books: pick(
      "the-ickabog",
      "the-sorcerer-s-stone",
      "curtain-call",
      "looking-for-lala",
      "a-girl-named-harper",
    ),
  },
  {
    id: "classics",
    title: "Classics",
    subtitle: "Trending books among readers",
    books: pick(
      "tales-from-indian-classics",
      "poet-empress",
      "the-greatest-books-of-ancient-india",
      "curtain-call",
      "a-girl-named-harper",
    ),
  },
];

/** Home rows, each padded to a fuller set of cards for scrolling. */
export const HOME_SECTIONS: BookSection[] = RAW_SECTIONS.map((section) => ({
  ...section,
  books: expand(section.books, 12),
}));

export const RECOMMENDED = pick(
  "looking-for-lala",
  "the-greatest-books-of-ancient-india",
  "curtain-call",
  "the-past-is-rising",
);

export function getBook(slug: string): Book | undefined {
  return bySlug.get(slug);
}

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}

export function getBooksByAuthor(slug: string): Book[] {
  return BOOKS.filter((b) => b.authorSlug === slug);
}

/** Simple "related" heuristic: other books sharing at least one tag. */
export function getRelatedBooks(book: Book, limit = 8): Book[] {
  return BOOKS.filter((b) => b.slug !== book.slug).slice(0, limit);
}

const GRADIENT_LIST = Object.values(G);

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function gradientFor(slug: string): [string, string] {
  return GRADIENT_LIST[hashString(slug) % GRADIENT_LIST.length];
}

const titleCase = (slug: string) =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

/** Every author slug referenced anywhere — used for static params. */
export function getAllAuthorSlugs(): string[] {
  return Array.from(
    new Set([...AUTHORS.map((a) => a.slug), ...BOOKS.map((b) => b.authorSlug)]),
  );
}

/**
 * Return a full author record. Authors without a hand-written profile (most
 * bylines) are synthesized from their books so every "by …" link resolves to a
 * real page instead of a 404.
 */
export function resolveAuthor(slug: string): Author {
  const known = getAuthor(slug);
  if (known) return known;

  const book = BOOKS.find((b) => b.authorSlug === slug);
  const name = book?.author ?? titleCase(slug);
  return {
    slug,
    name,
    bio: `${name} is a celebrated author featured on Chai Reader, with stories and ideas loved by readers around the world.`,
    tags: DEFAULT_TAGS,
    portrait: gradientFor(slug),
  };
}

/** An author's own books, padded with other titles to fill the grid. */
export function getAuthorReleases(slug: string, count = 10): Book[] {
  const own = getBooksByAuthor(slug);
  if (own.length >= count) return own.slice(0, count);
  const others = BOOKS.filter((b) => b.authorSlug !== slug);
  return [...own, ...others].slice(0, count);
}
