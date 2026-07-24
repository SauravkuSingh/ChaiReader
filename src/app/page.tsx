import { AppShell } from "@/components/layout/app-shell";
import { SearchBar } from "@/components/layout/search-bar";
import { Footer } from "@/components/layout/footer";
import { HeroBanner } from "@/components/home/hero-banner";
import { GenrePills } from "@/components/home/genre-pills";
import { RecommendedBanner } from "@/components/home/recommended-banner";
import { FamousAuthors } from "@/components/home/famous-authors";
import { BookCarousel } from "@/components/books/book-carousel";
import { HOME_SECTIONS, getBook } from "@/lib/data";
import type { Book } from "@/lib/types";

const sectionById = Object.fromEntries(HOME_SECTIONS.map((s) => [s.id, s]));

const speakWithAuthors = [
  "the-philosopher-s-stone",
  "fantastic-beasts",
  "the-casual-vacancy",
  "tales-from-indian-classics",
  "poet-empress",
  "the-past-is-rising",
]
  .map(getBook)
  .filter((b): b is Book => Boolean(b));

/** Sections rendered as standard book carousels. Self Help + Kids are added
 *  beyond the design so every sidebar nav anchor resolves to a section. */
type RowId =
  | "new-arrivals"
  | "best-sellers"
  | "self-help"
  | "crime-fiction"
  | "non-fiction"
  | "academics"
  | "kids"
  | "business"
  | "tech-books"
  | "classics";

function Row({ id }: { id: RowId }) {
  const section = sectionById[id];
  return (
    <BookCarousel
      id={section.id}
      title={section.title}
      subtitle={section.subtitle}
      books={section.books}
    />
  );
}

export default function Home() {
  return (
    <AppShell header={<SearchBar />}>
      <div className="mx-auto max-w-[1400px] space-y-11 px-4 py-6 sm:space-y-12 sm:px-6 lg:px-8">
        <HeroBanner />
        <GenrePills />

        <Row id="new-arrivals" />
        <RecommendedBanner />
        <Row id="best-sellers" />
        <Row id="self-help" />

        <BookCarousel
          id="speak-with-authors"
          title="Speak with Authors"
          subtitle="Trending books among readers"
          books={speakWithAuthors}
          cta="Chat with me"
        />

        <Row id="crime-fiction" />
        <Row id="non-fiction" />
        <FamousAuthors />
        <Row id="academics" />
        <Row id="kids" />
        <Row id="business" />
        <Row id="tech-books" />
        <Row id="classics" />
      </div>

      <Footer />
    </AppShell>
  );
}
