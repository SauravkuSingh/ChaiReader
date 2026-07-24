/**
 * Remote placeholder imagery.
 *
 * Both helpers are *seeded* so a given book/person always resolves to the same
 * picture — important for static generation (the prerendered HTML must match
 * what the client renders) and so covers don't reshuffle between navigations.
 *
 * The per-item gradient is still painted behind the image, so a failed or slow
 * request degrades to the original designed look rather than an empty box.
 */

const seedOf = (seed: string) =>
  encodeURIComponent(seed.trim().toLowerCase().replace(/\s+/g, "-"));

/** Photographic cover art, 3:4 to match the jacket aspect ratio. */
export function bookCoverUrl(seed: string, width = 400, height = 533): string {
  return `https://picsum.photos/seed/${seedOf(seed)}/${width}/${height}`;
}

/** Portrait/face imagery for authors and reviewers. */
export function portraitUrl(seed: string, size = 400): string {
  return `https://i.pravatar.cc/${size}?u=${seedOf(seed)}`;
}
