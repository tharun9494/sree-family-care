import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { DoctorCard } from "@/components/site/DoctorCard";
import { TimingsCard } from "@/components/site/TimingsCard";
import { Disclaimer } from "@/components/site/ContentSections";
import { doctors, hospital } from "@/data/hospital";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: `Our Consulting Doctors - ${hospital.name}` },
      { name: "description", content: `Consult with Dr. S. Subrahmanyam (Children & Neonatal Specialist) and Dr. J. Revathi (General Physician & Diabetes Care) in Madanapalle.` }
    ]
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Medical Team"
        title="Consulting Doctors"
        description="Our clinical services are led by qualified, experienced practitioners who care about your family's health."
      />

      <section className="container-page section-y">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Doctors Grid */}
          <div className="lg:col-span-8 space-y-8">
            <Reveal>
              <h2 className="text-2xl font-extrabold text-primary-deep">Active Practitioners</h2>
              <p className="text-sm text-muted-foreground mt-1">Select a doctor to book a direct appointment slot.</p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {doctors.map((doctor, i) => (
                <Reveal key={doctor.slug} delay={i * 100}>
                  <DoctorCard doctor={doctor} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Timings Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <Reveal>
              <h2 className="text-2xl font-extrabold text-primary-deep">Consultation Hours</h2>
              <p className="text-sm text-muted-foreground mt-1">Our default outpatient consulting times.</p>
            </Reveal>
            <Reveal delay={150}>
              <TimingsCard />
            </Reveal>
          </aside>
        </div>
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
