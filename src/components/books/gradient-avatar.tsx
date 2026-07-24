import Image from "next/image";
import { portraitUrl } from "@/lib/images";
import { cn } from "@/lib/utils";

/**
 * Portrait for authors and reviewers: a seeded face photo layered over the
 * gradient + initials, which remain visible as a fallback if the image fails.
 */
export function GradientAvatar({
  name,
  colors,
  className,
  shape = "circle",
  seed,
  sizes = "160px",
}: {
  name: string;
  colors: [string, string];
  className?: string;
  shape?: "circle" | "rounded";
  /** Override the image seed (defaults to `name`) so repeats differ. */
  seed?: string;
  sizes?: string;
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
        "relative grid shrink-0 place-items-center overflow-hidden font-heading font-semibold text-white/95",
        shape === "circle" ? "rounded-full" : "rounded-2xl",
        className,
      )}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <span className="drop-shadow-sm">{initials}</span>
      <Image
        src={portraitUrl(seed ?? name)}
        alt=""
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
