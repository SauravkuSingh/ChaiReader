import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-tag px-4 py-1.5 text-[13px] font-medium text-tag-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
