import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { iconComponent } from "@/components/views/productList/data";
import "./styles.css";
import { data } from "@/components/views/productList/data";

interface SubUrl {
  subUrl: string;
}

const CollectionGrid = (prop: SubUrl) => {
  const { subUrl } = prop;

  const arr = data.filter((name) => name.name === subUrl);
  const obj = arr[0];
  console.log(obj);
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 justify-center gap-8 max-md:pb-24">
      {obj.subData.map((t) => (
        <Link href={`product/${t.id}`} key={t.title}>
          <div className="bg-[#f4f4f4] shadow-lg">
            <div className="relative overflow-hidden group">
              <div className="relative group w-fit h-fit group-hover:rotate-2 group-hover:scale-110 group-hover:transition group-hover:ease-in-out group-hover:duration-500 bg-[#f4f4f4]">
                <Image
                  src={t.img}
                  alt="bag image"
                  width={280}
                  height={280}
                  className=" object-cover h-[350px] max-md:h-[200px]"
                />
              </div>

              <div className="flex flex-col gap-1 mt-4 ml-4 pb-3 text-[#5e5c5c]">
                <h2 className="md:text-2xl text-[16px] text-gray-700">
                  {t.title}
                </h2>
                <p className="flex gap-5 ml-[1px] text-lg">
                  <del
                    className={`text-[#EF9A9A] ${
                      t.disPrice ? "block" : "hidden"
                    } pr-10 max-sm:pr-1`}
                  >
                    ${t.disPrice}
                  </del>
                  <span className={`text-gray-800`}>${t.price}</span>
                </p>
                <p className={`flex items-center text-[${t.color}]`}>
                  {t.icon?.map((iconName: string, ind: number) => {
                    const IconObj = iconComponent[iconName];
                    if (!IconObj) {
                      return null;
                    }
                    return <IconObj key={ind} />;
                  })}
                  <span
                    className={`ml-4 text-gray-800 mediaQuery text-sm ${
                      t.review ? "block" : "hidden"
                    }`}
                  >
                    {t.review} review
                  </span>
                </p>
              </div>
              {/*  */}
              <span
                className={`absolute left-5 top-5 ${
                  t.sale === "sale"
                    ? "bg-[#EF9A9A] text-gray-800"
                    : "bg-black/75 text-[#efefef]"
                }  md:px-3 md:py-2 p-[6px] group-hover:opacity-0 md:text-[16px] text-[12px] uppercase ${
                  t.sale ? "block" : "hidden"
                }`}
              >
                {t.sale}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionGrid;
