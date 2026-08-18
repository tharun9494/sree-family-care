import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { medicalDisclaimer } from "@/data/hospital";

export function FeatureList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="container-page section-y grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 60}
          className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-teal/12 text-teal">
            <Check className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-base font-bold text-primary-deep">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Disclaimer() {
  return (
    <div className="container-page">
      <p className="rounded-2xl border border-border bg-muted px-5 py-4 text-sm text-muted-foreground">
        {medicalDisclaimer}
      </p>
    </div>
  );
}
