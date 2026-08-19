import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Disclaimer } from "@/components/site/ContentSections";
import { hospital } from "@/data/hospital";
import pediatricImg from "@/assets/pediatric-care.jpg";
import { ShieldAlert, Check } from "lucide-react";

export const Route = createFileRoute("/pediatric-care")({
  head: () => ({
    meta: [
      { title: `Pediatric Care - Children's Doctor in Madanapalle - ${hospital.name}` },
      { name: "description", content: `Quality pediatric care for children's growth, illness, and vaccinations. Consult with Pediatric specialist Dr. Y. Subrahmanyam.` }
    ]
  }),
  component: PediatricCarePage,
});

function PediatricCarePage() {
  const treatments = [
    "General pediatric consultations & wellness reviews",
    "Childhood fever, cough, cold, and asthma care",
    "Digestive and gastrointestinal issue management",
    "Infant growth and physical development tracking",
    "General vaccination reviews and administration",
    "Dietary recommendations and nutritional guidance for kids"
  ];

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Specialty Care"
        title="Pediatric Care (Children's Clinic)"
        description="Comprehensive healthcare services for children's outpatient, growth, and general illness needs in Madanapalle."
      />

      {/* Main Details */}
      <section className="container-page section-y grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-primary-deep leading-tight">
              Clinical attention for children's general health
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Children's bodies respond differently to infections and environmental changes than adult bodies. At Sree Pediatric & General Hospital, our pediatric consultation room, led by <strong>Dr. Y. Subrahmanyam (M.B.B.S., N-Dch)</strong>, provides a quiet space for children to be examined.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We monitor parameters like height, weight, and key developmental metrics to identify nutritional or physical delays early. We also review standard vaccination plans during childhood visits, explaining each option to parents.
            </p>
          </Reveal>

          {/* Key items */}
          <div className="grid gap-3 sm:grid-cols-2 mt-6">
            {treatments.map((treatment) => (
              <Reveal key={treatment} className="flex gap-2 text-sm text-foreground/90 font-medium">
                <Check className="size-4.5 text-teal shrink-0 mt-0.5" />
                <span>{treatment}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="pt-4">
            <Button asChild variant="hero">
              <Link to="/appointment" search={{ doctor: "Dr. Y. Subrahmanyam" } as never}>Book Pediatric Consult</Link>
            </Button>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200} className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-teal rounded-[2.25rem] opacity-10 blur-md pointer-events-none" />
            <img
              src={pediatricImg}
              alt="Pediatrician examining a child at Sree Hospital"
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-card border border-border bg-muted"
            />
          </Reveal>
        </div>
      </section>

      {/* Warning/Guidance Alert */}
      <section className="bg-surface border-y border-border/60 section-y">
        <div className="container-page max-w-3xl">
          <Reveal className="bg-card border border-border rounded-3xl p-6 shadow-soft flex gap-4">
            <ShieldAlert className="size-6 text-pink shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-primary-deep text-base">Parent Information</h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                If your child has a sudden high fever, noticeable drowsiness, or refusal to take fluids, we recommend scheduling an outpatient consultation immediately. Please bring all past prescription slips and vaccination cards to support clinical assessment.
              </p>
            </div>
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
