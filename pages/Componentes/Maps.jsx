import React from "react";
// import GoogleMaps from "simple-react-google-maps";
import Image from "next/image";

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
      <div className="w-[100%] border border-black mt-10 ">
        {/* <GoogleMaps
          apiKey={"AIzaSyBg1SwJldHjv0mTeltU3N5We0MIr9TdKB4"}
          style={{ height: "400px", width: "100%" }}
          zoom={12}
          markers={{ lat: -37.950328, lng: -57.779804 }}
          center={{
            lat: -37.950328,
            lng: -57.779804,
          }}
        /> */}
      </div>
    </div>
  );
};

export default Maps;
