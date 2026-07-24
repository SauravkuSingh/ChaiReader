import { cn } from "@/lib/utils";

/**
 * Reusable "Title + subtitle + optional right-side action" header used above
 * every content section. `size="lg"` is the feature heading (e.g. "Our New
 * Releases"); `size="md"` is the row heading used on Home.
 */
export function SectionHeader({
  title,
  subtitle,
  action,
  size = "md",
  className,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-end justify-between gap-4",
        size === "lg" ? "mb-5" : "mb-4",
        className,
      )}
    >
      <div className="min-w-0">
        <h2
          className={cn(
            "font-heading font-bold tracking-tight text-foreground",
            size === "lg"
              ? "text-2xl sm:text-[28px]"
              : "text-xl sm:text-[22px]",
          )}
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
