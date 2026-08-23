import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Disclaimer } from "@/components/site/ContentSections";
import { hospital } from "@/data/hospital";
import interiorImg from "@/assets/hospital-interior.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: `Hospital Facilities - ${hospital.name}` },
      { name: "description", content: `Take a look inside Sree Pediatric & General Hospital's clean OPD cabins, baby feeding space, waiting lounge, and patient amenities in Madanapalle.` }
    ]
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  const facilityItems = [
    { title: "OPD Consultation Cabins", desc: "Private, clean consultation rooms configured for patient comfort and silent consultations." },
    { title: "Specialized Pediatric Care Equipment", desc: "Weight tables, baby meters, and child-friendly diagnostic tools used by Dr. S. Subrahmanyam." },
    { title: "Neonatal Check-Up Station", desc: "Equipped to review newborn weights, check infant jaundice levels, and monitor neonatal reflexes." },
    { title: "Air-Conditioned Waiting Lounge", desc: "Clean seating area with drinking water facilities and proper ventilation to reduce cross-infection risk." },
    { title: "Baby Feeding Area", desc: "A private space for mothers to feed their infants comfortably between checkups." },
    { title: "Emergency Power Backup", desc: "Continuous power backup supply to maintain ventilation and equipment operations during load shedding." }
  ];

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Clinical Environment"
        title="Hospital Facilities"
        description="A look inside our hygienic outpatient clinic in Madanapalle, designed for your family's comfort."
      />

      {/* Main Facilities Overview */}
      <section className="container-page section-y grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-teal rounded-[2.25rem] opacity-10 blur-md pointer-events-none" />
              <img
                src={interiorImg}
                alt="Reception desk and waiting lounge at Sree Hospital"
                className="w-full aspect-[4/3] object-cover rounded-3xl shadow-card border border-border bg-muted"
              />
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-primary-deep leading-tight">
              Comfortable amenities for patient care
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We understand that clinical hygiene and clean environments play an important role in healthcare. Sree Hospital maintains high standards of cleanliness, ensuring sanitization of our waiting rooms, consultation cabins, and patient toilets.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We have specifically organized the waiting area layout to minimize crowding and maintain proper ventilation, which is particularly beneficial for pediatric patients and newborns.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="bg-surface border-y border-border/60 section-y">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-primary-deep">What We Offer</h2>
            <p className="text-sm text-muted-foreground mt-3">Clinical and patient amenities built for family comfort.</p>
          </Reveal>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 mt-10">
            {facilityItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-soft hover:shadow-lift transition-all flex flex-col h-full">
                <span className="flex size-8 sm:size-9 items-center justify-center rounded-xl bg-teal/12 text-teal shrink-0">
                  <Check className="size-4 sm:size-4.5" />
                </span>
                <h3 className="font-bold text-primary-deep text-xs sm:text-base mt-3 sm:mt-4 leading-tight">{item.title}</h3>
                <p className="text-[0.7rem] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2 leading-relaxed flex-1">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="container-page section-y">
        <Reveal className="overflow-hidden rounded-3xl bg-blue-gradient px-6 py-12 text-center shadow-card sm:px-12">
          <h2 className="text-3xl font-extrabold text-primary-foreground">Consult with our specialists today</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
            Reach out to our team to schedule consultations or address general family health queries.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="onDark" size="lg">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              <a href={hospital.phoneHref}>Call {hospital.phone}</a>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Disclaimer */}
      <div className="pb-10">
        <Reveal>
          <Disclaimer />
        </Reveal>
      </div>
    </div>
  );
}
