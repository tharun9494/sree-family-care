import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { Phone, CalendarDays } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sree Pediatric & General Hospital - Madanapalle" },
      { name: "description", content: "Sree Pediatric & General Hospital in Madanapalle offers quality children, neonatal, general medicine, and diabetes care. Hospital for your family." },
      { name: "author", content: "Sree Hospital" },
      { property: "og:title", content: "Sree Pediatric & General Hospital" },
      { property: "og:description", content: "Quality children, neonatal, general medicine, and diabetes care in Madanapalle. Hospital for your family." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Sree Pediatric & General Hospital",
    "alternateName": "Sree Hospital",
    "telephone": "+916303359841",
    "image": "https://sreehospital.com/assets/hero-family-care.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "II-256-4-H1, Opp. Sai Ganesh Hotel, Near NTR Circle, Society Colony",
      "addressLocality": "Madanapalle",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "517325",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.6268",
      "longitude": "78.5015",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "18:00",
        "closes": "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "13:00",
      },
    ],
    "medicalSpecialty": ["Pediatrics", "NeonatalMedicine", "GeneralPractice"],
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <MobileCTABar />
        
        {/* Desktop Fixed Floating Action Buttons (Fixed Bottom-Right) */}
        <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-2.5">
          <a
            href="tel:+916303359841"
            className="flex items-center justify-center gap-2 bg-[#8bc34a] hover:bg-[#7cb342] text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-card hover:-translate-y-0.5 transition-all duration-200"
          >
            <Phone className="size-3.5" /> Call Now
          </a>
          <Link
            to="/appointment"
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-deep text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-card hover:-translate-y-0.5 transition-all duration-200"
          >
            <CalendarDays className="size-3.5" /> Appointment
          </Link>
        </div>
      </div>
    </QueryClientProvider>
  );
}
