import React from "react";

const Footer = () => {
  return (
    <div className=" w-full bg-green-600 flex items-center justify-around lg:mt-[8rem] mt-[15rem]">
      <a href="#start">
        <img
          className="h-[3rem] fixed right-5 bottom-10  "
          src="/Images/flechaArriba.png"
          alt=""
        />
      </a>
      <div className=" h-full w-[20%] lg:w-[50%]  mr-6 flex items-center ">
        <img className="w-[4rem] h-[50%] " src="/Images/logo.png" alt="" />
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
            <img className="w-[4rem] " src="/Images/instagram.png" alt="" />
          </a>

          <a href="https://wa.link/xnuwu0 " target="_blank" className="border-3 ">
            <img className="w-[4rem] " src="/Images/whatsapp.png" alt="" />
          </a>
          <a href="">
            {" "}
            <img className="w-[4rem] " src="/Images/mercadoLogo.png" alt="" />
          </a>
          <a href="">
            <img className="w-[4rem] " src="/Images/email.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
