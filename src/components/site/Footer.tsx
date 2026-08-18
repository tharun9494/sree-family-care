import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { addressLine, departments, hospital } from "@/data/hospital";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Services", to: "/services" },
  { label: "Facilities", to: "/facilities" },
  { label: "Health Tips", to: "/health-tips" },
  { label: "Contact", to: "/contact" },
  { label: "Appointment", to: "/appointment" },
] as const;

const departmentLinks: Record<string, string> = {
  Pediatrics: "/pediatric-care",
  Neonatology: "/neonatal-care",
  "General Medicine": "/general-medicine",
  "Diabetes Care": "/diabetes-care",
  Vaccination: "/services",
};

export function Footer() {
  const socials = [
    { label: "Instagram", url: hospital.social.instagram, Icon: Instagram },
    { label: "YouTube", url: hospital.social.youtube, Icon: Youtube },
    { label: "Facebook", url: hospital.social.facebook, Icon: Facebook },
  ].filter((s) => s.url);

  return (
    <footer className="mt-16 bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo inverted />
          <p className="max-w-xs text-sm text-primary-foreground/75">
            Family-focused healthcare in Madanapalle — pediatric, neonatal, general medicine and
            diabetes care.
          </p>
          {socials.length > 0 ? (
            <div className="flex gap-3 pt-1">
              {socials.map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <Icon className="size-4.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-bold tracking-wide uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Departments">
          <h2 className="text-sm font-bold tracking-wide uppercase">Departments</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            {departments.map((d) => (
              <li key={d}>
                <Link
                  to={departmentLinks[d] ?? "/services"}
                  className="transition-colors hover:text-primary-foreground"
                >
                  {d}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold tracking-wide uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{addressLine}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={hospital.phoneHref} className="hover:text-primary-foreground">
                {hospital.phone}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm font-semibold text-primary-foreground">
            {hospital.emergency}
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {hospital.name}. All rights reserved.
          </p>
          <p>Information on this website is for general awareness only.</p>
        </div>
      </div>
    </footer>
  );
}
