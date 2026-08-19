import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Disclaimer } from "@/components/site/ContentSections";
import { hospital } from "@/data/hospital";
import { Heart, ShieldCheck, Clock, MapPin, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us - ${hospital.name}` },
      { name: "description", content: `Learn more about Sree Pediatric & General Hospital's medical philosophy, family values, and healthcare standards in Madanapalle.` }
    ]
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      title: "Family Care Principles",
      text: "We provide comprehensive, gentle care for children, newborns, and adults under one roof.",
      Icon: Heart,
      color: "text-pink bg-pink/10"
    },
    {
      title: "Clinical Integrity",
      text: "We only suggest treatments that are medically verified, keeping diagnostics transparent.",
      Icon: ShieldCheck,
      color: "text-teal bg-teal/10"
    },
    {
      title: "Patient Comfort First",
      text: "Hygienic rooms and polite consultation services configured for patient comfort.",
      Icon: Award,
      color: "text-primary bg-primary-soft"
    },
    {
      title: "Convenient Timings",
      text: "OPD hours structured for families, offering options both morning and evening.",
      Icon: Clock,
      color: "text-sun bg-sun/12"
    }
  ];

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Our Story"
        title="About Sree Hospital"
        description="Dedicated clinical consultation services for families in Madanapalle, Andhra Pradesh."
      >
        <Button asChild variant="hero">
          <Link to="/appointment">Book an Appointment</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/contact">View Location Map</Link>
        </Button>
      </PageHero>

      {/* Philosophy Section */}
      <section className="container-page section-y grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-primary-deep leading-tight">
              Clinical consultation built on trust and expert advice
            </h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              At Sree Pediatric & General Hospital, we prioritize clinical results and patient convenience. Located near NTR Circle in Madanapalle, we address everyday wellness needs for patients of all ages, supporting child vaccinations, newborn reviews, adult general medicine, and chronic diabetes monitoring.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We understand that visiting a doctor can be stressful, particularly for parents with infants. That is why our Children & Neonatal Specialist, Dr. Y. Subrahmanyam, maintains a quiet, parent-friendly consult room, while Dr. J. Revathi ensures detailed, patient explanations for adult medical evaluations.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-5 bg-surface border border-border rounded-3xl p-8 space-y-4">
          <Reveal>
            <h3 className="font-extrabold text-primary-deep text-xl">Hospital Details</h3>
            <dl className="mt-4 space-y-3.5 text-sm">
              <div className="flex justify-between border-b border-border pb-2.5">
                <dt className="font-semibold text-muted-foreground">Name</dt>
                <dd className="text-right text-foreground font-medium">{hospital.name}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2.5">
                <dt className="font-semibold text-muted-foreground">Primary Location</dt>
                <dd className="text-right text-foreground font-medium">{hospital.address.city}, AP</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2.5">
                <dt className="font-semibold text-muted-foreground">Specialties</dt>
                <dd className="text-right text-foreground font-medium">Pediatrics, Neonatal, General, Diabetes</dd>
              </div>
              <div className="flex justify-between pb-1">
                <dt className="font-semibold text-muted-foreground">Phone Number</dt>
                <dd className="text-right text-foreground font-medium">
                  <a href={hospital.phoneHref} className="text-primary hover:underline">{hospital.phone}</a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="bg-surface border-y border-border/60 section-y">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-primary-deep">Our Core Values</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              We operate under simple principles that prioritize family comfort and professional, honest medical advice.
            </p>
          </Reveal>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-10">
            {values.map((v, i) => {
              const Icon = v.Icon;
              return (
                <Reveal key={v.title} delay={i * 100} className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-soft flex flex-col h-full">
                  <span className={`flex size-9 sm:size-11 items-center justify-center rounded-xl sm:rounded-2xl ${v.color} shrink-0`}>
                    <Icon className="size-4.5 sm:size-5.5" />
                  </span>
                  <h3 className="font-bold text-primary-deep text-xs sm:text-base mt-3 sm:mt-4 leading-tight">{v.title}</h3>
                  <p className="text-[0.7rem] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2 leading-relaxed flex-1">{v.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="container-page section-y">
        <Reveal className="overflow-hidden rounded-3xl bg-blue-gradient px-6 py-12 text-center shadow-card sm:px-12">
          <h2 className="text-3xl font-extrabold text-primary-foreground">Consult with our doctors</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
            If you need to schedule a consultation, vaccination review, or general health check, reach out to Sree Hospital today.
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
