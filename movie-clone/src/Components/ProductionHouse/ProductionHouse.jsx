import React from "react";
import disney from "../../assets/images/disney.png";
import marvel from "../../assets/images/marvel.png";
import nationalG from "../../assets/images/nationalG.png";
import pixar from "../../assets/images/pixar.png";
import starwar from "../../assets/images/starwar.png";

import starwarV from "../../assets/videos/starwarV.mp4";
import disneyV from "../../assets/videos/disneyV.mp4";
import marvelV from "../../assets/videos/marvelV.mp4";
import nationalGeographicV from "../../assets/videos/nationalGeographicV.mp4";
import pixarV from "../../assets/videos/pixarV.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      {productionHouseList.map((item) => (
        <button
          key={item.id}
          className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-gray-800 bg-inherit"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50 left-0"
          />
          <img src={item.image} className="w-full z-[1]" />
        </button>
      ))}
    </div>
  );
}

export default ProductionHouse;
