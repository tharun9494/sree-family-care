import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-hero-gradient border-b border-border/60">
      <div className="container-page py-14 sm:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
          ) : null}
          <h1 className="mt-3 text-4xl font-extrabold text-primary-deep sm:text-5xl">{title}</h1>
          {description ? (
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
          {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
