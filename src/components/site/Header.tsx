import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { hospital } from "@/data/hospital";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Services", to: "/services" },
  { label: "Facilities", to: "/facilities" },
  { label: "Health Tips", to: "/health-tips" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary-deep text-primary-foreground lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5" aria-hidden="true" />
            {hospital.address.city}, {hospital.address.state} – {hospital.address.pincode}
          </span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Clock className="size-3.5" aria-hidden="true" />
              Mon–Sat 10 AM – 2 PM, 6 PM – 9 PM · Sun 10 AM – 1 PM
            </span>
            <a href={hospital.phoneHref} className="font-semibold hover:underline">
              {hospital.phone}
            </a>
          </span>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-border/70 bg-background/90 backdrop-blur transition-all duration-300",
          scrolled ? "shadow-soft" : "",
        )}
      >
        <div
          className={cn(
            "container-page flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Logo />

          <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary bg-primary-soft" }}
                inactiveProps={{ className: "text-foreground/75" }}
                className="rounded-full px-3.5 py-2 text-sm font-semibold transition-colors hover:bg-primary-soft hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="outline">
              <a href={hospital.phoneHref}>
                <Phone aria-hidden="true" /> Call Now
              </a>
            </Button>
            <Button asChild variant="hero">
              <Link to="/appointment">Book an Appointment</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild variant="outline" size="icon" aria-label={`Call ${hospital.phone}`}>
              <a href={hospital.phoneHref}>
                <Phone aria-hidden="true" />
              </a>
            </Button>
            <Button
              variant="soft"
              size="icon"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-[calc(var(--spacing)*20)] bottom-0 z-40 overflow-y-auto border-t border-border bg-background px-5 pt-4 pb-28 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-primary-soft text-primary" }}
                className="rounded-2xl px-4 py-3.5 text-base font-semibold text-foreground/85 transition-colors hover:bg-primary-soft"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-2xl bg-blue-gradient px-4 py-3.5 text-center text-base font-semibold text-primary-foreground"
            >
              Book an Appointment
            </Link>
            <a
              href={hospital.phoneHref}
              className="rounded-2xl border border-primary/25 px-4 py-3.5 text-center text-base font-semibold text-primary-deep"
            >
              Call {hospital.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
