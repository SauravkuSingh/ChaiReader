"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BookCover } from "@/components/books/book-cover";
import { getBook } from "@/lib/data";
import type { Book } from "@/lib/types";
import { cn } from "@/lib/utils";

type Banner = {
  id: string;
  title: string;
  description: string;
  theme: string;
  slugs: string[];
};

const BANNERS: Banner[] = [
  {
    id: "recommended-1",
    title: "Recommended For You",
    description:
      "A global publishing technology pavilion designed to run alongside major international book fairs.",
    theme: "from-rose-50 via-orange-50/60 to-amber-50",
    slugs: [
      "looking-for-lala",
      "the-greatest-books-of-ancient-india",
      "curtain-call",
      "the-past-is-rising",
    ],
  },
  {
    id: "recommended-2",
    title: "Editor's Picks",
    description:
      "Handpicked reads our editors are loving this season — fresh voices sitting beside timeless classics.",
    theme: "from-sky-50 via-indigo-50/60 to-blue-50",
    slugs: [
      "the-psychology-of-money",
      "atomic-focus",
      "the-power-of-now",
      "million-to-one",
    ],
  },
  {
    id: "recommended-3",
    title: "Fresh This Season",
    description:
      "Curated collections to match your mood, from deep dives to light, unputdownable escapes.",
    theme: "from-emerald-50 via-teal-50/60 to-green-50",
    slugs: [
      "tales-from-indian-classics",
      "poet-empress",
      "sleeping-volcano",
      "the-universe-and-dr-einstein",
    ],
  },
  {
    id: "recommended-4",
    title: "Popular Right Now",
    description:
      "The titles readers can't stop talking about — see what everyone is reading this week.",
    theme: "from-violet-50 via-purple-50/60 to-fuchsia-50",
    slugs: [
      "battle-for-the-king-s-throne",
      "the-promised-fate",
      "memory",
      "a-girl-named-harper",
    ],
  },
];

function BannerCard({ banner }: { banner: Banner }) {
  const books = banner.slugs
    .map(getBook)
    .filter((b): b is Book => Boolean(b));

  return (
    <article
      className={cn(
        "relative w-[86vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-r p-6 sm:w-[600px] sm:p-8 lg:w-[820px]",
        banner.theme,
      )}
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute -right-16 -top-20 size-52 rounded-full bg-white/40 blur-3xl" />

      <div className="relative grid gap-6 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            {banner.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {banner.description}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5">
          {books.map((book) => (
            <Link
              key={book.id}
              href={`/book/${book.slug}`}
              aria-label={book.title}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <BookCover book={book} className="shadow-md" />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

export function RecommendedCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
  }, [update]);

  const scrollNext = () => {
    const el = ref.current;
    if (!el) return;
    const next = atEnd ? -el.scrollWidth : el.clientWidth * 0.75;
    el.scrollBy({ left: next, behavior: "smooth" });
  };

  return (
    <section id="recommended" className="relative scroll-mt-24">
      <div
        ref={ref}
        onScroll={update}
        className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-1"
      >
        {BANNERS.map((banner) => (
          <BannerCard key={banner.id} banner={banner} />
        ))}
      </div>

      <button
        type="button"
        onClick={scrollNext}
        aria-label={atEnd ? "Back to start" : "Next recommendations"}
        className="absolute right-2 top-1/2 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 text-foreground/70 shadow-md backdrop-blur transition-all hover:border-brand/40 hover:text-brand sm:grid"
      >
        <ChevronRight
          className={cn(
            "size-5 transition-transform duration-300",
            atEnd && "rotate-180",
          )}
        />
      </button>
    </section>
  );
}
