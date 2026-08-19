import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Disclaimer } from "@/components/site/ContentSections";
import { articles, hospital } from "@/data/hospital";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Tag } from "lucide-react";

export const Route = createFileRoute("/health-tips/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) {
      throw notFound();
    }
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.article.title} - ${hospital.shortName}` : `Health Tip - ${hospital.shortName}` },
      { name: "description", content: loaderData ? loaderData.article.excerpt : "Health tip details" }
    ]
  }),
  component: HealthTipDetailPage,
});

function HealthTipDetailPage() {
  const { article } = Route.useLoaderData();

  return (
    <div className="bg-background">
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
      >
        <Button asChild variant="outline">
          <Link to="/health-tips">
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to Articles
          </Link>
        </Button>
      </PageHero>

      <section className="container-page section-y max-w-3xl">
        <Reveal className="flex items-center gap-5 border-b border-border pb-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 font-semibold text-primary">
            <Tag className="size-4" /> {article.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" /> {article.readTime}
          </span>
        </Reveal>

        {/* Article Body */}
        <Reveal className="mt-8 space-y-6">
          {article.body.map((paragraph, index) => (
            <p
              key={index}
              className="text-base sm:text-lg leading-relaxed text-foreground/85 first-of-type:font-medium first-of-type:text-foreground"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className="mt-12 pt-8 border-t border-border flex justify-between items-center">
          <Button asChild variant="soft">
            <Link to="/health-tips">
              <ArrowLeft className="size-4" aria-hidden="true" /> All Health Tips
            </Link>
          </Button>
          <Button asChild variant="hero">
            <Link to="/appointment">Book Appointment</Link>
          </Button>
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
