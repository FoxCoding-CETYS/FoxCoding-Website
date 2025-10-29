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

    const logoSrc = theme === "dark" ? "/WhiteLogo.png" : "/DarkLogo.png";
    const numSrc = theme === "dark" ? "/BgNumbers.png" : "/BgNumbersWhite.png";
    const size = theme == "dark" ? 800 : 850;

    return (
        <div className="flex bg-background w-full text-primary flex-col text-5xl font-normal items-center justify-center text-center px-6 py-16">
            <h1 className="mb-4">HELLO WORLD, </h1>
            <h1>WE ARE <span className="text-accent font-black">FOX CODING</span></h1> 
            <div className="mt-8">
                <Image src={numSrc} className="absolute opacity-80 top-112 sm:top-125 md:top-137 lg:top-130 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Logo de FoxCoding" width={800} height={800} />
                <Image src={logoSrc} className="top-1/2 left-1/2" alt="Logo de FoxCoding" width={size} height={size} />
                <Image src="/PostIt.png"  className="absolute top-88 sm:top-75 md:top-85 lg:top-75 right-5 sm:right-5 md:right-10 lg:right-40 xl:right-60 2xl:right-92 w-20 sm:w-36 md:w-40 lg:w-40 xl:w-45 2xl:w-45 h-auto" alt="Logo de FoxCoding" 
                width={0} height={0} sizes="(min-width: 1536px) 14rem, (min-width: 1280px) 12rem, (min-width: 1024px) 10rem, (min-width: 768px) 8rem, (min-width: 640px) 6rem, 5rem"
                />
            </div>
        </div>
    );
}