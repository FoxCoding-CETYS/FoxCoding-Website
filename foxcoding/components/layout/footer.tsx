"use client";

import Link from "next/link";
import { Github, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground text-white border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-2 text-lg">
        {/* Left */}
        <div className="space-y-3">
          <p >
            <span className="align-middle mr-2">©</span>
            <span className="align-middle font-medium">FoxCoding {year}</span>
          </p>
          <p className="text-neutral-400">
            A student-run organization at Cetys University
          </p>
        </div>

        {/* Right */}
        <div className="md:text-right space-y-4">
          <p>
            <span className="text-neutral-300 font-medium mr-1">Contact Us:</span>
            <a
              href="mailto:foxcoding@cetys.edu.mx"
              className="text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 rounded"
            >
              foxcoding@cetys.edu.mx
            </a>
          </p>

          <div className="flex md:justify-end gap-4">
            <Link
              aria-label="Instagram"
              href="https://instagram.com/foxcoding"  // <- replace with your handle
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
            >
              <Instagram className="h-5 w-5" />
            </Link>

            <Link
              aria-label="GitHub"
              href="https://github.com/foxcoding"    // <- replace with your org
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
