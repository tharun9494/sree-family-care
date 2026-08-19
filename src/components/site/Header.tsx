import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, Clock, MapPin, CalendarDays, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { hospital } from "@/data/hospital";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Services", to: "/services", hasChevron: true },
  { label: "Facilities", to: "/facilities" },
  { label: "Contact Us", to: "/contact" },
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
      {/* Top micro info bar */}
      <div className="hidden bg-primary-deep text-primary-foreground lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs font-semibold">
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            {hospital.address.line1}, {hospital.address.city} – {hospital.address.pincode}
          </span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Clock className="size-3.5 text-teal" aria-hidden="true" />
              Mon–Sat 10:00 AM – 2:00 PM, 6:00 PM – 9:00 PM · Sun 10:00 AM – 1:00 PM
            </span>
            <a href={hospital.phoneHref} className="font-bold hover:underline flex items-center gap-1">
              <Phone className="size-3" /> {hospital.phone}
            </a>
          </span>
        </div>
      </div>

      {/* Main navigation header */}
      <div
        className={cn(
          "border-b border-border/70 bg-background/95 backdrop-blur transition-all duration-300",
          scrolled ? "shadow-soft" : "",
        )}
      >
        <div
          className={cn(
            "container-page flex items-center justify-between transition-all duration-300 px-4",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Logo />

          {/* Nav Links (spacious, starts displaying at lg) */}
          <nav aria-label="Main navigation" className="hidden items-center gap-2 lg:flex xl:gap-4.5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="relative px-2 py-1.5 text-xs lg:text-sm font-extrabold tracking-tight transition-colors hover:text-primary group"
              >
                {({ isActive }) => (
                  <span className={cn(
                    "flex items-center gap-0.5",
                    isActive ? "text-primary" : "text-foreground/75"
                  )}>
                    {item.label}
                    {item.hasChevron && <ChevronDown className="size-3" />}
                    
                    {/* Active line indicator matching screenshot */}
                    {isActive && (
                      <span className="absolute bottom-[-16px] left-2 right-2 h-[3px] bg-primary rounded-full" />
                    )}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action buttons (desktop) */}
          <div className="hidden items-center gap-3 lg:flex shrink-0">
            {/* Call Now button card */}
            <a
              href={hospital.phoneHref}
              className="flex items-center gap-2.5 border border-border/80 bg-background hover:bg-muted/30 px-3.5 py-2 rounded-2xl shadow-soft transition-all duration-200 shrink-0"
              style={{ whiteSpace: "nowrap" }}
            >
              <Phone className="size-3.5 text-primary shrink-0" aria-hidden="true" />
              <div className="flex flex-col text-left leading-none" style={{ whiteSpace: "nowrap" }}>
                <span className="text-[0.62rem] font-black text-primary uppercase tracking-wider">Call Now</span>
                <span className="text-xs sm:text-sm font-extrabold text-[#1e293b] mt-0.5" style={{ whiteSpace: "nowrap" }}>{hospital.phone}</span>
              </div>
            </a>
            
            {/* Book Appointment button */}
            <Button asChild variant="hero" className="rounded-xl h-10 px-4 text-xs font-bold shadow-soft shrink-0">
              <Link to="/appointment" className="flex items-center gap-2">
                <CalendarDays className="size-3.5 text-white" aria-hidden="true" />
                <span className="whitespace-nowrap">Book Appointment</span>
              </Link>
            </Button>
          </div>

          {/* Mobile navigation burger icon */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild variant="outline" size="icon" aria-label={`Call ${hospital.phone}`} className="h-9 w-9">
              <a href={hospital.phoneHref}>
                <Phone className="size-4" />
              </a>
            </Button>
            <Button
              variant="soft"
              size="icon"
              className="h-9 w-9"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
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
