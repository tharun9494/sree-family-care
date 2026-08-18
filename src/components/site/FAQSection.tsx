import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { faqs } from "@/data/hospital";

export function FAQSection({ items = faqs }: { items?: { q: string; a: string }[] }) {
  return (
    <section className="container-page section-y">
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Answers to the questions families ask us most often."
        />
      </Reveal>
      <Reveal className="mx-auto mt-10 max-w-3xl" delay={80}>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-primary-deep hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
