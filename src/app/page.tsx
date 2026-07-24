import { BookOpen } from "lucide-react";

/**
 * Temporary landing placeholder — replaced by the full Browse/Home page in a
 * later step. Kept minimal but on-brand so the design tokens are verifiable.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="flex items-center gap-2 text-3xl font-semibold">
        <BookOpen className="size-8 text-brand" strokeWidth={2.25} />
        <span className="font-heading">
          <span className="text-foreground">Chai</span>{" "}
          <span className="text-brand">Reader</span>
        </span>
      </div>
      <p className="max-w-md text-muted-foreground">
        Read, chat &amp; discover books. The interface is being assembled
        piece&nbsp;by&nbsp;piece.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <span className="rounded-full bg-tag px-4 py-1.5 text-sm font-medium text-tag-foreground">
          Design system ready
        </span>
        <button className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95">
          Read &amp; Chat
        </button>
      </div>
    </main>
  );
}
