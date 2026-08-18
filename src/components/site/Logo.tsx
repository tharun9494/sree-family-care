import { Link } from "@tanstack/react-router";
import { HeartPulse } from "lucide-react";
import { hospital } from "@/data/hospital";
import { cn } from "@/lib/utils";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-3", className)}
      aria-label={`${hospital.name} — home`}
    >
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-2xl",
          inverted ? "bg-primary-foreground/15" : "bg-blue-gradient shadow-soft",
        )}
      >
        <HeartPulse
          className={cn("size-6", inverted ? "text-primary-foreground" : "text-primary-foreground")}
          aria-hidden="true"
        />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block text-[0.95rem] font-extrabold tracking-tight sm:text-base",
            inverted ? "text-primary-foreground" : "text-primary-deep",
          )}
        >
          Sree Pediatric <span className="text-pink">&amp;</span> General Hospital
        </span>
        <span
          className={cn(
            "block text-[0.7rem] font-medium",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {hospital.tagline}
        </span>
      </span>
    </Link>
  );
}
