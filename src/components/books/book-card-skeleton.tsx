import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function BookCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card p-2.5", className)}>
      <Skeleton className="aspect-[3/4] w-full rounded-lg" />
      <Skeleton className="mt-3 h-4 w-4/5" />
      <Skeleton className="mt-2 h-3 w-2/5" />
      <Skeleton className="mt-3 h-9 w-full rounded-lg" />
    </div>
  );
}

/** A responsive grid of card skeletons for route-level loading states. */
export function BookGridSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: count }).map((_, i) => (
        <BookCardSkeleton key={i} />
      ))}
    </div>
  );
}
