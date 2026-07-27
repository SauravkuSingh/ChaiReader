import Link from "next/link";
import { GENRES } from "@/lib/data";

export function GenrePills() {
  return (
    <section aria-labelledby="genres-heading">
      <h2
        id="genres-heading"
        className="mb-3 font-heading text-lg font-bold text-foreground"
      >
        Dive into Different Genres
      </h2>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
        {GENRES.map((genre) => (
          <Link
            key={genre.slug}
            href={`/#${genre.slug}`}
            className="group relative flex h-15 w-40 shrink-0 items-center whitespace-nowrap overflow-hidden rounded-full px-7 text-sm font-semibold text-white shadow-sm transition-transform duration-200 "
            style={{
              backgroundImage: ` url(${genre.photo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="relative z-10 drop-shadow-sm">{genre.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}