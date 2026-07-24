import { AppShell } from "@/components/layout/app-shell";
import { SearchBar } from "@/components/layout/search-bar";

/**
 * Temporary Home — verifies the layout shell. Replaced by the full Browse page
 * (hero, genres, book sections, footer) in a later step.
 */
export default function Home() {
  return (
    <AppShell header={<SearchBar />}>
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-dashed border-border p-10 text-center">
          <h1 className="font-heading text-2xl font-semibold">
            Layout shell ready
          </h1>
          <p className="mt-2 text-muted-foreground">
            Sidebar, top bar, search and mobile drawer are wired. Page content
            comes next.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
