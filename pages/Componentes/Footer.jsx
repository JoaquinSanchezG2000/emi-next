import React from "react";
import img from "next/img";

const Footer = () => {
  return (
    <div className=" w-full bg-green-600 flex items-center justify-around lg:mt-[8rem] mt-[15rem]">
      <a href="#start">
        <img
          layout="fill"
          className="h-[3rem] fixed right-5 bottom-10  "
          src="/imgs/flechaArriba.png"
          alt=""
        />
      </a>
      <div className=" h-full w-[20%] lg:w-[50%]  mr-6 flex items-center ">
        <img layout="fill" className="w-[4rem] h-[50%] " src="/imgs/logo.png" alt="" />
        <div className="p-7 text-center ">
          <h3 className="text-white mb-10 text-2xl mb-3 hidden lg:block ">Cabañas emi </h3>
        </div>
      </div>
      <div
        id="contacto"
        className=" w-[60%] lg:w-[40%] p-[1rem] flex justify-start text-center flex-col   "
      >
        <h2 className="text-xl text-white mb-8 ">Contacto</h2>
        <div className="flex items-center justify-around w-full">
          <a href="">
            <img layout="fill" className="w-[4rem] " src="/imgs/instagram.png" alt="" />
          </a>

          <a href="https://wa.link/xnuwu0 " rel="noreferrer" className="border-3 ">
            <img layout="fill" className="w-[4rem] " src="/imgs/whatsapp.png" alt="" />
          </a>
          <a href="">
            {" "}
            <img layout="fill" className="w-[4rem] " src="/imgs/mercadoLogo.png" alt="" />
          </a>
          <a href="">
            <img layout="fill" className="w-[4rem] " src="/imgs/email.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
