"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SETTINGS_ITEM, type NavItem } from "@/lib/nav";
import { cn } from "@/lib/utils";

function NavLink({
  item,
  active,
  onNavigate,
}: {
  item: NavItem;
  active: boolean;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors duration-200",
        "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50",
        active && "bg-sidebar-accent text-sidebar-accent-foreground",
      )}
    >
      <Icon
        className={cn(
          "size-[18px] shrink-0 transition-transform duration-200 group-hover:scale-110",
          active ? "text-brand" : "text-sidebar-foreground/70",
        )}
        strokeWidth={2}
      />
      <span>{item.label}</span>
    </Link>
  );
}

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex flex-col gap-1">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.label}
          item={item}
          active={item.href === pathname}
          onNavigate={onNavigate}
        />
      ))}
      <div className="my-1 h-px bg-sidebar-border" />
      <NavLink
        item={SETTINGS_ITEM}
        active={SETTINGS_ITEM.href === pathname}
        onNavigate={onNavigate}
      />
    </nav>
  );
}
