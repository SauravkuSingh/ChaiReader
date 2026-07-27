import Link from "next/link";
import type { Book } from "@/lib/types";
import { BookCover } from "./book-cover";

export function BookCardPoster({ book }: { book: Book }) {
  return (
    <Link
      href={`/book/${book.slug}`}
      aria-label={book.title}
      className="block w-[150px] shrink-0 snap-start sm:w-[180px] transition-transform duration-300 hover:-translate-y-1"
    >
      <BookCover
        book={book}
        sizes="(max-width: 640px) 150px, 180px"
        className="shadow-md shadow-black/10"
      />
    </Link>
  );
}