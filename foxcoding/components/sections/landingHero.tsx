import Image from "next/image";

export function Hero(){
    return (
        <div className="flex bg-background text-primary flex-col text-5xl font-light items-center justify-center text-center px-6 py-16 ">
            <h1 className="mb-4">HELLO WORLD, </h1>
            <h1>WE ARE <span className="text-accent font-black">FOX CODING</span></h1> 
            <div className="mt-8">
                <Image src="/BgNumbers.png" className="absolute top-85 opacity-80" alt="Logo de FoxCoding" width={800} height={800} />
                <Image src="/WhiteLogo.png" alt="Logo de FoxCoding" width={800} height={800} />
                <Image src="/PostIt.png"  className="absolute top-77 right-92" alt="Logo de FoxCoding" width={180} height={180} />
            </div>
            
        </div>
    );
}