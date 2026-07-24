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
            className="group relative flex h-12 shrink-0 items-center overflow-hidden rounded-full px-7 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.04]"
            style={{
              backgroundImage: `linear-gradient(135deg, ${genre.image[0]}, ${genre.image[1]})`,
            }}
          >
            <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
            <span className="relative z-10 drop-shadow-sm">{genre.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
