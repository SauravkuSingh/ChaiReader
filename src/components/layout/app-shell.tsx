import { Sidebar } from "./sidebar";
import { TopBar } from "./top-bar";

/**
 * App layout: sticky cream sidebar (desktop) + a scrolling main column with a
 * sticky top bar. `header` is the top bar's left slot (breadcrumb or search).
 * Pages own their horizontal padding so full-bleed sections (hero, footer) can
 * opt out.
 */
export function AppShell({
  header,
  children,
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar>{header}</TopBar>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
