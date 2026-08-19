import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Disclaimer } from "@/components/site/ContentSections";
import { hospital } from "@/data/hospital";
import { Check } from "lucide-react";

export const Route = createFileRoute("/general-medicine")({
  head: () => ({
    meta: [
      { title: `General Medicine - Adult Physician in Madanapalle - ${hospital.name}` },
      { name: "description", content: `Outpatient medical reviews, acute infection treatments, and diagnostic evaluations. Consult with Dr. J. Revathi, MD (General Medicine).` }
    ]
  }),
  component: GeneralMedicinePage,
});

function GeneralMedicinePage() {
  const clinicalAreas = [
    "Diagnosis and management of common adult infections & fevers",
    "Hypertension (high blood pressure) regular tracking & adjustments",
    "Respiratory diseases (asthma, bronchitis, and allergies) care",
    "Digestive disorders, acidity, and gastrointestinal tracking",
    "Routine physical health evaluations & preventive checkups",
    "Lifestyle modification suggestions and wellness reviews"
  ];

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Specialty Care"
        title="General Medicine"
        description="Comprehensive outpatient consultations, clinical monitoring, and preventive care plans for adults in Madanapalle."
      />

      <section className="container-page section-y max-w-4xl">
        <div className="space-y-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-primary-deep leading-tight">
              Clinical medical care for adult health needs
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Outpatient adult medicine focuses on identifying symptoms early, managing long-term health metrics like blood pressure, and managing common acute conditions. Led by <strong>Dr. J. Revathi, M.B.B.S., M.D. (General Medicine)</strong>, our general medicine consultations provide patients with clear, direct explanations of their health.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We focus on detailed clinical history reviews, logical diagnostic recommendations (avoiding excessive or unnecessary tests), and continuous prescription tracking to support patient safety and health management.
            </p>
          </Reveal>

          {/* Points list */}
          <div className="grid gap-3.5 sm:grid-cols-2 mt-8">
            {clinicalAreas.map((item) => (
              <Reveal key={item} className="flex gap-2 text-sm text-foreground/90 font-medium">
                <Check className="size-4.5 text-teal shrink-0 mt-0.5" />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="pt-6">
            <Button asChild variant="teal">
              <Link to="/appointment" search={{ doctor: "Dr. J. Revathi" } as never}>Book General Medicine Consult</Link>
            </Button>
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
