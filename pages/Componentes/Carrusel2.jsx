import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import img from "next/img";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carrusel2 = () => {
  return (
    <div className=" z-30 h-[30rem]  ">
      <Swiper
        className="h-full"
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => ""}
        onSwiper={swiper => console.log(swiper)}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        navigation
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <img
            layout="fill"
            className="w-full h-full"
            src="/imgs/carrusel1.jpeg"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            layout="fill"
            className="w-full h-full"
            src="/imgs/carrusel2.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            layout="fill"
            className="w-full h-full"
            src="/imgs/carrusel3.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            layout="fill"
            className="w-full h-full"
            src="/imgs/carrusel4.jpeg"
            alt=""
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Carrusel2;
