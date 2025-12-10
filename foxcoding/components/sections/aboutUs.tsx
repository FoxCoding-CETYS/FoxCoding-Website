import { CustomButton } from "../ui/custom-button";

export function AboutUs() {
  return (
    <div className="flex flex-col text-primary text-center text-xl md:text-4xl w-2/3 font-normal mx-auto gap-10">
      <h2>
        <span className="text-accent font-black tracking-widest">
          FoxCoding
        </span>{" "}
        is dedicated to promoting interest in computing and information
        technologies among members of the{" "}
        <span className="text-accent font-black">CETYS community</span>
      </h2>
      {/* <CustomButton variant = "primary" size = "sm" className="w-1/2 md:w-1/3 mx-auto my-auto">Learn More</CustomButton> */}
    </div>
  );
}
