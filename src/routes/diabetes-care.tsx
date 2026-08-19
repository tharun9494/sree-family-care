import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Disclaimer } from "@/components/site/ContentSections";
import { hospital } from "@/data/hospital";
import { Check } from "lucide-react";

export const Route = createFileRoute("/diabetes-care")({
  head: () => ({
    meta: [
      { title: `Diabetes Care - Specialty Consultation in Madanapalle - ${hospital.name}` },
      { name: "description", content: `Specialized diabetes consultation, glucose monitoring guidance, and lifestyle counseling. Consult with Dr. J. Revathi, MD (General Medicine).` }
    ]
  }),
  component: DiabetesCarePage,
});

function DiabetesCarePage() {
  const managementPoints = [
    "Comprehensive glucose profiling (fasting & post-prandial reviews)",
    "HBA1C monitoring and long-term diabetes management planning",
    "Screening and monitoring guidance for diabetic complications",
    "Balanced meal plans and physical activity advisory",
    "Medication adherence tracking & safety adjustments",
    "Support and education on self-monitoring glucose systems"
  ];

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Specialty Care"
        title="Diabetes Care & Management"
        description="Specialized consultations, glucose tracking guidance, and personalized lifestyle advisory for diabetes mellitus in Madanapalle."
      />

      <section className="container-page section-y max-w-4xl">
        <div className="space-y-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-primary-deep leading-tight">
              Consistent, clinical management of blood glucose levels
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Diabetes is a long-term clinical condition that requires steady, structured management. Rather than quick adjustments, successful diabetes management depends on regular checkups, patient education, and custom medication plans.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At Sree Hospital, <strong>Dr. J. Revathi (M.B.B.S., M.D. General Medicine, Fellowship in Diabetes Mellitus)</strong> works with patients to outline glycemic targets, track glucose fluctuations, and coordinate lifestyle adjustments that support physical wellness and minimize organ stress.
            </p>
          </Reveal>

          {/* Key Checklist */}
          <div className="grid gap-3.5 sm:grid-cols-2 mt-8">
            {managementPoints.map((item) => (
              <Reveal key={item} className="flex gap-2 text-sm text-foreground/90 font-medium">
                <Check className="size-4.5 text-teal shrink-0 mt-0.5" />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="pt-6">
            <Button asChild variant="hero">
              <Link to="/appointment" search={{ doctor: "Dr. J. Revathi" } as never}>Book Diabetes Consult</Link>
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
