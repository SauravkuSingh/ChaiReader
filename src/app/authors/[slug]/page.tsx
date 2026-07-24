import type { Metadata } from "next";
import { AppShell } from "@/components/layout/app-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Footer } from "@/components/layout/footer";
import { GradientAvatar } from "@/components/books/gradient-avatar";
import { Tag } from "@/components/books/tag";
import { SectionHeader } from "@/components/books/section-header";
import { BookCard } from "@/components/books/book-card";
import { BookCardHorizontal } from "@/components/books/book-card-horizontal";
import {
  getAllAuthorSlugs,
  getAuthorReleases,
  resolveAuthor,
} from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllAuthorSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = resolveAuthor(slug);
  return {
    title: `${author.name} — Chai Reader`,
    description: author.bio,
  };
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = resolveAuthor(slug);
  const releases = getAuthorReleases(slug, 10);
  const moreReleases = getAuthorReleases(slug, 6);

  return (
    <AppShell
      header={
        <Breadcrumbs
          items={[
            { label: "Browse", href: "/" },
            { label: "Authors", href: "/" },
            { label: author.name },
          ]}
        />
      }
      footer={<Footer />}
    >
      <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Author profile */}
        <header className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
          <GradientAvatar
            name={author.name}
            colors={author.portrait}
            shape="rounded"
            className="size-28 text-3xl shadow-sm sm:size-40 sm:text-4xl"
          />
          <div className="min-w-0 flex-1">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {author.name}
            </h1>
            <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {author.bio}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {author.tags.map((tag, i) => (
                <Tag key={`${tag}-${i}`}>{tag}</Tag>
              ))}
            </div>
          </div>
        </header>

        {/* New releases — grid */}
        <section className="mt-12">
          <SectionHeader
            size="lg"
            title="Our New Releases"
            subtitle="Trending books among readers"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {releases.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* New releases — horizontal cards */}
        <section className="mt-14">
          <SectionHeader
            size="lg"
            title="Our New Releases"
            subtitle="Trending books among readers"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {moreReleases.map((book, i) => (
              <BookCardHorizontal key={`${book.id}-${i}`} book={book} />
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
