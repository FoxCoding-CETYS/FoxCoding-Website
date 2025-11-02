import { HeroSection } from "@/components/sections/heroSection";
import { MisionVision } from "@/components/sections/mision-vision";

export default function About() {
    return (
        <>
            <HeroSection first_word={"About"} second_word={"Foxcoding"} />
            <MisionVision />
        </>
    );
}