import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoPng from "@/assets/logo.png";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center shrink-0 self-center", className)}
      aria-label="Sree Pediatric & General Hospital — home"
      style={{ display: "flex", alignItems: "center" }}
    >
      <img
        src={logoPng}
        alt="Sree Pediatric & General Hospital"
        className={cn(
          "h-11 w-auto object-contain md:h-13 lg:h-15 transition-all shrink-0 self-center",
          inverted ? "brightness-0 invert" : ""
        )}
        style={{
          maxHeight: "64px",
          width: "auto",
          display: "block",
          objectFit: "contain",
          aspectRatio: "auto"
        }}
      />
    </Link>
  );
}
