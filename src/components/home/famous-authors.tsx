import Link from "next/link";
import { CarouselRow } from "@/components/books/carousel-row";
import { GradientAvatar } from "@/components/books/gradient-avatar";

const FAMOUS: { name: string; colors: [string, string] }[] = [
  { name: "J.K Rowling", colors: ["#8a7f7a", "#5c534f"] },
  { name: "Chetan Bhagat", colors: ["#0ea5e9", "#1e3a8a"] },
  { name: "Ruskin Bond", colors: ["#f59e0b", "#b45309"] },
  { name: "Arundhati Roy", colors: ["#65a30d", "#365314"] },
  { name: "Ashwin Sanghi", colors: ["#7c3aed", "#4c1d95"] },
  { name: "Sudha Murty", colors: ["#be185d", "#831843"] },
  { name: "Amish Tripathi", colors: ["#0d9488", "#134e4a"] },
];

export function FamousAuthors() {
  return (
    <CarouselRow title="Famous Authors" id="famous-authors">
      {FAMOUS.map((author, i) => (
        <Link
          key={`${author.name}-${i}`}
          href="/authors/jk-rowling"
          className="group w-28 shrink-0 snap-start sm:w-[136px]"
          aria-label={author.name}
        >
          <GradientAvatar
            name={author.name}
            colors={author.colors}
            shape="rounded"
            className="aspect-[4/3] w-full text-xl shadow-sm transition-transform duration-300 group-hover:-translate-y-1"
          />
          <p className="mt-2 truncate text-center text-xs font-medium text-foreground/80 group-hover:text-brand">
            {author.name}
          </p>
        </Link>
      ))}
    </CarouselRow>
  );
}
