import Link from "next/link";
import React from "react";


const ProductInfo = () => {
  return (
    <div id="products" className="text-center mt-10 ">
      <h2 className="text-3xl mb-10 text-green-600">Alojamientos</h2>
      <div className=" lg:flex w-full h-[60rem] lg:h-[40rem] mb-10 ">
        <div className="w-[100%] h-[50%] lg:h-[100%] lg:w-[50%] lg:p-3 lg:m-5   ">
          <h2 className="text-2xl ">Cabaña1</h2>
          <Link href="/Alojamientos/Opcion1">
            <img
              className="w-full  h-[90%] mt-5 border-double border-[10px] border-green-600 p-1  hover:scale-105 hover:brightness-125   "
              src="/Images/carrusel1.jpeg"
              alt=""
            />
          </Link>
        </div>

        <div className=" w-[100%] h-[50%] lg:h-[100%] lg:w-[50%] lg:p-3 lg:m-5    ">
          <h2 className=" text-2xl">Cabaña2</h2>
          <Link href="/Alojamientos/Opcion2">
            <img
              className="w-full  h-[90%] mt-5 border-double border-[10px] border-green-600 p-1 hover:scale-105 hover:brightness-125   "
              src="/Images/carrusel1.jpeg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
