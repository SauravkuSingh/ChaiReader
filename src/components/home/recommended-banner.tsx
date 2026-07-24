import Link from "next/link";
import { BookCover } from "@/components/books/book-cover";
import { RECOMMENDED } from "@/lib/data";

export function RecommendedBanner() {
  return (
    <section
      id="recommended"
      className="scroll-mt-24 overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-r from-rose-50 via-orange-50/60 to-amber-50 p-6 sm:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        <div className="lg:max-w-xs">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            Recommended For You
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A global publishing technology pavilion designed to run alongside
            major international book fairs.
          </p>
        </div>

        <div className="no-scrollbar flex flex-1 gap-4 overflow-x-auto pb-1">
          {RECOMMENDED.map((book) => (
            <Link
              key={book.id}
              href={`/book/${book.slug}`}
              className="w-24 shrink-0 transition-transform duration-300 hover:-translate-y-1 sm:w-28"
              aria-label={book.title}
            >
              <BookCover book={book} className="shadow-md" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
