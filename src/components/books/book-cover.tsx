import Image from "next/image";
import type { Book } from "@/lib/types";
import { bookCoverUrl } from "@/lib/images";
import { cn } from "@/lib/utils";

type CoverData = Pick<Book, "title" | "author" | "cover"> &
  Partial<Pick<Book, "slug">>;

/**
 * Book cover: a seeded photograph with the title/author set over it like a
 * jacket. The per-book gradient stays behind the image as a fallback, so a
 * slow or failed request still renders the original designed look.
 */
export function BookCover({
  book,
  className,
  sizes = "(max-width: 640px) 45vw, 200px",
  priority = false,
}: {
  book: CoverData;
  className?: string;
  sizes?: string;
  priority?: boolean;
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
      <Image
        src={bookCoverUrl(book.slug ?? book.title)}
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />

      {/* spine */}
      <div className="absolute inset-y-0 left-0 z-10 w-1.5 bg-black/30" />
      {/* scrim keeps the title legible over any photo */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

      <div className="relative z-20 flex h-full flex-col justify-between p-3 pl-4 text-white">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 drop-shadow-sm">
          {book.author}
        </span>
        <span className="font-heading text-[15px] font-bold leading-tight drop-shadow-md line-clamp-4">
          {book.title}
        </span>
      </div>
    </div>
  );
}
