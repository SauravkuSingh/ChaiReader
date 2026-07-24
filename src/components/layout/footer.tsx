import Link from "next/link";
import { Logo } from "./logo";

type FooterColumn = { title: string; links: string[] };

const COLUMNS: FooterColumn[] = [
  {
    title: "Quick Links",
    links: ["About", "Contact", "Home", "FAQ", "Support / Help Center"],
  },
  {
    title: "For Partners",
    links: ["For Authors", "For Publishers", "Become a Partner"],
  },
  {
    title: "Legal",
    links: ["Terms & Conditions", "Privacy Policy", "Cookie Policy"],
  },
];

export function Footer() {
  return (
    <footer id="settings" className="relative mt-14 overflow-hidden bg-[#f6f8ff]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 pb-28 pt-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Chai Reader is an AI-powered book commerce platform designed to
            transform how people discover and experience books—through reading,
            chatting with books, and more. It is owned and operated by Ailaysa
            Technologies Pvt Ltd.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* decorative wave */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0"
      >
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="h-20 w-full sm:h-24"
        >
          <path
            fill="#c7d2fe"
            fillOpacity="0.5"
            d="M0,96 C240,150 480,40 720,64 C960,88 1200,150 1440,96 L1440,160 L0,160 Z"
          />
          <path
            fill="#a5b4fc"
            fillOpacity="0.55"
            d="M0,120 C280,70 520,150 760,120 C1000,90 1220,130 1440,110 L1440,160 L0,160 Z"
          />
          <path
            fill="#818cf8"
            fillOpacity="0.6"
            d="M0,140 C300,110 560,160 820,138 C1080,116 1260,150 1440,134 L1440,160 L0,160 Z"
          />
        </svg>
      </div>
    </footer>
  );
}
