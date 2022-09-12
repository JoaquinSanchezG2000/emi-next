import React, { useEffect, useState } from "react";
import Link from "next/link";


const Navegation = () => {
  function openMenu() {
    setChangeMenu(prevState => !prevState);
  }

  const [changeMenu, setChangeMenu] = useState(false);
  useEffect(() => {
    const menu = document.getElementById("menu");
    const backdrop = document.getElementById("backdrop");
    if (changeMenu === false) {
      menu.classList.add("hidden")
      backdrop.classList.add("hidden");
    } else {
      menu.classList.remove("hidden")
      backdrop.classList.remove("hidden");
    }

    console.log(changeMenu);
  }, [changeMenu]);

  return (
    <div
      id="start"
      className="  header-background  flex w-full h-[7rem] items-center justify-start bg-green-600  "
    >
      <a href="https://wa.link/xnuwu0" rel="noreferrer">
        <img
          className="h-[5rem] fixed right-1 bottom-[12rem] z-10 "
          src="/Images/whatsapp.png"
          alt=""
        />
      </a>
      <div className="border-b-3 border-gray  flex w-full justify-between lg:justify-around mx-4">
        <div className="flex items-center justify-center  ">
          <img layout="fill" className="h-[5rem] " src="/Images/logo.png" alt="" />
          <div className="text-3xl text-white ml-6">
            <Link href="/">Cabaña</Link>
          </div>
        </div>
        <div>
          <img
            onClick={openMenu}
            className="h-[5rem]  lg:hidden  "
            src="/Images/menu.png"
            alt=""
          />
          <div
            onClick={openMenu}
            id="backdrop"
            className=" hidden lg:hidden z-40 fixed bg-black bg-opacity-80 top-0 bottom-0 left-0 right-0 "
          ></div>
          <div
            id="menu"
            className=" hidden lg:hidden  z-50 fixed bg-white bg-opacity-90   top-0 left-[40%] bottom-0  w-full  "
          >
            <ul className="flex flex-col ml-10 ">
              <li className="p-2 hover:border-b-2 border-gray hover:scale-110">
                <Link href="/">Inicio</Link>
              </li>
              <li className=" p-2 hover:border-b-2 border-gray hover:scale-110 ">
                <Link href="/Alojamientos/Opciones">Nuestras Opciones</Link>
              </li>
              <li className=" p-2 hover:border-b-2 border-gray hover:scale-110">
                <Link href="/Contacto">Contacto</Link>
              </li>
              <li className="p-2 hover:border-b-2 border-gray hover:scale-110 ">
                <Link href="/Galeria">Galeria de fotos</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-full hidden lg:block ">
          <ul className=" text-white   h-full lg:flex text-2xl w-[70%] mx-[14rem] my-[1.5rem] justify-between ">
            <li className=" p-2 hover:border-b-2 border-gray hover:scale-110 ">
              {" "}
              <Link href="/Alojamientos/Opciones">Nuestras Opciones</Link>{" "}
            </li>
            <li className=" p-2 hover:border-b-2 border-gray hover:scale-110">
              {" "}
              <Link href="/Contacto">Contacto</Link>{" "}
            </li>{" "}
            <li className="p-2 hover:border-b-2 border-gray hover:scale-110 ">
              <Link href="/Galeria">Galeria de fotos</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navegation;
