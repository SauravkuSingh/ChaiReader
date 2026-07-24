"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Paragraph with a "Read more" / "Read less" toggle. Pass the clamp as a
 * literal class (e.g. "line-clamp-4") so Tailwind can see it.
 */
export function ExpandableText({
  text,
  clampClassName = "line-clamp-4",
  className,
  withChevron = false,
}: {
  text: string;
  clampClassName?: string;
  className?: string;
  withChevron?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <p
        className={cn(
          "text-sm leading-relaxed text-muted-foreground",
          !open && clampClassName,
        )}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand/80"
      >
        {open ? "Read less" : "Read more"}
        {withChevron ? (
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        ) : null}
      </button>
    </div>
  );
}
