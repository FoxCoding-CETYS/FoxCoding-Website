import type { Metadata } from "next";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import { ArrowLeft, FileCode2 } from "lucide-react";
import { notFound } from "next/navigation";

const contributorsDirectory = path.join(
  process.cwd(),
  "public",
  "contributors",
);

type PageProps = {
  params: Promise<{ id: string }>;
};

async function getContributorFile(id: string) {
  const entries = await fs.readdir(contributorsDirectory, {
    withFileTypes: true,
  });
  const contributor = entries.find(
    (entry) => entry.isDirectory() && entry.name === id,
  );

  if (!contributor) return null;

  const htmlPath = path.join(
    contributorsDirectory,
    contributor.name,
    "index.html",
  );

  try {
    const stats = await fs.stat(htmlPath);
    return stats.isFile() ? { id: contributor.name, size: stats.size } : null;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const entries = await fs.readdir(contributorsDirectory, {
    withFileTypes: true,
  });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({ id: entry.name }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `${id} | FoxCoding`,
    description: `FoxCoder profile for ${id}`,
  };
}

export default async function FoxCoderPage({ params }: PageProps) {
  const { id } = await params;
  const contributor = await getContributorFile(id);

  if (!contributor) notFound();

  if (contributor.size === 0) {
    return (
      <section className="site-container flex min-h-[calc(100svh-76px)] items-center justify-center py-20">
        <div className="surface-card max-w-lg p-8 text-center sm:p-10">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
            <FileCode2 className="size-6" />
          </span>
          <h1 className="mt-6 text-3xl font-black tracking-tight">
            Profile coming soon
          </h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            The file{" "}
            <code>public/contributors/{contributor.id}/index.html</code> exists,
            but it does not contain any HTML yet.
          </p>
          <Link
            href="/foxcoders"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold transition hover:text-accent"
          >
            <ArrowLeft className="size-4" /> Back to FoxCoders
          </Link>
        </div>
      </section>
    );
  }

  return (
    <iframe
      src={`/contributors/${encodeURIComponent(contributor.id)}/index.html`}
      title={`${contributor.id} FoxCoder profile`}
      className="block min-h-[calc(100svh-76px)] w-full border-0 bg-white"
      sandbox="allow-scripts allow-forms allow-modals allow-popups allow-downloads"
    />
  );
}
