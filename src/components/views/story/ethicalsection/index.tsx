import Image from "next/image";
import React from "react";
import Hero2 from "../../../assets/images/story/hero2.jpg"
import HowerColorButton from "@/components/ui/howercolorbutton";

const EthicallySection = () => {
  return (
    <section>
    <div className="bg-[#f4f4f4] max-md:mx-4 mt-28 flex items-center gap-20 md:px-28 md:py-24 max-md:pb-16 max-md:flex-col mb-20">
      {/* Left Side */}
      <div className="flex-[2_1] ">
        <Image
          src = {Hero2}
          alt="image"
          width={650}
          height={650}
          className="w-screen"
        />
      </div>
      {/* Right Side */}
      <div className="flex-[3_1] flex flex-col items-center text-center">
        <div className="font-light mb-2">CRUELTY-FREE</div>
        <h2 className="mb-2 text-3xl font-[370] text-slate-900 px-5">
          Ethically Manufactured
        </h2>
        <div className="h-[3px] w-8 bg-black rounded-full"></div>
        <p className="text-[17px] text-slate-900 max-w-[850px] font-[350]  tracking-widest mt-10 px-10">
          All FABLOUS products are designed in the UK and due to extremely high
          quality requirements our are bags manufactured in China, where such
          quality standards can be met. All products are ethically manufactured
          in two family run factories, which we visit on regular basis. We do
          not work with sweatshops neither in Asia, nor anywhere else in the
          world, including the UK.
        </p>
       <span>
         <HowerColorButton text="SHOP THE COLLECTIONS" href="/collection"/>
          </span> {/* href leads to a collection dynamic page */}
      </div>
    </div>
    </section>
  );
};

export default EthicallySection;