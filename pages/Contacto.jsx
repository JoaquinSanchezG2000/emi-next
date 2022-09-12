import React from "react";
import Navegation from "./Componentes/Navegation";
import Carrusel2 from "./Componentes/Carrusel2";
import Footer from "./Componentes/Footer";


const Contacto = () => {
  return (
    <div>
      <Navegation />
      <Carrusel2 />
      <div className="flex flex-col lg:flex-row mt-[8rem] w-full bg-green-600  ">
        <div className="w-[100%] lg:w-[50%]   text-center mt-10 ">
          <h2 className="text-2xl text-white">Contacto</h2>
          <p className="m-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi, velit,
            veritatis tenetur optio et fugit ad voluptates dolorum repellendus repudiandae natus
            quia. Repellendus, nulla. Quibusdam qui ipsum libero assumenda.
          </p>
          <p>Nuestro horario de atencion es de 10 a 18</p>
        </div>
        <div className="w-[100%] lg:w-[50%] flex items-center justify-center ">
          <div className="m-10">
            <a href="">
              <img
                className="h-[5rem] m-5 "
                src="/Images/instagram.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="h-[5rem] m-5 "
                src="/Images/whatsapp.png"
                alt=""
              />
            </a>
          </div>
          <div className="m-10">
            <a href="">
              <img className="h-[5rem] m-5 " src="/Images/mercadoLogo.png" alt="" />
            </a>
            <a href="">
              <img className="h-[5rem] m-5 " src="/Images/email.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contacto;
