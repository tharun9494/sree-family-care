import { Link } from "@tanstack/react-router";
import { CalendarDays, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Doctor } from "@/data/hospital";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const initials = doctor.name
    .replace("Dr. ", "")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
      <div className="flex items-center gap-4">
        <div
          className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-lg font-extrabold text-primary-deep"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-deep">{doctor.name}</h3>
          <p className="text-sm font-semibold text-primary">{doctor.role}</p>
        </div>
      </div>

      <dl className="mt-5 space-y-1.5 text-sm">
        <div className="flex gap-2">
          <dt className="font-semibold text-foreground">Qualifications:</dt>
          <dd className="text-muted-foreground">{doctor.qualifications}</dd>
        </div>
        {doctor.extra ? (
          <div className="flex gap-2">
            <dt className="font-semibold text-foreground">Additional:</dt>
            <dd className="text-muted-foreground">{doctor.extra}</dd>
          </div>
        ) : null}
      </dl>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{doctor.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {doctor.focus.map((f) => (
          <li
            key={f}
            className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/80"
          >
            <Stethoscope className="size-3" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-1">
        <Button asChild variant="hero" className="w-full sm:w-auto">
          <Link to="/appointment" search={{ doctor: doctor.name } as never}>
            <CalendarDays aria-hidden="true" /> Book Appointment
          </Link>
        </Button>
      </div>
    </article>
  );
}
