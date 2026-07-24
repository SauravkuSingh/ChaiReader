import type { Book } from "@/lib/types";
import { cn } from "@/lib/utils";

type CoverData = Pick<Book, "title" | "author" | "cover">;

/**
 * Placeholder cover art. Real cover images aren't part of the deliverable, so
 * covers are rendered from a per-book gradient with the title/author set like a
 * jacket. This keeps the app self-contained (no external image hosts) and
 * Capacitor-friendly. Swapping in <Image> later is a drop-in change.
 */
export function BookCover({
  book,
  className,
}: {
  book: CoverData;
  className?: string;
}) {
  const [from, to] = book.cover;
  return (
    <div
      className={cn(
        "relative aspect-[3/4] w-full overflow-hidden rounded-lg",
        className,
      )}
      style={{ backgroundImage: `linear-gradient(150deg, ${from}, ${to})` }}
      role="img"
      aria-label={`${book.title} by ${book.author}`}
    >
      {/* spine */}
      <div className="absolute inset-y-0 left-0 w-1.5 bg-black/25" />
      {/* light sweep + bottom vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-white/15" />
      <div className="flex h-full flex-col justify-between p-3 pl-4 text-white">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75 drop-shadow-sm">
          {book.author}
        </span>
        <span className="font-heading text-[15px] font-bold leading-tight drop-shadow line-clamp-4">
          {book.title}
        </span>
      </div>
    </div>
  );
}
