"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HowerColorButton from "@/components/ui/howercolorbutton";
import { data } from "@/components/views/productList/data";

const CollectionSection = () => {
  return (
    <section className="p-10 overflow-hidden mt-20">
      <div className="flex flex-col items-center text-center">
        <h3 className="mb-1 text-[45px] font-[350] max-lg2:text-[40px] max-md:text-[32px] max-xs:text-[28px] text-slate-900 ">
          Collections
        </h3>
        <div className="h-[3px] w-8 bg-black rounded-full mb-10"></div>
      </div>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 ">
        {data.map((gridImage, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center cursor-pointer group group-hover:opacity-100 "
          >
            <div className="relative h-[540px] w-[560px] max-3xl:h-[500px] max-3xl:w-[520px] max-2xl:h-[450px] max-2xl:w-[450px] max-xl:h-[380px] max-xl:w-[400px] max-lg:h-[440px] max-lg:w-[440px] max-lg2:h-[430px] max-lg2:w-[430px] max-md:h-[700px] max-md:w-[700px] max-sm:h-[580px] max-sm:w-[580px] max-xsm:h-[500px] max-xsm:w-[500px] max-xs:h-[350px] max-xs:w-[350px] max-xxs:w-[300px] max-xxs:h-[300px]     max-lg:mb-16 ">
              <Image
                src={gridImage.bgPic}
                alt={gridImage.name}
                width={540}
                height={560}
                className="object-cover h-[540px] w-[560px] max-3xl:h-[500px] max-3xl:w-[520px] max-2xl:h-[450px] max-2xl:w-[450px] max-xl:h-[380px] max-xl:w-[420px] max-lg:h-[440px] max-lg:w-[440px] max-lg2:h-[430px] max-lg2:w-[430px] max-md:h-[700px] max-md:w-[700px] max-sm:h-[580px] max-sm:w-[580px] max-xsm:h-[500px] max-xsm:w-[500px] max-xs:h-[350px] max-xs:w-[350px] max-xxs:w-[300px] max-xxs:h-[300px]     "
              />
              
              {/* Responisve div */}
              <div className="lg:hidden flex flex-col text-gray-800 text-center  ">
              <h2 className="mt-3 font-medium text-xl">
              {gridImage.heading}
              </h2>
              <div className="gap-2">
                <Link
                  href={`/collections/${gridImage.name}`}
                  className="text-black text-[14px] lowercase"
                >
                  {gridImage.quantity} Products
                </Link>
                </div>

            </div>
              
              <div className="absolute inset-0 bg-black opacity-20 " />
              
            </div>

            
           
            {/* Overlay Content */}
             <div className="absolute top-[100px] bottom-0 left-0 right-0 z-10 text-white items-center justify-center flex  flex-col transition-all group-hover:translate-x-0 group-hover:-translate-y-7 duration-2000 max-lg:hidden ">
              <h2 className="text-[32px] font-normal text-center ">
                {gridImage.heading}
              </h2>
              <div className="opacity-0 flex flex-col items-center gap-1 transition ease-in group-hover:opacity-100">
                <Link
                  href={`/collections/${gridImage.name}`}
                  className="text-white text-[15px] font-medium lowercase"
                >
                  {gridImage.quantity} Products
                </Link>
                <HowerColorButton text="VIEW" href="/products/" />
              </div>
            </div> 
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;