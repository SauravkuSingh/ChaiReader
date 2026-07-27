"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";

function ArrowButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = dir === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
      className={cn(
        "grid size-8 place-items-center rounded-full border border-border bg-background text-foreground/70 transition-all",
        "hover:border-brand/40 hover:text-brand disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-foreground/70",
      )}
    >
      <Icon className="size-4" />
    </button>
  );
}

/**
 * Horizontal, snap-scrolling row of slides with arrow controls that reflect
 * scroll position. Native overflow scrolling keeps it touch/drag friendly on
 * mobile; arrows are an enhancement for pointer devices.
 */
export function CarouselRow({
  title,
  subtitle,
  id,
  children,
  headerSize = "md",
  className,
}: {
  title: string;
  subtitle?: string;
  id?: string;
  children: React.ReactNode;
  headerSize?: "md" | "lg";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        size={headerSize}
        action={
          <div className="hidden items-center gap-2 sm:flex">
            <ArrowButton
              dir="left"
              disabled={atStart}
              onClick={() => scrollByPage(-1)}
            />
            <ArrowButton
              dir="right"
              disabled={atEnd}
              onClick={() => scrollByPage(1)}
            />
          </div>
        }
      />
      <div
        ref={ref}
        onScroll={update}
        className="no-scrollbar -mx-1 flex snap-x snap-mandatory scroll-px-1 gap-4 overflow-x-auto px-1 pb-2 pt-3"
      >
        {children}
      </div>
    </section>
  );
}
