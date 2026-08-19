import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Mail } from "lucide-react";
import { firaCode } from "@/app/fonts";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-dark text-white">
      <div className="site-container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Image src="/SmallLogo.png" alt="" width={40} height={40} />
              <p className={`${firaCode.className} font-bold`}>
                <span className="text-accent">Fox</span>Coding
              </p>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              A student-led community at CETYS University building software,
              competing, and learning together.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href="mailto:foxcoding@cetys.edu.mx"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-accent"
            >
              <Mail className="size-4" /> foxcoding@cetys.edu.mx{" "}
              <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="flex gap-2">
              <Link
                aria-label="Instagram"
                href="https://www.instagram.com/foxcoding.cpp?igsh=MTZxcjZwMXE5M2lrMQ=="
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/65 transition hover:border-accent/60 hover:text-accent"
              >
                <Instagram className="size-[18px]" />
              </Link>
              <Link
                aria-label="GitHub"
                href="https://github.com/FoxCoding-CETYS"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/65 transition hover:border-accent/60 hover:text-accent"
              >
                <Github className="size-[18px]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} FoxCoding Club.</p>
          <p className={firaCode.className}>foxcoding.cpp</p>
        </div>
      </div>
    </footer>
  );
}
