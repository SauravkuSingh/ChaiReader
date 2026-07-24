import Link from "next/link";
import type { Book } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookCover } from "./book-cover";
import { FavoriteButton } from "./favorite-button";

/**
 * Vertical book card — cover with wishlist toggle, title, author byline and a
 * "Read & Chat" CTA. Fills its container width; the parent (grid cell or
 * carousel item) controls sizing.
 */
export function BookCard({
  book,
  className,
  cta = "Read & Chat",
}: {
  book: Book;
  className?: string;
  cta?: string;
}) {
  const href = `/book/${book.slug}`;
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-card p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-xl hover:shadow-black/[0.06]",
        className,
      )}
    >
      <div className="relative">
        <Link href={href} aria-label={book.title}>
          <BookCover
            book={book}
            className="shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>
        <FavoriteButton className="absolute right-2 top-2" />
      </div>

      <div className="flex flex-1 flex-col px-1 pt-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-foreground">
          <Link href={href} className="hover:text-brand">
            {book.title}
          </Link>
        </h3>
        <p className="mt-0.5 text-xs text-muted-foreground">
          by{" "}
          <Link
            href={`/authors/${book.authorSlug}`}
            className="font-medium text-brand hover:underline"
          >
            {book.author}
          </Link>
        </p>
      </div>

      <Button
        asChild
        className="mt-3 h-9 w-full rounded-lg text-[13px] font-medium"
      >
        <Link href={href}>{cta}</Link>
      </Button>
    </article>
  );
}
