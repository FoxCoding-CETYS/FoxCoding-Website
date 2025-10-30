'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkLight from '@/components/ui/darkLight';
import { firaCode } from '@/app/fonts';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = [
    { href: '/about', label: 'About us' },
    { href: '/projects', label: 'Projects' },
    { href: '/events', label: 'Events' },
    { href: '/board', label: 'Community' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Close with Esc
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    if (open) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-foreground">
      {/* Top row: Left (brand) | Center (desktop nav) | Right (toggle + hamburger) */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Left: brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/SmallLogo.png" alt="Logo de FoxCoding" width={50} height={50} />
          <span className={`${firaCode.className} text-accent text-lg font-bold`}>
            CETYS FoxCoding Club
          </span>
        </Link>

        {/* Center: desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-base">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={[
                    'transition-colors',
                    !isActive(item.href) && 'text-secondary hover:text-accent',
                    isActive(item.href) && 'text-accent font-semibold',
                  ].filter(Boolean).join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: single DarkLight + hamburger (mobile) */}
        <div className="flex items-center gap-2">
          <DarkLight />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent lg:hidden"
          >
            {!open ? (
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#f7d13b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M6 6l12 12M18 6l-12 12" stroke="#f7d13b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown (slides down under the header) */}
      <div
        id="mobile-menu"
        className={[
          'sticky lg:hidden overflow-hidden border-t border-border bg-foreground backdrop-blur',
          'transition-[max-height] duration-300 ease-out',
          open ? 'max-h-96' : 'max-h-0',
        ].join(' ')}
        role="region"
        aria-label="Mobile navigation"
      >
        <nav className="px-4 py-3">
          <ul className="space-y-2 text-lg">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    'block rounded-md px-2 py-2 transition-colors',
                    !isActive(item.href) && 'text-secondary hover:bg-accent/10 hover:text-accent',
                    isActive(item.href) && 'bg-accent/10 text-accent font-semibold',
                  ].filter(Boolean).join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
