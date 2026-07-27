import type { Book } from "@/lib/types";
import { CarouselRow } from "./carousel-row";
import { BookCard } from "./book-card";
import { BookCardPoster } from "./book-card-poster";

/** A titled carousel of vertical book cards (Home rows, "You might also like"). */
export function BookCarousel({
  title,
  subtitle,
  id,
  books,
  cta,
  headerSize = "md",
}: {
  title: string;
  subtitle?: string;
  id?: string;
  books: Book[];
  cta?: string;
  headerSize?: "md" | "lg";
}) {
  return (
    <CarouselRow
      title={title}
      subtitle={subtitle}
      id={id}
      headerSize={headerSize}
    >
      {books.map((book) => (
  <div
    key={book.id}
    className="w-[150px] shrink-0 snap-start sm:w-[176px] lg:w-[190px]"
  >
    {id === "new-arrivals" ? (
      <BookCardPoster book={book} />
    ) : (
      <BookCard book={book} cta={cta} />
    )}
  </div>
))}
    </CarouselRow>
  );
}
