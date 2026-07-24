import { MobileNav } from "./mobile-nav";
import { Logo } from "./logo";
import { HeaderActions } from "./header-actions";

/**
 * Sticky top bar. The `children` slot holds the page-specific left content
 * (breadcrumb on inner pages, search bar on Home). On desktop it sits inline;
 * on mobile it drops to a full-width second row while the hamburger + logo
 * take the first row.
 */
export function TopBar({ children }: { children?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:pr-8 lg:pl-2">
        {/* Mobile: hamburger + logo */}
        <div className="flex items-center gap-1 lg:hidden">
          <MobileNav />
          <Logo className="text-lg" />
        </div>

        {/* Desktop: page-specific left slot */}
        {children ? (
          <div className="hidden min-w-0 flex-1 items-center lg:flex">
            {children}
          </div>
        ) : (
          <div className="hidden flex-1 lg:block" />
        )}

        {/* Mobile spacer pushes actions to the right */}
        <div className="flex-1 lg:hidden" />

        <HeaderActions />
      </div>

      {/* Mobile: page-specific slot on its own row */}
      {children ? (
        <div className="border-t border-border/50 px-4 py-2.5 sm:px-6 lg:hidden">
          {children}
        </div>
      ) : null}
    </header>
  );
}
