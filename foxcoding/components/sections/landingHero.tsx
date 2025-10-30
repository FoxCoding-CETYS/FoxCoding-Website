'use client';
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Hero(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;  

    const logoSrc = theme === "dark" ? "/HeroLogoDark.png" : "/HeroLogoWhite.png";

    return (
        <div className="flex relative bg-background w-full text-primary flex-col text-3xl md:text-5xl font-normal items-center justify-center text-center px-6 py-10 md:py-16">
            <h1 className="mb-1 md:mb-4">HELLO WORLD, </h1>
            <h1>WE ARE <span className="text-accent font-black">FOX CODING</span></h1> 
            <div className="mt-8">
                <Image src={logoSrc} className="top-1/2 left-1/2" alt="Logo de FoxCoding" width={800} height={800} />
            </div>
        </div>
    );
}