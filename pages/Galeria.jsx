import React from "react";
import Navegation from "./Componentes/Navegation";
import Carrusel2 from "./Componentes/Carrusel2";
import Footer from "./Componentes/Footer";
import Image from "next/image";
const arrayImages = [
  "Images/carrusel1.jpeg",
  "Images/carrusel1.jpeg",
  "Images/carrusel1.jpeg",
  "Images/carrusel1.jpeg",
  ,
  "Images/carrusel1.jpeg",
  ,
  "Images/carrusel1.jpeg",
  ,
  "Images/carrusel1.jpeg",
  ,
  "Images/carrusel1.jpeg",
  ,
  "Images/carrusel1.jpeg",
  ,
  ,
  "Images/carrusel1.jpeg",
  ,
  ,
  "Images/carrusel1.jpeg",
];

const Galeria = () => {
  return (
    <div>
      <Navegation />
      <Carrusel2 />
      <h2 className="text-2xl text-center text-green-600 mt-[5rem] ">Galeria</h2>
      <div className="p-10 flex items-center justify-center ">
        <div className=" p-1  border-double border-[10px] border-green-600 lg:w-[80%] grid grid-cols-2 gap-4 sm:grid-cols-4   ">
          {arrayImages.map((src, index) => (
            <Image layout="fill" key={index} className="rounded-[0.5rem] hover:scale-[160%] lg:hover:scale-[200%]  hover:border-2 hover:border-green-600 " src={src} alt="" />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Galeria;
