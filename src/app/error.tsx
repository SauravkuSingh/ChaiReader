"use client";

import { useEffect } from "react";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for logging/observability.
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="grid size-16 place-items-center rounded-2xl bg-red-50">
        <TriangleAlert className="size-8 text-red-500" />
      </div>
      <h1 className="mt-6 font-heading text-2xl font-semibold text-foreground">
        Something went wrong
      </h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        An unexpected error occurred while loading this page. You can try again
        or head back to browsing.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={reset} className="h-11 rounded-full px-6">
          Try again
        </Button>
        <Button asChild variant="outline" className="h-11 rounded-full px-6">
          <Link href="/">Back to Browse</Link>
        </Button>
      </div>
    </main>
  );
}
