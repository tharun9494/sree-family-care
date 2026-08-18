import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@/data/hospital";

export function HealthArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span className="inline-flex w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
        {article.category}
      </span>
      <h3 className="mt-4 text-lg font-bold text-primary-deep">
        <Link to="/health-tips/$slug" params={{ slug: article.slug }} className="hover:underline">
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5" aria-hidden="true" /> {article.readTime}
        </span>
        <Link
          to="/health-tips/$slug"
          params={{ slug: article.slug }}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
        >
          Read
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
