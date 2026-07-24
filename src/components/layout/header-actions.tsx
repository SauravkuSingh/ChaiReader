import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

function IconAction({
  label,
  href,
  children,
  badge,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
  badge?: number;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="relative rounded-full text-foreground/70 hover:text-brand"
        >
          <Link href={href} aria-label={label}>
            {children}
            {badge ? (
              <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-brand-foreground">
                {badge}
              </span>
            ) : null}
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

export function HeaderActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1 sm:gap-2", className)}>
      <IconAction label="Wishlist" href="/#wishlist">
        <Heart className="size-5" />
      </IconAction>
      <IconAction label="Cart" href="/#cart" badge={2}>
        <ShoppingCart className="size-5" />
      </IconAction>
      <Button
        asChild
        variant="outline"
        className="ml-1 h-9 rounded-full border-input px-6 font-medium"
      >
        <Link href="/#login">Login</Link>
      </Button>
    </div>
  );
}
