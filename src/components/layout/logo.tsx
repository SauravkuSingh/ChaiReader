import Link from "next/link";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Chai Reader home"
      className={cn(
        "group inline-flex items-center gap-2 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      <BookOpen
        className="size-7 text-brand transition-transform duration-300 group-hover:-rotate-6"
        strokeWidth={2.25}
      />
      <span className="font-heading">
        <span className="text-foreground">Chai</span>{" "}
        <span className="text-brand">Reader</span>
      </span>
    </Link>
  );
}
