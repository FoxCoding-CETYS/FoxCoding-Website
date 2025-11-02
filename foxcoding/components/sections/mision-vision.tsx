import { textClasses } from "@/app/fonts";

export function MisionVision() {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-nowrap flex-col sm:flex-row sm:flex-wrap bg-black text-white justify-center items-start px-6 py-16">
        {/* Mision */}
        <div className="flex-1 sm:basis-1/2 flex flex-col items-center text-center px-4 mb-12 sm:mb-0">
        <h2 className={`${textClasses.title} text-yellow-400 mb-4`}>MISION</h2>
            <p className="max-w-md text-gray-200 leading-relaxed">
                To establish a benchmark in software development and the exploration of emerging technologies,{" "}
                <span className="font-semibold text-yellow-400">
                    fostering an environment of innovation and continuous learning.
                </span>{" "}
                We focus on empowering students to innovate and develop software solutions that address real-world needs,
                actively participating in hackathons and competitive programming contests. Additionally, we are dedicated to
                carrying out projects that directly apply the knowledge acquired.
            </p>
        </div>

        {/* Vision */}
        <div className="flex-1 sm:basis-1/2 flex flex-col items-center text-center px-4">
            <h2 className={`${textClasses.title} text-yellow-400 mb-4`}>VISION</h2>
            <p className="max-w-md text-gray-200 leading-relaxed">
                We aim to excel in the technological field by achieving outstanding results in hackathons and competitive
                programming contests, both nationally and internationally. Furthermore,{" "}
                <span className="font-semibold text-yellow-400">
                    we aspire to be pioneers in developing innovative projects
                </span>{" "}
                that tackle and solve real-world challenges, reflecting our commitment to technological advancement and the
                practical application of knowledge.
            </p>
        </div>
    </section>
  );
}
