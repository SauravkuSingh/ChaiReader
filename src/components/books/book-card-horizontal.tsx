import Link from "next/link";
import type { Book } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookCover } from "./book-cover";

/**
 * Horizontal book card — small cover beside title, blurb and CTA. Used in the
 * author page's "New Releases" list.
 */
export function BookCardHorizontal({
  book,
  className,
}: {
  book: Book;
  className?: string;
}) {
  const href = `/book/${book.slug}`;
  return (
    <article
      className={cn(
        "group flex gap-4 rounded-2xl border border-border bg-card p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/[0.05]",
        className,
      )}
    >
      <Link
        href={href}
        aria-label={book.title}
        className="w-[110px] shrink-0 self-start"
      >
        <BookCover
          book={book}
          className="shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex min-w-0 flex-col">
        <h3 className="line-clamp-1 text-sm font-semibold text-foreground">
          <Link href={href} className="hover:text-brand">
            {book.title}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
          {book.description}
        </p>
        <Button
          asChild
          className="mt-3 h-9 w-full rounded-lg text-[13px] font-medium"
        >
          <Link href={href}>Read &amp; Chat</Link>
        </Button>
      </div>
    </article>
  );
}
