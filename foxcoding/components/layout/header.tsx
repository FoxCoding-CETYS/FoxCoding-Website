'use client';

import Link from "next/link";
import Image from "next/image";
import DarkLight from "@/components/ui/darkLight";
import { firaCode } from "@/app/fonts";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const nav = [
    { href: "/about", label: "About us" },
    { href: "/projects", label: "Projects" },
    { href: "/events", label: "Events" },
    { href: "/board", label: "Community" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-foreground">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between mx-5">
          <div className="flex flex-row gap-5">
            <Image src="/SmallLogo.png" alt="Logo de FoxCoding" width={50} height={50} />
            <Link href="/" className="flex items-center gap-2 text-accent font-bold text-lg">
              <span className={firaCode.className}>CETYS FoxCoding Club</span>
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-base">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={[
                    "transition-colors",
                    !isActive(item.href) && "text-secondary hover:text-accent",
                    isActive(item.href) && "text-accent font-semibold",
                  ].filter(Boolean).join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <DarkLight />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
