import { Link } from "@tanstack/react-router";
import { CalendarDays, Phone } from "lucide-react";
import { hospital } from "@/data/hospital";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur lg:hidden">
      <div className="flex gap-2">
        <a
          href={hospital.phoneHref}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-primary/25 text-sm font-semibold text-primary-deep"
        >
          <Phone className="size-4" aria-hidden="true" /> Call Now
        </a>
        <Link
          to="/appointment"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-blue-gradient text-sm font-semibold text-primary-foreground"
        >
          <CalendarDays className="size-4" aria-hidden="true" /> Appointment
        </Link>
      </div>
    </div>
  );
}
