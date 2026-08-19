"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const words = ["HELLO WORLD", "WE ARE", "FOXCODING"];
const accentWord = "FOXCODING";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/foxcoding-dark-logo.png"
      : "/foxcoding-white-logo.png";

  function Type() {
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const currentWord = words[i];
    const accentStart = currentWord.indexOf(accentWord);
    const visibleText = currentWord.substring(0, j);
    const beforeAccent = visibleText.substring(0, accentStart);
    const coloredPart = visibleText.substring(accentStart);

    useEffect(() => {
      let delay = j === currentWord.length ? 400 : 100;
      if (i === words.length - 1 && j === currentWord.length) {
        delay = 15000;
      }
      const timeout = setTimeout(() => {
        if (isDeleting) {
          const nextJ = j - 1;
          setJ(nextJ);
          if (nextJ === 0) {
            setIsDeleting(false);
            setI((i + 1) % words.length);
          }
        } else {
          const nextJ = j + 1;
          setJ(nextJ);
          if (nextJ === currentWord.length) {
            setIsDeleting(true);
          }
        }
      }, delay);
      return () => clearTimeout(timeout);
    }, [i, j, isDeleting]);

    return (
      <div className="mb-10 text-balance text-5xl font-black leading-[0.95] tracking-[-0.065em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
        {i === 2 ? (
          <>
            {beforeAccent}
            <span className="text-accent">{coloredPart}|</span>
          </>
        ) : (
          <>{visibleText}|</>
        )}
      </div>
    );
  }

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="technical-grid absolute inset-0 -z-20 opacity-70" />
      <div className="absolute -right-32 top-10 -z-10 size-[32rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="flex flex-col min-h-[calc(100svh-76px)] items-center gap-10 py-16 lg:py-20">
        {Type()}
        <div className="relative mx-auto w-full max-w-xl lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rotate-3 rounded-[2.5rem] bg-accent" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-background p-8 shadow-2xl sm:p-12 transition duration-300">
            <Image
              src={logoSrc}
              alt="FoxCoding logo"
              width={500}
              height={500}
              className="object-contain p-12 sm:p-16"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
