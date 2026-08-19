import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Disclaimer } from "@/components/site/ContentSections";
import { hospital, doctors, services } from "@/data/hospital";
import { Calendar, Phone, CheckCircle, ArrowRight, Clock } from "lucide-react";

// Query parameter validation
type AppointmentSearchParams = {
  doctor?: string;
};

// Zod validation schema
const appointmentSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  email: z.string().email("Please enter a valid email address").or(z.literal("")),
  department: z.string().min(1, "Please select a department"),
  doctor: z.string().min(1, "Please select a doctor"),
  date: z.string().refine((val) => {
    if (!val) return false;
    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, {
    message: "Date cannot be in the past"
  }),
  slot: z.string().min(1, "Please select a consultation slot"),
  notes: z.string().max(400, "Notes cannot exceed 400 characters").optional()
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const Route = createFileRoute("/appointment")({
  validateSearch: (search: Record<string, unknown>): AppointmentSearchParams => {
    return {
      doctor: typeof search.doctor === "string" ? search.doctor : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: `Book an Appointment - ${hospital.name}` },
      { name: "description", content: `Request a consultation slot online for pediatric, neonatal, general medicine or diabetes care at Sree Hospital.` }
    ]
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
  const search = Route.useSearch();
  const [submittedData, setSubmittedData] = useState<AppointmentFormValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      department: "",
      doctor: search.doctor || "",
      date: "",
      slot: "",
      notes: ""
    }
  });

  const selectedDept = watch("department");
  const selectedDoctor = watch("doctor");

  // Automatically select department based on pre-selected doctor
  useState(() => {
    if (search.doctor) {
      const doc = doctors.find(d => d.name === search.doctor);
      if (doc) {
        const dept = doc.role.includes("Children") || doc.role.includes("Neonatal")
          ? "Pediatrics & Neonatology"
          : "General Medicine & Diabetes";
        setValue("department", dept);
      }
    }
  });

  // Watch doctor selection and sync department
  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const docName = e.target.value;
    setValue("doctor", docName);
    const doc = doctors.find(d => d.name === docName);
    if (doc) {
      const dept = doc.role.includes("Children") || doc.role.includes("Neonatal")
        ? "Pediatrics & Neonatology"
        : "General Medicine & Diabetes";
      setValue("department", dept);
    }
  };

  const onSubmit = async (values: AppointmentFormValues) => {
    setIsSubmitting(true);
    // Simulate backend response
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmittedData(values);
  };

  if (submittedData) {
    return (
      <div className="bg-background">
        <PageHero
          eyebrow="Success"
          title="Booking Request Received"
          description="Thank you for choosing Sree Hospital. We have received your booking details."
        />
        
        <section className="container-page section-y max-w-2xl">
          <Reveal className="border border-border bg-card rounded-3xl p-8 shadow-card text-center space-y-6">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal/12 text-teal">
              <CheckCircle className="size-10" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-primary-deep">We will contact you shortly!</h2>
              <p className="text-sm text-muted-foreground">
                Our clinic representative will call you on <strong className="text-foreground">{submittedData.phone}</strong> to confirm the exact consultation hour and finalize your appointment slots.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-5 text-left border border-border/60 divide-y divide-border/60 text-sm">
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-muted-foreground">Patient Name</span>
                <span className="font-medium text-foreground">{submittedData.fullName}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-muted-foreground">Specialist</span>
                <span className="font-medium text-foreground">{submittedData.doctor}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-muted-foreground">Selected Date</span>
                <span className="font-medium text-foreground">{submittedData.date}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-muted-foreground">Time Slot</span>
                <span className="font-medium text-foreground">{submittedData.slot}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild variant="hero">
                <Link to="/">Go to Homepage</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={hospital.phoneHref}>
                  <Phone className="size-4" /> Call Clinic Now
                </a>
              </Button>
            </div>
          </Reveal>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Appointments"
        title="Schedule a Consultation"
        description="Request an outpatient clinical slot. Our hospital team will verify doctor availability and contact you to confirm."
      />

      <section className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Appointment Form */}
          <div className="lg:col-span-8">
            <Reveal className="border border-border bg-card rounded-3xl p-6 sm:p-8 shadow-soft">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-bold text-primary-deep">
                      Full Name <span className="text-pink">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="e.g. Tarun Kumar"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-xs font-semibold text-pink">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-primary-deep">
                      Indian Mobile Number <span className="text-pink">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="e.g. 9876543210"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-xs font-semibold text-pink">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-primary-deep">
                      Email Address <span className="text-muted-foreground text-xs">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="e.g. tarun@gmail.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs font-semibold text-pink">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Doctor Select */}
                  <div className="space-y-2">
                    <label htmlFor="doctor" className="text-sm font-bold text-primary-deep">
                      Select Doctor <span className="text-pink">*</span>
                    </label>
                    <select
                      id="doctor"
                      className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...register("doctor")}
                      onChange={handleDoctorChange}
                    >
                      <option value="">-- Choose Specialist --</option>
                      {doctors.map((d) => (
                        <option key={d.slug} value={d.name}>
                          {d.name} ({d.role})
                        </option>
                      ))}
                    </select>
                    {errors.doctor && (
                      <p className="text-xs font-semibold text-pink">{errors.doctor.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  {/* Department (Hidden/Disabled, synced automatically) */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-deep">Clinic Area</label>
                    <input
                      type="text"
                      className="flex h-11 w-full rounded-2xl border border-input bg-muted px-4 py-2 text-sm disabled:cursor-not-allowed opacity-80"
                      value={selectedDept || "Select doctor first"}
                      disabled
                    />
                    <input type="hidden" {...register("department")} />
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-bold text-primary-deep">
                      Preferred Date <span className="text-pink">*</span>
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...register("date")}
                    />
                    {errors.date && (
                      <p className="text-xs font-semibold text-pink">{errors.date.message}</p>
                    )}
                  </div>

                  {/* Slot */}
                  <div className="space-y-2">
                    <label htmlFor="slot" className="text-sm font-bold text-primary-deep">
                      Timing Session <span className="text-pink">*</span>
                    </label>
                    <select
                      id="slot"
                      className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...register("slot")}
                    >
                      <option value="">-- Choose Timing --</option>
                      <option value="Morning slot (10:00 AM – 2:00 PM)">Morning slot (10:00 AM – 2:00 PM)</option>
                      <option value="Evening slot (6:00 PM – 9:00 PM)">Evening slot (6:00 PM – 9:00 PM)</option>
                      <option value="Sunday slot (10:00 AM – 1:00 PM)">Sunday slot (10:00 AM – 1:00 PM)</option>
                    </select>
                    {errors.slot && (
                      <p className="text-xs font-semibold text-pink">{errors.slot.message}</p>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm font-bold text-primary-deep">
                    Additional Health Queries / Symptoms{" "}
                    <span className="text-muted-foreground text-xs">(Optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="flex min-h-[80px] w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Describe any symptoms or requests (vaccines, follow-up, general review)..."
                    {...register("notes")}
                  />
                  {errors.notes && (
                    <p className="text-xs font-semibold text-pink">{errors.notes.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button type="submit" variant="hero" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Processing booking request..." : "Submit Booking Request"}
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>

          {/* Quick timing reminder cards */}
          <aside className="lg:col-span-4 space-y-6">
            <Reveal className="bg-surface rounded-3xl p-6 border border-border">
              <h3 className="font-extrabold text-primary-deep text-lg flex items-center gap-2">
                <Clock className="size-5 text-primary" /> OPD Quick Summary
              </h3>
              <ul className="mt-4 space-y-3.5 text-xs text-muted-foreground">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Monday - Saturday Morning</span>
                  <strong className="text-foreground">10:00 AM – 2:00 PM</strong>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Monday - Saturday Evening</span>
                  <strong className="text-foreground">6:00 PM – 9:00 PM</strong>
                </li>
                <li className="flex justify-between">
                  <span>Sunday Consultations</span>
                  <strong className="text-foreground">10:00 AM – 1:00 PM</strong>
                </li>
              </ul>
            </Reveal>

            <Reveal className="bg-primary-soft/40 rounded-3xl p-6 border border-primary/10" delay={150}>
              <h3 className="font-extrabold text-primary-deep text-base">Direct Consultation Call</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                If you prefer to book an appointment directly over phone, or if you need support with pediatric/neonatal emergency cases, call Sree Hospital directly:
              </p>
              <a
                href={hospital.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-deep px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary transition-colors"
              >
                <Phone className="size-3.5" /> Call {hospital.phone}
              </a>
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
