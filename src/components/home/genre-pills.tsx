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
      <div className="no-scrollbar flex gap-2.5 overflow-x-auto pb-1 sm:gap-3">
        {GENRES.map((genre) => (
          <Link
            key={genre.slug}
            href={`/#${genre.slug}`}
            className="group relative flex h-11 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-semibold text-white shadow-sm transition-transform duration-200 sm:h-15 sm:w-40 sm:text-sm"
          >
            <div
              className="absolute inset-0 backdrop-blur-[1px]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${genre.photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span className="relative z-10 whitespace-nowrap px-3 text-center drop-shadow-sm sm:px-0">
              {genre.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}