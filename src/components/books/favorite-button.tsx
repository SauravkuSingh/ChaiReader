"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Wishlist toggle. Purely local state (no persistence layer in this demo) but
 * fully interactive with an animated fill + pop on activation.
 */
export function FavoriteButton({
  className,
  defaultActive = false,
  size = "md",
  variant = "floating",
}: {
  className?: string;
  defaultActive?: boolean;
  size?: "sm" | "md";
  variant?: "floating" | "outline";
}) {
  const [active, setActive] = useState(defaultActive);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      onClick={(e) => {
        e.preventDefault();
        setActive((a) => !a);
      }}
      className={cn(
        "grid place-items-center transition-transform duration-200 hover:scale-110 active:scale-90 ",
        variant === "floating"
          ? "rounded bg-background/90 shadow-sm backdrop-blur  "
          : "rounded-xl border border-border bg-background",
        variant === "outline"
          ? "size-11"
          : size === "md"
            ? "size-8"
            : "size-7",
        className,
      )}
    >
      <Heart
  className={cn(
    "transition-all duration-200",
    variant === "outline" ? "size-5" : size === "md" ? "size-4" : "size-3.5",
    active
      ? "scale-110 fill-red-500 text-red-500"
      : "text-red-500 fill-transparent"
  )}
  strokeWidth={2}
/>
    </button>
  );
}
