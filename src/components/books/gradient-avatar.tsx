import { cn } from "@/lib/utils";

/** Placeholder portrait (author photos, review avatars) — gradient + initials. */
export function GradientAvatar({
  name,
  colors,
  className,
  shape = "circle",
}: {
  name: string;
  colors: [string, string];
  className?: string;
  shape?: "circle" | "rounded";
}) {
  const [from, to] = colors;
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      role="img"
      aria-label={name}
      className={cn(
        "grid shrink-0 place-items-center font-heading font-semibold text-white/95",
        shape === "circle" ? "rounded-full" : "rounded-2xl",
        className,
      )}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <span className="drop-shadow-sm">{initials}</span>
    </div>
  );
}
