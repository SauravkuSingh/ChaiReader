import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCover } from "@/components/books/book-cover";
import { getBook } from "@/lib/data";

export function HeroBanner() {
  const featured = getBook("tales-from-indian-classics");

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-amber-50 via-orange-50/50 to-sky-50 px-6 py-8 sm:px-10 sm:py-11">
      {/* soft decorative glows */}
      <div className="pointer-events-none absolute -left-16 -top-20 size-56 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-24 size-56 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative z-10 max-w-xl">
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-[32px] sm:leading-tight">
          The Echo of our Silent Pages
        </h1>
        <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-[15px]">
          A global publishing technology pavilion designed to run alongside
          major international book fairs.
        </p>
        <Button
          asChild
          variant="outline"
          className="group mt-6 h-11 rounded-full border-foreground/15 bg-background/70 px-6 font-medium backdrop-blur hover:bg-background"
        >
          <Link href="/#new-arrivals">
            Explore More
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {featured ? (
        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-white/50 blur-2xl" />
            <div className="w-36 rotate-6 lg:w-40">
              <BookCover book={featured} className="shadow-2xl shadow-black/20" />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
