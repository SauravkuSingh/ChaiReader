import Link from "next/link";
import { BookOpen } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <AppShell>
      <div className="mx-auto flex min-h-[62vh] max-w-md flex-col items-center justify-center px-6 text-center">
        <div className="grid size-16 place-items-center rounded-2xl bg-cream">
          <BookOpen className="size-8 text-brand" strokeWidth={2.25} />
        </div>
        <p className="mt-6 font-heading text-5xl font-bold text-foreground">404</p>
        <h1 className="mt-2 font-heading text-2xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-2 text-muted-foreground">
          We couldn&apos;t find the page you were looking for. It may have been
          moved or no longer exists.
        </p>
        <Button asChild className="mt-6 h-11 rounded-full px-6">
          <Link href="/">Back to Browse</Link>
        </Button>
      </div>
    </AppShell>
  );
}
