import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { BookCover } from "@/components/books/book-cover";
import { FavoriteButton } from "@/components/books/favorite-button";
import { Tag } from "@/components/books/tag";
import { ExpandableText } from "@/components/books/expandable-text";
import { GradientAvatar } from "@/components/books/gradient-avatar";
import { BookCarousel } from "@/components/books/book-carousel";
import {
  BOOKS,
  REVIEWS,
  getBook,
  getRelatedBooks,
  resolveAuthor,
} from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return BOOKS.map((book) => ({ slug: book.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return { title: "Book not found — Chai Reader" };
  return {
    title: `${book.title} by ${book.author} — Chai Reader`,
    description: book.description.slice(0, 160),
  };
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
      <dt className="font-semibold text-foreground">{label} :</dt>
      <dd className="text-muted-foreground">{value}</dd>
    </div>
  );
}

export default async function BookPage({ params }: PageProps) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const author = resolveAuthor(book.authorSlug);
  const related = getRelatedBooks(book, 8);
  const authorHref = `/authors/${author.slug}`;

  return (
    <AppShell
      header={
        <Breadcrumbs
          items={[{ label: "Browse", href: "/" }, { label: book.title }]}
        />
      }
      footer={<Footer />}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* Cover + actions */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mx-auto w-52 sm:w-64 lg:w-full lg:max-w-[300px]">
              <BookCover book={book} className="rounded-xl shadow-xl shadow-black/15" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-11 rounded-lg font-medium">
                  Read
                </Button>
                <Button className="h-11 rounded-lg font-medium">Chat Now</Button>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-[40px] sm:leading-tight">
                  {book.title}
                </h1>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Written by :{" "}
                  <Link
                    href={authorHref}
                    className="font-medium text-foreground transition-colors hover:text-brand"
                  >
                    {author.name}
                  </Link>
                </p>
              </div>
              <FavoriteButton variant="outline" className="mt-1 shrink-0" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {book.tags.map((tag, i) => (
                <Tag key={`${tag}-${i}`}>{tag}</Tag>
              ))}
            </div>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">
                About the Book
              </h2>
              <ExpandableText
                className="mt-3"
                text={book.description}
                clampClassName="line-clamp-4"
              />
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">
                Product Details
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <DetailRow label="Publisher" value={book.publisher} />
                <DetailRow label="Publication date" value={book.publicationDate} />
                <DetailRow label="Language" value={book.language} />
                <DetailRow label="Print length" value={`${book.pages} pages`} />
              </dl>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">
                About the Author
              </h2>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Link href={authorHref} className="shrink-0">
                  <GradientAvatar
                    name={author.name}
                    colors={author.portrait}
                    shape="rounded"
                    className="size-24 text-2xl shadow-sm transition-transform hover:scale-[1.03] sm:size-28"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link
                    href={authorHref}
                    className="font-heading text-lg font-bold text-violet hover:underline"
                  >
                    {author.name}
                  </Link>
                  <ExpandableText
                    className="mt-2"
                    withChevron
                    text={`${author.bio} ${author.bio}`}
                    clampClassName="line-clamp-3"
                  />
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">
                Reviews
              </h2>
              <div className="mt-5 space-y-6">
                {REVIEWS.map((review) => (
                  <article key={review.id} className="flex gap-3">
                    <GradientAvatar
                      name={review.name}
                      colors={review.avatar}
                      className="size-9 text-xs"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        {review.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {review.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <BookCarousel title="You might also like" books={related} />
            </section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
