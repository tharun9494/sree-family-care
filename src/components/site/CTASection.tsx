import { Link } from "@tanstack/react-router";
import { CalendarDays, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { hospital } from "@/data/hospital";

export function CTASection({
  title = "Need medical assistance?",
  description = hospital.emergency,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-page section-y">
      <Reveal className="overflow-hidden rounded-3xl bg-blue-gradient px-6 py-12 text-center shadow-card sm:px-12">
        <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="onDark" size="lg">
            <a href={hospital.phoneHref}>
              <Phone aria-hidden="true" /> Call {hospital.phone}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link to="/appointment">
              <CalendarDays aria-hidden="true" /> Book an Appointment
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
