"use client";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import the main Swiper stylesheet
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import "@/components/ui/swiper-styles/styles.css";
import HowerGrowButton from "@/components/ui/howergrowbutton";
import herobag1 from "../../../assets/images/home/hero/hbag1.jpg";
import herobag2 from "../../../assets/images/home/hero/hbag2.jpg";
import herobag3 from "../../../assets/images/home/hero/hbag3.jpg";
import herobag4 from "../../../assets/images/home/hero/hbag4.jpg";
import herobag5 from "../../../assets/images/home/hero/hbag5.jpg";

const slideImages = [
  {
    src: herobag1,
    alt: "Slide 1",
    text: {
      sub_Header: "BACK IN STOCK",
      heading: "Tote-ally Amazing",
      paragraph: "Our classic Tote is a fabulous all-rounder ",
      button: "SHOP NOW",
    },
  },
  {
    src: herobag2,
    alt: "Slide 2",
    text: {
      sub_Header: "YOUR GO-TO",
      heading: "Hot In The City",
      paragraph: "Discover our range of womens purses",
      button: "SHOP THE COLORS",
    },
  },
  {
    src: herobag3,
    alt: "Slide 3",
    text: {
      sub_Header: "ELEGANT LOOK",
      heading: "Shining In Black",
      paragraph: "Elevate your style with our black handbag",
      button: "VIEW COLLECTION",
    },
  },
  {
    src: herobag4,
    alt: "Slide 4",
    text: {
      sub_Header: "FABULOUS PURSES",
      heading: "Check In Blue",
      paragraph: "Our timeless purses are perfect for any occasion",
      button: "GET YOURS",
    },
  },
  {
    src: herobag5,
    alt: "Slide 5",
    text: {
      sub_Header: "SUNNY VIBES",
      heading: "Mellow In Yellow",
      paragraph: "Add a dash of sunshine to your outfit",
      button: "EXPLORE MORE",
    },
  },
];

const HeroSection = () => {
  return (
    <>
      <section>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {slideImages.map((slideImage, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-screen h-screen flex items-center justify-center cursor-pointer">
                <div className="relative w-full h-full">

                  {/* layout="fill" , objectFit="cover" property on the Image to set w-screen */}

                  <Image
                    src={slideImage.src}
                    alt={slideImage.alt}
                    loading="eager" //Pre-loaded image
                    className="z-1 object-cover w-full h-full"
                  />
                </div>

                {/* Overlay content */}

                <div className="absolute inset-0 bg-black opacity-30" />
                <div className="absolute z-10 text-white items-center text-center">
                  <div className="mb-6 text-sm max-md:text-xs">
                    {slideImage.text.sub_Header}
                  </div>
                  <h2 className="text-6xl max-md:text-3xl max-lg2:text-4xl ">
                    {slideImage.text.heading}
                  </h2>
                  <div className="text-xl mt-6">
                    <p>{slideImage.text.paragraph}</p>
                  </div>
                  <div className="mt-9">
                    <HowerGrowButton
                      text={slideImage.text.button}
                      href="/pn"
                      
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HeroSection;
