export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorSlug: string;
  /** Two-stop gradient used by the placeholder cover art. */
  cover: [string, string];
  description: string;
  tags: string[];
  /** Product details (book detail page). */
  publisher: string;
  publicationDate: string;
  language: string;
  pages: number;
};

export type Author = {
  slug: string;
  name: string;
  bio: string;
  tags: string[];
  /** Two-stop gradient used by the placeholder portrait. */
  portrait: [string, string];
};

export type Review = {
  id: string;
  name: string;
  text: string;
  avatar: [string, string];
};

export type Genre = {
  label: string;
  slug: string;
  image: [string, string];
};

/** A titled, horizontally-scrolling row of books on the Home page. */
export type BookSection = {
  id: string;
  title: string;
  subtitle: string;
  books: Book[];
};
