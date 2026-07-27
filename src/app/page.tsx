import { AppShell } from "@/components/layout/app-shell";
import { SearchBar } from "@/components/layout/search-bar";
import { Footer } from "@/components/layout/footer";
import { HeroBanner } from "@/components/home/hero-banner";
import { GenrePills } from "@/components/home/genre-pills";
import { RecommendedCarousel } from "@/components/home/recommended-carousel";
import { FamousAuthors } from "@/components/home/famous-authors";
import { BookCarousel } from "@/components/books/book-carousel";
import { HOME_SECTIONS, getBook } from "@/lib/data";
import type { Book } from "@/lib/types";

const sectionById = Object.fromEntries(HOME_SECTIONS.map((s) => [s.id, s]));

const speakWithAuthors = [
  "fantastic-beasts",
  "tales-from-indian-classics",
  "poet-empress",
  "curtain-call",
  "million-to-one",
  "the-past-is-rising",
  "the-casual-vacancy",
  "the-greatest-books-of-ancient-india",
  "sleeping-volcano",
  "looking-for-lala",
  "the-power-of-now",
  "pirate-s-desire",
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
    <AppShell header={<SearchBar />} footer={<Footer />}>
      <div className="mx-auto w-full max-w-screen-xl 2xl:max-w-[1600px] space-y-11 px-4 py-6 sm:space-y-12 sm:px-6 lg:px-8">
        <HeroBanner />
        <GenrePills />

        <Row id="new-arrivals" />
        <RecommendedCarousel />
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
    </AppShell>
  );
}
