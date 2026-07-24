import { AppShell } from "@/components/layout/app-shell";
import { Skeleton } from "@/components/ui/skeleton";
import { BookGridSkeleton } from "@/components/books/book-card-skeleton";

export default function Loading() {
  return (
    <AppShell>
      <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-7">
          <Skeleton className="size-28 rounded-2xl sm:size-40" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-9 w-56" />
            <Skeleton className="h-4 w-full max-w-2xl" />
            <Skeleton className="h-4 w-3/4 max-w-xl" />
            <div className="flex flex-wrap gap-2.5 pt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-7 w-24 rounded-full" />
              ))}
            </div>
          </div>
        </div>
        <Skeleton className="mt-12 h-8 w-56" />
        <div className="mt-5">
          <BookGridSkeleton count={10} />
        </div>
      </div>
    </AppShell>
  );
}
