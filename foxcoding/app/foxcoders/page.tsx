import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";
import { getContributors } from "@/lib/get-contributors";
import { HeroSection } from "@/components/sections/heroSection";

export default async function ContributorsPage() {
  const contributors = await getContributors("public/contributors");
  return (
    <>
      <HeroSection first_word="Meet the" second_word="FoxCoders" />
      <section className="section-shell">
        <div className="site-container">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">The community</p>
            <h2 className="section-heading mt-4">
              Not just a team. A family of builders.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contributors.map((contributor) => (
              <article
                key={contributor.id}
                className="surface-card flex flex-col p-7"
              >
                <div className="mb-7 grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <UserRound className="size-5" />
                </div>
                <h3 className="text-2xl font-black tracking-tight">
                  {contributor.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
                  {contributor.role}
                </p>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {contributor.bio}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {contributor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/foxcoders/${encodeURIComponent(contributor.id)}`}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold transition hover:text-accent"
                >
                  View profile <ArrowUpRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
