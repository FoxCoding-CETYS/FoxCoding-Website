import Image from "next/image";

export function HeroSection(props: {
  first_word: string;
  second_word?: string;
}) {
  const ceidImg = "/ceid.png";

  return (
    <div className="relative w-full h-[60vh]">
      <Image
        src={ceidImg}
        alt="Imágen del CEID"
        fill
        className="object-cover brightness-30 object-left md:object-center"
        priority
      />

      <div className="flex h-full w-full items-center">
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold m-24">
          {props.first_word}{" "}
          {props.second_word && (
            <span className="ml-0 lg:ml-8" /* Margen solo en desktop mobile */>
              {props.second_word}
            </span>
          )}
        </h1>
      </div>
    </div>
  );
}
