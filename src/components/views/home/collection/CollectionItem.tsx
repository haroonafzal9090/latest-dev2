import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Obj {
  src: string;
  alt: string;
  text: {
    sub_Header: string;
    heading: string;
  };
}

const CollectionItem = (props: { obj: Obj }) => {
  const { obj } = props; //destructing of props
  return (
    <Link href={"/"} className="relative">
      <div className="grid col-span-2 relative group hover:brightness-110 transition-all duration-500  ease-in-out h-[50vh] md:h-[80vh] overflow-hidden cursor-pointer text-gray-50">
        <Image
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500 group-hover:saturate-[110%] brightness-75  hover:brightness-90"
          src={obj.src as string}
          height={1500}
          width={1500}
          alt={obj.alt as string}
        />
        <div className="absolute transform top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:-translate-y-[65%] transition duration-500 delay-300 ease-in-out">
          <div className="flex flex-col items-center gap-3">
            <p>{obj.text.sub_Header}</p>
            {/* The capital heading in small size font means first upper heading*/}
            <h1 className="text-4xl font-light">{obj.text.heading}</h1>
            {/* The second heading  */}
            <button className="bg-gray-50 text-gray-900 py-4 px-8 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-[2s]  text-xs rounded-sm">
              SHOP NOW
              {/* button text shows on hover */}
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-red-500 absolute top-0 right-0 left-0 bottom-0 opacity-10" ></div> */}
    </Link>
  );
};

export default CollectionItem;
