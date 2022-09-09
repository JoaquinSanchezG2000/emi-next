import React from "react";
import Navegation from "../Componentes/Navegation";
import Carrusel2 from "../Componentes/Carrusel2";
import Product from "../Componentes/ProductInfo";
import Footer from "../Componentes/Footer";
import Image from "next/image";

const Opciones = () => {
  return (
    <div>
      <Navegation />
      <Carrusel2 />

      <Product />
      <Footer />
    </div>
  );
};
export default Opciones;
