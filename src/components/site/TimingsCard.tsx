import { Clock } from "lucide-react";
import { timings } from "@/data/hospital";

export function TimingsCard() {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <h3 className="flex items-center gap-2 text-lg font-bold text-primary-deep">
        <Clock className="size-5 text-primary" aria-hidden="true" /> Consultation Timings
      </h3>
      <dl className="mt-4 space-y-3">
        {timings.map((t) => (
          <div
            key={t.days}
            className="flex flex-col gap-1 border-b border-border pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
          >
            <dt className="text-sm font-semibold text-foreground">{t.days}</dt>
            <dd className="text-sm text-muted-foreground sm:text-right">
              {t.slots.map((s) => (
                <span key={s} className="block">
                  {s}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
