import {
  Globe,
  Star,
  Crown,
  Medal,
  Briefcase,
  Monitor,
  Smile,
  BookMarked,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

/**
 * Primary sidebar navigation. Secondary items deep-link to the matching
 * section on the Browse/Home page (smooth-scroll anchors) so the nav is a
 * working flow rather than a set of dead links.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "Browse", href: "/", icon: Globe },
  { label: "New Arrivals", href: "/#new-arrivals", icon: Star },
  { label: "Best Sellers", href: "/#best-sellers", icon: Crown },
  { label: "Self help", href: "/#self-help", icon: Medal },
  { label: "Business", href: "/#business", icon: Briefcase },
  { label: "Tech", href: "/#tech-books", icon: Monitor },
  { label: "Kids", href: "/#kids", icon: Smile },
  { label: "Classics", href: "/#classics", icon: BookMarked },
];

export const SETTINGS_ITEM: NavItem = {
  label: "Settings",
  href: "/#settings",
  icon: Settings,
};
