"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/components/views/home/homebagscarousel/style.css";
import { collectionArray, collectionDataProps } from "@/interface";

const CollectionCarousel = ({ data }: any) => {
  return (
    //both carousel and flex-between class are written in tailwind but defined in global.css
    <div className="carousel">
      <div className="flex-between">
        <h2 className="text-[27px] text-[#423F3F] font-normal">
          Collections list
        </h2>
        <Link
          href="/collections"
          className="relative group inline-block text-decoration-none text-[16px] text-[#5E5C5C]"
        >
          View All
          <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#5e5c5c] transition-all group-hover:w-full"></span>
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        style={{ overflow: "visible" }}
      >
        {data.map((gridImage: any) => (
          <SwiperSlide key={gridImage.id} className="cursor-pointer">
            <div className="slide-image group group-hover:opacity-100">
              <div className="relative w-[550px] h-[550px]">
                <Image
                  src={gridImage.bgPic}
                  alt="image"
                  width={550}
                  height={550}
                  className="object-cover w-[550px] h-[550px] "
                />
              </div>

              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[#e5e5e5] text-[16px] opacity-100 max-w-full flex flex-col z-[2] items-center justify-center transition-all   group-hover:translate-x-[-50%] group-hover:translate-y-[-60%]">
                <h3 className="text-[27px]">{gridImage.heading}</h3>
                <div className="opacity-0 flex flex-col items-center gap-2 translate-y-5 transition ease-out group-hover:opacity-100 ">
                  <Link
                    href={`/collections/${gridImage.name}`}
                    className="text-[#e5e5e5] text-[13px] lowercase"
                  >
                    {gridImage.quantity} Products
                  </Link>
                  <button className="py-4 rounded-md px-6 text-[15px] font-light bg-white text-gray-500">
                    View
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionCarousel;
