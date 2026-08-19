import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Disclaimer } from "@/components/site/ContentSections";
import { hospital } from "@/data/hospital";
import neonatalImg from "@/assets/neonatal-care.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/neonatal-care")({
  head: () => ({
    meta: [
      { title: `Neonatal Care - Newborn Specialist in Madanapalle - ${hospital.name}` },
      { name: "description", content: `Specialized monitoring, weight tracking, and feeding reviews for newborn babies. Consult with Neonatal Specialist Dr. Y. Subrahmanyam.` }
    ]
  }),
  component: NeonatalCarePage,
});

function NeonatalCarePage() {
  const newbornServices = [
    "Newborn physical development & weight progression checks",
    "Breastfeeding counseling and nutritional advice for mothers",
    "Monitoring and assessment for neonatal jaundice",
    "Umbilical cord care and clinical hygiene reviews",
    "Newborn sleep cycle, hydration, and thermal care reviews",
    "Early detection of neonatal health issues"
  ];

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Specialty Care"
        title="Neonatal Care (Newborn Health)"
        description="Focused health checks, weight monitoring, and parent support for infant babies in Madanapalle."
      />

      {/* Main Details */}
      <section className="container-page section-y grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-primary-deep leading-tight">
              Specialized medical guidance during the first critical weeks
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The neonatal period (first 28 days of life) represents a phase of significant adaptation. Newborn babies have delicate immune systems, sensitive digestive tracks, and require steady temperature management.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At Sree Hospital, <strong>Dr. Y. Subrahmanyam</strong> helps parents monitor their newborn's development, answering questions about stool frequencies, hydration levels, jaundice indicators, and sleep safety. We aim to guide you through these early stages with clear, stress-free clinical advice.
            </p>
          </Reveal>

          {/* Checklist */}
          <div className="grid gap-3 sm:grid-cols-2 mt-6">
            {newbornServices.map((item) => (
              <Reveal key={item} className="flex gap-2 text-sm text-foreground/90 font-medium">
                <Check className="size-4.5 text-pink shrink-0 mt-0.5" />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="pt-4">
            <Button asChild variant="pink">
              <Link to="/appointment" search={{ doctor: "Dr. Y. Subrahmanyam" } as never}>Book Newborn Consult</Link>
            </Button>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200} className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-pink to-primary rounded-[2.25rem] opacity-10 blur-md pointer-events-none" />
            <img
              src={neonatalImg}
              alt="Newborn baby resting comfortably"
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-card border border-border bg-muted"
            />
          </Reveal>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="py-10">
        <Reveal>
          <Disclaimer />
        </Reveal>
      </div>
    </div>
  );
}
