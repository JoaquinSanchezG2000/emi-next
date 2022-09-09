import React from "react";
import Navegation from "../Componentes/Navegation";
import Carrusel2 from "../Componentes/Carrusel2";
import Footer from "../Componentes/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const Opcion2 = () => {
  return (
    <div>
      <Navegation />

      <div className="flex flex-col lg:flex-row w-full items-center  lg:mt-10 justify-around">
        <div className="w-[100%] lg:w-[40%] h-[30rem]  ">
          <Link href="/Alojamientos/Opciones">
            <img className="hidden lg:block h-10 w-10 mb-5 cursor-pointer " src="/Images/flechaAtras.png" alt="" />
          </Link>
          <Swiper
            className="h-full  lg:rounded-[0.5rem] "
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => ""}
            onSwiper={swiper => console.log(swiper)}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            navigation
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <img className="w-full h-full  " src="/Images/carrusel1.jpeg" alt="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-full " src="/Images/carrusel2.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-full " src="/Images/carrusel3.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-full " src="/Images/carrusel4.jpeg" alt="" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
        <div className="w-[80%] mt-[1rem] lg:w-[35%]     ">
          <h2 className="text-center text-green-600 text-2xl">Cabañas</h2>
          <p className="mt-5">
              Cabaña2


            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores unde animi ea
            mollitia possimus natus expedita. Sit reprehenderit nostrum eaque soluta fuga tempore
            unde quas minima neque! Ullam, optio repellendus.
          </p>
          <ul className="mt-10 list-disc ">
            <li className="mt-3">lalalalal lalalalal allalala lalala</li>
            <li className="mt-3">lalalalal lalalalal allalala lalala</li>
            <li className="mt-3">lalalalal lalalalal allalala lalala</li>
            <li className="mt-3">lalalalal lalalalal allalala lalala</li>
            <li className="mt-3">lalalalal lalalalal allalala lalala</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Opcion2;
