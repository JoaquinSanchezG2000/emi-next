import React, { useMemo } from "react";

const Maps = props => {
  return (
    <div className="  p-4 w-full lg:flex mt-10  ">
      <div className="h-full lg:w-[50%] px-10 ">
        <h2 className=" mb-10 text-2xl text-green-600">Ubicacion</h2>
        <ul>
          <li>
            estamoc ubicados en sierra d elos padres , un lugar a 15km de mar dle plata en este
            magico lugar podras conectar con la naturaleza
          </li>
          <li>
            nuestro complejo esta ubicado a 4 kilometros de el centro de sierra de los padres y a
            1.5km de la cumbre de sierras donde podras encontrar diversas gastronomias autoctonas
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium laboriosam
            architecto fugit, qui similique, natus, nesciunt officiis odio fugiat dolores nisi
            voluptatem! Nam voluptatem repellat ex eius maxime asperiores assumenda.
          </li>
        </ul>
      </div>
      <div className="map__container w-[100%] border-double border-[10px] border-green-600  mt-10 ">
        <div className="m-1  ">
          <iframe
            className="w-full h-[22rem]  "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25168.731484564927!2d-57.796785759973694!3d-37.951650962222985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95852efdfd3420cf%3A0xdb2005c1cd0d533e!2sSierra%20de%20los%20Padres%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1662991383663!5m2!1ses!2sar"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Maps;
