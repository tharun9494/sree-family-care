import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { TimingsCard } from "@/components/site/TimingsCard";
import { Disclaimer } from "@/components/site/ContentSections";
import { hospital, mapsDirectionsUrl } from "@/data/hospital";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ExternalLink, Mail, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact & Directions - ${hospital.name}` },
      { name: "description", content: `Get location details, phone contact links, and OPD timings for Sree Pediatric & General Hospital near NTR Circle in Madanapalle.` }
    ]
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Reach Us"
        title="Contact & Location"
        description="OPD timings, address, and interactive Google Map location for Sree Hospital in Madanapalle."
      />

      <section className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal className="bg-card border border-border rounded-3xl p-6 shadow-soft space-y-6">
              <h2 className="text-2xl font-extrabold text-primary-deep">Hospital Details</h2>
              
              <div className="space-y-4 text-sm">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-foreground">Clinic Address</h3>
                    <p className="text-muted-foreground mt-1 leading-relaxed">
                      {hospital.address.line1},<br />
                      {hospital.address.line2},<br />
                      {hospital.address.city}, {hospital.address.state} – {hospital.address.pincode}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">(Opposite Sai Ganesh Hotel, Near NTR Circle)</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 pt-2">
                  <Phone className="size-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-foreground">Phone Contact</h3>
                    <p className="text-muted-foreground mt-1">
                      <a href={hospital.phoneHref} className="text-primary font-semibold hover:underline">
                        {hospital.phone}
                      </a>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Call for appointments or child/neonatal queries.</p>
                  </div>
                </div>

                {/* Emergency */}
                <div className="flex gap-4 pt-2">
                  <ShieldAlert className="size-5 text-pink shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-foreground">Emergency Cover</h3>
                    <p className="text-pink font-semibold mt-1">{hospital.emergency}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Timings card */}
            <Reveal delay={100}>
              <TimingsCard />
            </Reveal>
          </div>

          {/* Map Embed and Directions */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal className="overflow-hidden rounded-3xl border border-border shadow-soft bg-muted h-[400px] relative">
              <iframe
                title="Google Maps Location for Sree Pediatric & General Hospital"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.756285890881!2d78.50280807572704!3d13.62691909941199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2f9746f3ee82d%3A0xcb135e5d36e84d41!2sSree%20Pediatric%20and%20General%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
            
            <Reveal className="flex justify-start pt-2" delay={150}>
              <Button asChild variant="hero" size="lg">
                <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                  Get Driving Directions <ExternalLink className="size-4" />
                </a>
              </Button>
            </Reveal>
          </div>
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
