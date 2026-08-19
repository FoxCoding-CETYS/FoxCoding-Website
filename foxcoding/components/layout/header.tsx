"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { firaCode } from "@/app/fonts";
import DarkLight from "@/components/ui/darkLight";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/foxcoders", label: "FoxCoders" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/95 text-white backdrop-blur-xl">
      <div className="site-container flex h-[76px] items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="FoxCoding home"
        >
          <span className="size-11">
            <Image
              src="/SmallLogo.png"
              alt=""
              width={38}
              height={38}
              priority
            />
          </span>
          <span
            className={`${firaCode.className} truncate text-sm font-bold tracking-[-0.03em] sm:text-base`}
          >
            <span className="text-accent">Fox</span>Coding
            <span className="hidden text-white/45 sm:inline"> / CETYS</span>
          </span>
        </Link>

        <nav
          className="hidden items-center rounded-full p-1 lg:flex"
          aria-label="Main navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                isActive(item.href)
                  ? "bg-accent text-accent-foreground"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:foxcoding@cetys.edu.mx"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent sm:inline-flex"
          >
            Contact
          </a>
          <DarkLight />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-accent/70 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="site-container flex flex-col gap-1 py-4"
          aria-label="Mobile navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive(item.href)
                  ? "bg-accent text-accent-foreground"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:foxcoding@cetys.edu.mx"
            className="rounded-xl px-4 py-3 text-sm font-semibold text-white/70 hover:bg-white/5 hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
