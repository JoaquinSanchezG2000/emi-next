import React from "react";
import Maps from "./Maps";
import img from "next/img";

const Features = () => {
  const ricardo = ["garlic print sleep spider keep script earn lake bright member north grocery"];

  return (
    <div id="features" className="w-full text-center mt-20">
      <div className=" items-center justify-around mb-6 lg:flex">
        <div className=" w-[100%] ml lg:w-[40%]   ">
          <h2 className="my-6 text-2xl text-green-600  ">Quienes Somos ?</h2>{" "}
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis voluptatum libero
            obcaecati voluptas illo laudantium architecto culpa vel sed adipisci, reprehenderit
            iusto ea voluptates ab autem reiciendis doloribus ipsam doloremque!
          </p>
        </div>

        <div className="w-[100%] ml lg:w-[40%] ">
          <h2 className="my-6 text-2xl text-green-600  ">Que Ofrecemos ?</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eaque illo fugiat, sed
            odio ullam voluptatem numquam laudantium. Non laborum quam, quia deleniti quas sit
            nostrum eos dolores veniam accusantium?
          </p>
        </div>
      </div>
      <h2 className="mt-20 text-green-600  text-2xl ">Caracteristicas</h2>
      <div className="lg:mx-6 lg:px-5 lg:pb-5 flex flex-col ">
        <ul className=" text-center list-disc lg:list-none lg:text-start w-[100%] p-10 ">
          <li className="my-10 mx-4">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sapiente eveniet ipsum
            nesciunt, eum reiciendis velit quae tempora quos dolorum asperiores odit quasi esse
            voluptates exercitationem odio iure dignissimos tempore!
          </li>
          <li className="my-10 mx-4">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sapiente eveniet ipsum
            nesciunt, eum reiciendis velit quae tempora quos dolorum asperiores odit quasi esse
            voluptates exercitationem odio iure dignissimos tempore!
          </li>
          <li className="my-10 mx-4">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sapiente eveniet ipsum
            nesciunt, eum reiciendis velit quae tempora quos dolorum asperiores odit quasi esse
            voluptates exercitationem odio iure dignissimos tempore!
          </li>
          <li className="my-10 mx-4">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sapiente eveniet ipsum
            nesciunt, eum reiciendis velit quae tempora quos dolorum asperiores odit quasi esse
            voluptates exercitationem odio iure dignissimos tempore!
          </li>
          <li className="my-10 mx-4">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sapiente eveniet ipsum
            nesciunt, eum reiciendis velit quae tempora quos dolorum asperiores odit quasi esse
            voluptates exercitationem odio iure dignissimos tempore!
          </li>
          <li className="my-10 mx-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque aut saepe! Maxime
            eaque nobis consequatur asperiores itaque molestiae, quis laboriosam vitae at, numquam
            excepturi non beatae est! Optio, cum?
          </li>
        </ul>
        <Maps></Maps>
      </div>
    </div>
  );
};

export default Features;
