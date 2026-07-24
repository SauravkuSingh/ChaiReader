import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function SearchBar({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full max-w-xl", className)}>
      <Search className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        placeholder="Search book title or author..."
        aria-label="Search books"
        className="h-11 w-full rounded-full border border-input bg-muted/40 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand/40 focus:bg-background focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}
