import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "./slider.css";

export default function FreeShippingSlider() {
  SwiperCore.use([Autoplay]);

  const slidesContent = Array.from({ length: 7 }, (_, index) => (
    <SwiperSlide key={index}>
      <p>Free shipping on all orders over $100</p>
    </SwiperSlide>
  ));

  return (
    <div className={`py-2 bg-gray-800 `}>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        centeredSlides={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={8000}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 150,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 180,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="absolute top-0 left-0 z-50 w-full text-stone-100 text-xs md:text-sm lg:text-xs text-center swiper-container-free-mode"
      >
        {slidesContent}
      </Swiper>
    </div>
  );
}
