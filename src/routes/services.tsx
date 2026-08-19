import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Disclaimer } from "@/components/site/ContentSections";
import { services, hospital } from "@/data/hospital";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Our Healthcare Services - ${hospital.name}` },
      { name: "description", content: `Explore Sree Pediatric & General Hospital's outpatient services, including child vaccination support, newborn care, general medicine, and diabetes checkups.` }
    ]
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Departments"
        title="Healthcare Services"
        description="Comprehensive outpatient consultations and clinical monitoring for pediatric, neonatal, and adult health in Madanapalle."
      />

      <section className="container-page section-y">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-primary-deep">Specialty Focus Areas</h2>
          <p className="text-sm text-muted-foreground mt-1">We provide specialized care with certified practitioners.</p>
        </Reveal>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 mt-8">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vaccine details callout */}
      <section className="bg-surface border-y border-border/60 section-y">
        <div className="container-page max-w-4xl">
          <Reveal className="bg-card border border-border rounded-3xl p-8 shadow-soft">
            <h3 className="text-xl font-extrabold text-primary-deep">Important Notice Regarding Vaccinations</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              We provide standard vaccine recommendations and administration services at Sree Hospital. However, we do not publish a generic vaccination schedule online. Every child's medical history, developmental pace, and immunization profile are unique.
            </p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Appropriate vaccine timelines should be reviewed and confirmed directly with Dr. Y. Subrahmanyam during an in-person consultation to ensure clinical safety and efficacy.
            </p>
            <div className="mt-6">
              <Button asChild variant="hero">
                <Link to="/appointment" search={{ doctor: "Dr. Y. Subrahmanyam" } as never}>Book Vaccine Consultation</Link>
              </Button>
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
