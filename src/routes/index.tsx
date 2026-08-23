import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, Phone, ShieldCheck, Heart, UserCheck, Baby, Stethoscope, Droplets, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hospital, doctors, services } from "@/data/hospital";
import { DoctorCard } from "@/components/site/DoctorCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import { FAQSection } from "@/components/site/FAQSection";
import { TimingsCard } from "@/components/site/TimingsCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureList, Disclaimer } from "@/components/site/ContentSections";

// Import local photos
import heroImg from "@/assets/hero-family-care.jpg";
import interiorImg from "@/assets/hospital-interior.jpg";
import pediatricImg from "@/assets/pediatric-care.jpg";
import neonatalImg from "@/assets/neonatal-care.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // Highlight features for Why Choose Us
  const whyChooseUsFeatures = [
    {
      title: "Family-Focused Consultation",
      text: "We provide medical care tailored to both children and adults, ensuring your entire family feels supported."
    },
    {
      title: "Neonatal & Child Specialist",
      text: "Dr. S. Subrahmanyam offers expert guidance on newborn health, vaccines, and pediatric developmental check-ups."
    },
    {
      title: "Adult General & Diabetes Care",
      text: "Dr. J. Revathi consults for general medicine and provides dedicated monitoring and lifestyle support for diabetes."
    },
    {
      title: "Convenient Location",
      text: "Situated near NTR Circle, easily accessible for local and surrounding families."
    },
    {
      title: "Clear Communication",
      text: "We focus on explaining diagnoses clearly, ensuring parents and patients understand the care plans."
    },
    {
      title: "Timely Consultations",
      text: "Multiple OPD slots in the morning and evening to fit into your family's busy schedule."
    }
  ];

  return (
    <div className="bg-background">
      {/* 2. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#f8fafc] to-white border-b border-border/50 relative pt-12 pb-16 md:pb-24 lg:pt-16 lg:pb-28 z-20">
        {/* Subtle decorative circles */}
        <div className="absolute top-1/4 right-0 size-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 size-80 bg-teal/3 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-page grid gap-12 lg:grid-cols-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm tracking-wider uppercase">
                <span className="h-[1.5px] w-5 bg-primary" />
                {hospital.tagline}
                <span className="h-[1.5px] w-5 bg-primary" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-primary-deep leading-[1.1]">
                Compassionate<br />
                Healthcare for<br />
                <span className="text-primary">Your Family</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Expert Pediatric, Neonatal and General Medical Care with a family-focused approach in Madanapalle.
              </p>
            </Reveal>
            
            {/* CTAs */}
            <Reveal delay={300} className="flex flex-wrap gap-4 pt-2">
              <Button asChild variant="hero" size="lg" className="rounded-2xl shadow-soft font-bold">
                <Link to="/appointment" className="flex items-center gap-2">
                  <CalendarDays className="size-4" /> Book an Appointment
                </Link>
              </Button>
              <a
                href={hospital.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-primary bg-background text-primary font-bold text-sm h-13 px-6 rounded-2xl shadow-soft hover:bg-primary-soft/50 transition-colors"
              >
                <Phone className="size-4" /> Call {hospital.phone}
              </a>
            </Reveal>
            
            {/* Location tag */}
            <Reveal delay={350} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              <span>Madanapalle, Andhra Pradesh</span>
            </Reveal>
          </div>
          
          <div className="lg:col-span-5 relative">
            <Reveal delay={400} className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-teal rounded-[2.25rem] opacity-10 blur-md pointer-events-none" />
              <img
                src={heroImg}
                alt="Doctor consulting a family at Sree Hospital"
                className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-card relative border border-border bg-muted"
              />
            </Reveal>
          </div>
        </div>

        {/* Floating Categories Bar (Mockup Style) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-5 z-20 hidden md:block">
          <div className="bg-white border border-border/80 shadow-card rounded-[2rem] p-5 flex justify-between items-center divide-x divide-border">
            {/* Pediatric Care */}
            <Link to="/pediatric-care" className="flex-1 flex items-center justify-center gap-3 px-6 py-2 hover:bg-muted/40 transition-colors rounded-2xl group">
              <div className="size-11 rounded-full bg-pink/10 text-pink flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                <Heart className="size-5.5 fill-pink/10" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-extrabold text-primary-deep leading-none">Pediatric</span>
                <span className="text-sm font-extrabold text-primary-deep leading-none mt-1">Care</span>
              </div>
            </Link>
            {/* Neonatal Care */}
            <Link to="/neonatal-care" className="flex-1 flex items-center justify-center gap-3 px-6 py-2 hover:bg-muted/40 transition-colors rounded-2xl group">
              <div className="size-11 rounded-full bg-teal/10 text-teal flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                <Baby className="size-5.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-extrabold text-primary-deep leading-none">Neonatal</span>
                <span className="text-sm font-extrabold text-primary-deep leading-none mt-1">Care</span>
              </div>
            </Link>
            {/* General Medicine */}
            <Link to="/general-medicine" className="flex-1 flex items-center justify-center gap-3 px-6 py-2 hover:bg-muted/40 transition-colors rounded-2xl group">
              <div className="size-11 rounded-full bg-pink/10 text-pink flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                <Stethoscope className="size-5.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-extrabold text-primary-deep leading-none">General</span>
                <span className="text-sm font-extrabold text-primary-deep leading-none mt-1">Medicine</span>
              </div>
            </Link>
            {/* Diabetes Care */}
            <Link to="/diabetes-care" className="flex-1 flex items-center justify-center gap-3 px-6 py-2 hover:bg-muted/40 transition-colors rounded-2xl group">
              <div className="size-11 rounded-full bg-teal/10 text-teal flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                <Droplets className="size-5.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-extrabold text-primary-deep leading-none">Diabetes</span>
                <span className="text-sm font-extrabold text-primary-deep leading-none mt-1">Care</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories for Mobile View */}
      <div className="container-page mt-6 md:hidden">
        <div className="bg-white border border-border/80 shadow-soft rounded-2xl p-4 grid grid-cols-2 gap-x-3 gap-y-4">
          {/* Pediatric Care */}
          <Link to="/pediatric-care" className="flex items-center gap-2.5 p-1 hover:bg-muted/20 transition-colors rounded-xl group">
            <div className="size-9.5 rounded-full bg-pink/10 text-pink flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Heart className="size-4.5 fill-pink/10" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-xs font-extrabold text-primary-deep">Pediatric</span>
              <span className="text-xs font-extrabold text-primary-deep mt-0.5">Care</span>
            </div>
          </Link>
          
          {/* Neonatal Care */}
          <Link to="/neonatal-care" className="flex items-center gap-2.5 p-1 hover:bg-muted/20 transition-colors rounded-xl group">
            <div className="size-9.5 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Baby className="size-4.5" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-xs font-extrabold text-primary-deep">Neonatal</span>
              <span className="text-xs font-extrabold text-primary-deep mt-0.5">Care</span>
            </div>
          </Link>
          
          {/* General Medicine */}
          <Link to="/general-medicine" className="flex items-center gap-2.5 p-1 hover:bg-muted/20 transition-colors rounded-xl group flex">
            <div className="size-9.5 rounded-full bg-pink/10 text-pink flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Stethoscope className="size-4.5" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-xs font-extrabold text-primary-deep">General</span>
              <span className="text-xs font-extrabold text-primary-deep mt-0.5">Medicine</span>
            </div>
          </Link>
          
          {/* Diabetes Care */}
          <Link to="/diabetes-care" className="flex items-center gap-2.5 p-1 hover:bg-muted/20 transition-colors rounded-xl group">
            <div className="size-9.5 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Droplets className="size-4.5" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-xs font-extrabold text-primary-deep">Diabetes</span>
              <span className="text-xs font-extrabold text-primary-deep mt-0.5">Care</span>
            </div>
          </Link>
        </div>
      </div>

      {/* 3. TRUST SECTION / FEATURES BAR */}
      <section className="container-page pt-16 md:pt-24 pb-8">
        <Reveal className="bg-white border border-border/80 shadow-soft rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-x-4 gap-y-8 grid-cols-2 md:grid-cols-5 md:divide-x divide-border">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="size-12 rounded-full bg-pink/10 text-pink flex items-center justify-center mb-3">
                <Clock className="size-5.5" />
              </div>
              <h4 className="font-extrabold text-primary-deep text-sm">24/7 Emergency Care</h4>
              <p className="text-xs text-muted-foreground mt-1.5 max-w-[170px] leading-relaxed">
                We are here when you need us most.
              </p>
            </div>
            
            {/* Item 2 */}
            <div className="flex flex-col items-center text-center px-2 md:pl-4">
              <div className="size-12 rounded-full bg-teal/10 text-teal flex items-center justify-center mb-3">
                <UserCheck className="size-5.5" />
              </div>
              <h4 className="font-extrabold text-primary-deep text-sm">Experienced Doctors</h4>
              <p className="text-xs text-muted-foreground mt-1.5 max-w-[170px] leading-relaxed">
                Qualified and caring medical professionals.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center px-2 md:pl-4">
              <div className="size-12 rounded-full bg-pink/10 text-pink flex items-center justify-center mb-3">
                <Heart className="size-5.5" />
              </div>
              <h4 className="font-extrabold text-primary-deep text-sm">Family-Focused Care</h4>
              <p className="text-xs text-muted-foreground mt-1.5 max-w-[170px] leading-relaxed">
                Compassionate care for every member of your family.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center text-center px-2 md:pl-4">
              <div className="size-12 rounded-full bg-teal/10 text-teal flex items-center justify-center mb-3">
                <ShieldCheck className="size-5.5" />
              </div>
              <h4 className="font-extrabold text-primary-deep text-sm">Safe & Hygienic Environment</h4>
              <p className="text-xs text-muted-foreground mt-1.5 max-w-[170px] leading-relaxed">
                Maintaining the highest standards of safety.
              </p>
            </div>

            {/* Item 5 */}
            <div className="flex flex-col items-center text-center px-2 md:pl-4 col-span-2 md:col-span-1">
              <div className="size-12 rounded-full bg-pink/10 text-pink flex items-center justify-center mb-3">
                <Award className="size-5.5" />
              </div>
              <h4 className="font-extrabold text-primary-deep text-sm">Care | Compassion | Trust</h4>
              <p className="text-xs text-muted-foreground mt-1.5 max-w-[170px] leading-relaxed">
                Our values define everything we do.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. ABOUT HOSPITAL & TIMINGS SECTION */}
      <section className="container-page py-12">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          {/* Left: About Text */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal>
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-primary-deep">About Sree Hospital</h2>
                <div className="h-[3px] w-16 bg-primary rounded-full" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mt-5">
                Sree Pediatric & General Hospital is dedicated to providing quality healthcare with a personal touch. Our mission is to offer comprehensive medical services in Pediatrics, Neonatal Care, General Medicine and Diabetes Care with compassion, expertise and commitment.
              </p>
            </Reveal>
          </div>
          
          {/* Middle: Building Image */}
          <div className="lg:col-span-3">
            <Reveal delay={100}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-soft bg-muted group">
                <img
                  src={interiorImg}
                  alt="Sree Hospital building exterior in Madanapalle"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Reveal>
          </div>
          
          {/* Right: Timings Card */}
          <div className="lg:col-span-4 relative">
            <Reveal delay={200} className="bg-primary-soft/40 border border-primary/10 rounded-3xl p-6 shadow-soft space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-primary-deep text-lg">OPD Timings</h3>
                <Clock className="size-5.5 text-primary" />
              </div>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CalendarDays className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-primary-deep">Monday - Saturday</h4>
                    <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
                      <p>10:00 AM - 02:00 PM</p>
                      <p>06:00 PM - 09:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CalendarDays className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-primary-deep">Sunday</h4>
                    <div className="text-xs text-muted-foreground mt-1">
                      <p>10:00 AM - 01:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            

          </div>
        </div>
      </section>

      {/* 5. DOCTORS SECTION */}
      <section className="bg-surface border-y border-border/60 section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Consultants"
              title="Meet our medical practitioners"
              description="Qualified and caring professionals guiding your family's health."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 mt-10 max-w-4xl mx-auto">
            {doctors.map((doctor, i) => (
              <Reveal key={doctor.slug} delay={i * 120}>
                <DoctorCard doctor={doctor} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section className="container-page section-y">
        <Reveal>
          <SectionHeading
            eyebrow="Departments"
            title="Our clinical specialties"
            description="Dedicated healthcare focus areas designed to address your family's needs."
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. WHY CHOOSE SREE HOSPITAL */}
      <section className="bg-surface border-y border-border/60">
        <div className="container-page pt-14">
          <Reveal>
            <SectionHeading
              eyebrow="Features"
              title="Why families choose Sree Hospital"
              description="A professional clinical environment prioritizing patient outcomes and honest communication."
            />
          </Reveal>
        </div>
        <FeatureList items={whyChooseUsFeatures} />
      </section>

      {/* 8. CLINICAL FACILITIES */}
      <section className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-teal to-primary rounded-[2.25rem] opacity-10 blur-md pointer-events-none" />
                <img
                  src={interiorImg}
                  alt="Sree Hospital interior reception and waiting area"
                  className="w-full aspect-[4/3] object-cover rounded-3xl shadow-card relative border border-border"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={100}>
              <SectionHeading
                eyebrow="Clinical Setup"
                title="Equipped for patient comfort and clean care"
                description=""
                align="left"
              />
            </Reveal>
            <Reveal delay={200} className="text-sm text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Our hospital is designed to be hygienic, clean, and child-friendly. We maintain separate rooms for consultations to protect patient privacy and reduce wait-time discomfort.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2 mt-4 text-foreground/90 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="size-2 rounded-full bg-primary" /> Clean Outpatient Cabins
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="size-2 rounded-full bg-teal" /> Comfortable Waiting Lounge
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="size-2 rounded-full bg-pink" /> Child Vaccination Support
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="size-2 rounded-full bg-sun" /> Newborn Care Monitoring
                </li>
              </ul>
            </Reveal>
            <Reveal delay={300} className="pt-2">
              <Button asChild variant="outline">
                <Link to="/facilities">View Clinical Facilities</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. PEDIATRIC CARE SPOTLIGHT */}
      <section className="bg-primary-soft/30 border-y border-border/50 section-y">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <Reveal>
                <span className="inline-flex rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary uppercase">
                  Pediatric Care
                </span>
                <h2 className="text-3xl font-extrabold text-primary-deep mt-3">
                  Children's health, growth & vaccine guidance
                </h2>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xl">
                  Consult for general children's health, standard vaccinations, growth metrics, and common childhood infections. Led by our Children & Neonatal Specialist, Dr. S. Subrahmanyam. We focus on a gentle, parent-friendly approach.
                </p>
                <div className="pt-4 flex gap-3">
                  <Button asChild variant="hero">
                    <Link to="/pediatric-care">View Pediatric Details</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <img
                  src={pediatricImg}
                  alt="Pediatric consultation at Sree Hospital"
                  className="w-full aspect-[4/3] object-cover rounded-3xl shadow-soft border border-border bg-muted"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEONATAL CARE SPOTLIGHT */}
      <section className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 order-last lg:order-first">
            <Reveal>
              <img
                src={neonatalImg}
                alt="Newborn baby neonatal care at Sree Hospital"
                className="w-full aspect-[4/3] object-cover rounded-3xl shadow-soft border border-border bg-muted"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <Reveal delay={150}>
              <span className="inline-flex rounded-full bg-pink/10 px-3.5 py-1.5 text-xs font-bold text-pink uppercase">
                Neonatal Care
              </span>
              <h2 className="text-3xl font-extrabold text-primary-deep mt-3">
                Specialized newborn monitoring & guidance
              </h2>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xl">
                The first few weeks of a baby's life require delicate attention. Sree Hospital provides neonatal reviews, breastfeeding support, and physical monitoring to ensure new parents feel confident and newborn infants stay healthy.
              </p>
              <div className="pt-4">
                <Button asChild variant="pink">
                  <Link to="/neonatal-care">View Neonatal Details</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. GENERAL MEDICINE & DIABETES SPOTLIGHT */}
      <section className="bg-surface border-y border-border/60 section-y">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <Reveal className="bg-card rounded-3xl p-8 border border-border shadow-soft flex flex-col justify-between">
            <div>
              <span className="inline-flex rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal uppercase">
                General Medicine
              </span>
              <h3 className="text-2xl font-extrabold text-primary-deep mt-3">Adult General Medicine</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Outpatient reviews, diagnostic recommendations, and prescription management for common adult illnesses. Led by Dr. J. Revathi, MD.
              </p>
            </div>
            <div className="mt-6 pt-2">
              <Button asChild variant="teal">
                <Link to="/general-medicine">General Medicine Page</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal className="bg-card rounded-3xl p-8 border border-border shadow-soft flex flex-col justify-between" delay={120}>
            <div>
              <span className="inline-flex rounded-full bg-sun/12 px-3 py-1 text-xs font-bold text-sun-foreground uppercase">
                Diabetes Care
              </span>
              <h3 className="text-2xl font-extrabold text-primary-deep mt-3">Diabetes Consultation</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Ongoing glucose monitoring reviews, lifestyle adjustments, and prescription safety reviews for long-term health.
              </p>
            </div>
            <div className="mt-6 pt-2">
              <Button asChild variant="hero">
                <Link to="/diabetes-care">Diabetes Care Page</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 13. APPOINTMENT CTA */}
      <CTASection
        title="Schedule a consultation with our doctors"
        description="Book a slot online or call directly. We will confirm your timing and details promptly."
      />

      {/* 14. LOCATION, CONTACT & TIMINGS */}
      <section className="container-page section-y border-t border-border/40">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow="Visit Us"
                title="Directions & timings"
                description=""
                align="left"
              />
            </Reveal>
            <Reveal delay={100} className="space-y-4 text-sm">
              <p className="text-muted-foreground leading-relaxed">
                Sree Hospital is situated near NTR Circle in Madanapalle, Andhra Pradesh. We welcome outpatient consultations during the slots detailed below.
              </p>
              <div className="font-semibold text-foreground/90 flex items-start gap-2.5">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {hospital.address.line1}<br />
                  {hospital.address.line2}<br />
                  {hospital.address.city}, {hospital.address.state} - {hospital.address.pincode}
                </span>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <TimingsCard />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={200} className="h-full min-h-[350px] overflow-hidden rounded-3xl border border-border shadow-soft bg-muted relative">
              <iframe
                title="Google Maps Location for Sree Pediatric & General Hospital"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.756285890881!2d78.50280807572704!3d13.62691909941199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2f9746f3ee82d%3A0xcb135e5d36e84d41!2sSree%20Pediatric%20and%20General%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`}
                className="w-full h-full min-h-[350px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <FAQSection />

      {/* Medical Disclaimer block */}
      <section className="pb-10">
        <Reveal>
          <Disclaimer />
        </Reveal>
      </section>
    </div>
  );
}
