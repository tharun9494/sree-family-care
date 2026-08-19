import { Link } from "@tanstack/react-router";
import { ArrowRight, Baby, Activity, HeartPulse, Syringe, Droplets } from "lucide-react";
import type { Service } from "@/data/hospital";
import { cn } from "@/lib/utils";

const icons = {
  "pediatric-care": HeartPulse,
  "neonatal-care": Baby,
  "general-medicine": Activity,
  "diabetes-care": Droplets,
  vaccination: Syringe,
} as const;

const accentClasses: Record<Service["accent"], string> = {
  blue: "bg-primary-soft text-primary",
  teal: "bg-teal/12 text-teal",
  pink: "bg-pink/12 text-pink",
  sun: "bg-sun/18 text-sun-foreground",
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.slug as keyof typeof icons] ?? HeartPulse;
  return (
    <Link
      to={service.to}
      className="group flex h-full flex-col rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift"
    >
      <span
        className={cn(
          "flex size-10 sm:size-12 items-center justify-center rounded-xl sm:rounded-2xl",
          accentClasses[service.accent],
        )}
      >
        <Icon className="size-5 sm:size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 sm:mt-5 text-sm sm:text-lg font-bold text-primary-deep leading-tight">{service.title}</h3>
      <p className="mt-1.5 sm:mt-2 flex-1 text-[0.7rem] sm:text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <span className="mt-4 sm:mt-5 inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-primary">
        Learn more
        <ArrowRight
          className="size-3 sm:size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
