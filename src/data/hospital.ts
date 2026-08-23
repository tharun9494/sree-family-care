/**
 * Single source of truth for all hospital information.
 * Hospital staff can update this file to change details site-wide.
 * Only verified information should be added here.
 */

export const hospital = {
  name: "Sree Pediatric & General Hospital",
  shortName: "Sree Hospital",
  tagline: "Hospital for your Family",
  // Primary contact number — change here to update the whole site.
  phone: "63033 59841",
  phoneHref: "tel:+916303359841",
  // Address is kept editable so the hospital can verify exact spelling.
  address: {
    line1: "II-256-4-H1, Opp. Sai Ganesh Hotel",
    line2: "Near NTR Circle, Society Colony",
    city: "Madanapalle",
    state: "Andhra Pradesh",
    pincode: "517325",
  },
  mapsQuery: "Sree Pediatric and General Hospital, NTR Circle, Madanapalle, Andhra Pradesh 517325",
  emergency: "24 Hours / 7 Days Emergency Services",
  // Social profiles: add real URLs only. Empty string = link hidden.
  social: {
    instagram: "",
    youtube: "",
    facebook: "",
  },
} as const;

export const addressLine = `${hospital.address.line1}, ${hospital.address.line2}, ${hospital.address.city} – ${hospital.address.pincode}, ${hospital.address.state}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(hospital.mapsQuery)}&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hospital.mapsQuery)}`;

/** OPD / consultation timings — single source of truth. */
export const timings = [
  { days: "Monday – Saturday", slots: ["10:00 AM – 2:00 PM", "6:00 PM – 9:00 PM"] },
  { days: "Sunday", slots: ["10:00 AM – 1:00 PM"] },
];

export type Doctor = {
  slug: string;
  name: string;
  qualifications: string;
  extra?: string;
  role: string;
  description: string;
  focus: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "dr-s-subrahmanyam",
    name: "Dr. S. Subrahmanyam",
    qualifications: "M.B.B.S., N-Dch",
    role: "Children & Neonatal Specialist",
    description:
      "Dr. S. Subrahmanyam consults for children's health and newborn care at Sree Pediatric & General Hospital, with a calm, parent-friendly approach to pediatric and neonatal consultation.",
    focus: ["Pediatric consultation", "Neonatal care", "Child wellness", "Vaccination guidance"],
  },
  {
    slug: "dr-j-revathi",
    name: "Dr. J. Revathi",
    qualifications: "M.B.B.S., M.D. (General Medicine)",
    extra: "Fellowship in Diabetes Mellitus",
    role: "General Physician",
    description:
      "Dr. J. Revathi consults for adult general medicine and diabetes care, focusing on clear explanations, lifestyle guidance and regular follow-up for long-term health.",
    focus: ["General medicine", "Diabetes care", "Preventive health", "Follow-up care"],
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  to: string;
  accent: "blue" | "teal" | "pink" | "sun";
};

export const services: Service[] = [
  {
    slug: "pediatric-care",
    title: "Pediatric Care",
    short: "Consultation and care for children's everyday and general health needs.",
    to: "/pediatric-care",
    accent: "blue",
  },
  {
    slug: "neonatal-care",
    title: "Neonatal Care",
    short: "Specialised attention and monitoring for newborn babies.",
    to: "/neonatal-care",
    accent: "pink",
  },
  {
    slug: "general-medicine",
    title: "General Medicine",
    short: "Adult general medical consultation and ongoing management.",
    to: "/general-medicine",
    accent: "teal",
  },
  {
    slug: "diabetes-care",
    title: "Diabetes Care",
    short: "Consultation, monitoring guidance and education for diabetes.",
    to: "/diabetes-care",
    accent: "sun",
  },
  {
    slug: "vaccination",
    title: "Vaccination",
    short: "Vaccination services for children, discussed with your doctor.",
    to: "/services",
    accent: "blue",
  },
];

export const departments = [
  "Pediatrics",
  "Neonatology",
  "General Medicine",
  "Diabetes Care",
  "Vaccination",
];

export const faqs = [
  {
    q: "How can I book an appointment?",
    a: `You can request an appointment through the appointment form on this website, or call the hospital directly on ${hospital.phone}. Our team will contact you to confirm availability.`,
  },
  {
    q: "Where is Sree Pediatric & General Hospital located?",
    a: `The hospital is located at ${addressLine}.`,
  },
  {
    q: "What departments are available?",
    a: "Pediatrics, Neonatology, General Medicine, Diabetes Care and Vaccination.",
  },
  {
    q: "What are the consultation timings?",
    a: "Monday to Saturday: 10:00 AM – 2:00 PM and 6:00 PM – 9:00 PM. Sunday: 10:00 AM – 1:00 PM.",
  },
  {
    q: "How can I contact the hospital?",
    a: `You can call ${hospital.phone} for appointments, queries and emergency assistance.`,
  },
  {
    q: "Does the hospital provide pediatric care?",
    a: "Yes. Pediatric consultation and general children's healthcare are provided by our Children & Neonatal Specialist.",
  },
  {
    q: "Is neonatal care available?",
    a: "Yes. Neonatal care for newborn babies is available at the hospital.",
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  body: string[];
};

export const medicalDisclaimer =
  "This information is for general awareness and does not replace consultation with a qualified medical professional.";

export const articles: Article[] = [
  {
    slug: "when-to-consult-a-pediatrician-for-fever",
    title: "When Should Parents Consult a Pediatrician for Fever?",
    category: "Children's Health",
    excerpt:
      "Fever is common in childhood. Knowing when to watch at home and when to see a doctor helps parents respond calmly.",
    readTime: "4 min read",
    body: [
      "Fever is one of the most common reasons parents bring a child to a pediatrician. In most children, fever is a sign that the body is responding to an infection, and it often settles on its own.",
      "General awareness points many parents find useful: keep the child comfortable, offer fluids regularly, watch how active the child is between temperature peaks, and avoid giving any medicine that has not been advised for your child.",
      "It is generally advisable to consult a doctor if the child is very young, if fever continues for several days, if the child is unusually drowsy or irritable, if feeding or fluid intake drops noticeably, or if you are simply unsure. Parents know their child best — when something feels different, a consultation is reasonable.",
      "A pediatric consultation allows the doctor to examine the child, understand the pattern of the illness and advise what is appropriate for that child.",
    ],
  },
  {
    slug: "newborn-care-basics-for-parents",
    title: "Newborn Care: Important Things Every Parent Should Know",
    category: "Newborn Care",
    excerpt:
      "The first weeks with a newborn bring many questions. Here are general points that help new parents feel more prepared.",
    readTime: "5 min read",
    body: [
      "The newborn period is a time of rapid change. Feeding, sleep and weight gain patterns settle gradually, and small day-to-day variations are common.",
      "General awareness points: maintain clean hands before handling the baby, keep the baby warm and comfortable, support feeding as advised by your doctor, and keep track of feeding, urine output and sleep in the early weeks.",
      "Speak to your doctor if the baby is feeding poorly, is unusually sleepy or difficult to wake, has breathing that looks laboured, or if you notice anything that concerns you. Early consultation is always reasonable for newborns.",
      "Regular newborn check-ups give the doctor an opportunity to review growth and answer the questions parents naturally have.",
    ],
  },
  {
    slug: "understanding-diabetes-awareness",
    title: "Understanding Diabetes: Simple Health Awareness",
    category: "Diabetes",
    excerpt:
      "Diabetes is a long-term condition that can be managed well with consultation, monitoring and steady lifestyle habits.",
    readTime: "4 min read",
    body: [
      "Diabetes affects how the body manages blood sugar. It is a long-term condition, and consistent care usually matters more than any single change.",
      "General awareness points: balanced meals with regular timings, physical activity as appropriate for you, adequate sleep, and attending review appointments as advised.",
      "Monitoring and medication should always be discussed with your treating doctor. Targets and treatment differ from person to person, so self-adjusting medicines is not advisable.",
      "If you notice increased thirst, frequent urination, unusual tiredness or unexplained weight change, a medical consultation is recommended.",
    ],
  },
  {
    slug: "vaccination-why-it-matters-for-children",
    title: "Vaccination: Why It Matters for Children",
    category: "Vaccination",
    excerpt:
      "Vaccination is a routine part of preventive childhood healthcare. Your doctor can advise what is appropriate for your child.",
    readTime: "3 min read",
    body: [
      "Vaccination is a well-established part of preventive healthcare for children and is discussed at routine pediatric visits.",
      "Parents often have questions about timing, mild reactions after a vaccine and what to expect. These are best answered by the doctor who knows your child's health history.",
      "We do not publish a vaccination schedule online, because the appropriate schedule for a child should be confirmed by the treating doctor during a consultation.",
      "If you are unsure whether your child's vaccinations are up to date, bring any previous records to your consultation.",
    ],
  },
  {
    slug: "preventive-health-checks-for-adults",
    title: "Preventive Health: Small Habits That Support Adult Health",
    category: "Preventive Healthcare",
    excerpt:
      "Preventive care focuses on regular review and steady habits rather than reacting only when symptoms appear.",
    readTime: "3 min read",
    body: [
      "Preventive healthcare means paying attention to health before problems become difficult to manage.",
      "General awareness points: keep an eye on weight and activity levels, maintain regular sleep, limit tobacco and alcohol, and attend review consultations if you have a long-term condition.",
      "Which checks are appropriate depends on age, family history and existing conditions. A general physician can advise what is suitable for you.",
    ],
  },
  {
    slug: "family-health-when-to-see-a-doctor",
    title: "Family Health: Knowing When to See a Doctor",
    category: "Family Health",
    excerpt:
      "Simple guidance for families on when a symptom is worth a consultation rather than waiting.",
    readTime: "3 min read",
    body: [
      "Families often wonder whether a symptom needs a consultation. As a general rule, symptoms that are severe, persistent, worsening or unusual for that person deserve medical attention.",
      "For children and newborns, a lower threshold for consultation is sensible, because their condition can change more quickly.",
      "Keeping a simple record of symptoms, timings and any medicines taken helps the doctor during the consultation.",
    ],
  },
];

export const articleCategories = [
  "Children's Health",
  "Newborn Care",
  "Vaccination",
  "Diabetes",
  "General Medicine",
  "Preventive Healthcare",
  "Family Health",
];
