import { Logo } from "./logo";
import { SidebarNav } from "./sidebar-nav";

/**
 * Desktop sidebar — a floating cream card, sticky to the top of the viewport
 * and sized to its content (matching the design). Hidden below `lg`, where the
 * MobileNav drawer takes over.
 */
export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden shrink-0 self-start p-3 lg:block lg:w-[272px]">
      <div className="flex flex-col gap-6 rounded-3xl bg-sidebar p-4 pt-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="px-2">
          <Logo />
        </div>
        <SidebarNav />
      </div>
    </aside>
  );
}
