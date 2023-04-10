import React from "react";
import { data } from "../constants";
import images from "../constants/images";
import DrinkCard from "../components/DrinkCard";

const WineAndDrinks = () => {
  const wines = data.wines;
  const cocktails = data.cocktails;

  return (
    <div className="bg-black p-5">
      <div className="flex justify-center flex-col items-center">
        <p className="text-white font-cor text-sm p-5 pb-0">
          Menu that fits your pallet
        </p>
        <img src={images.spoon} className="pb-5" />
        <h1 className="text-golden font-cor text-3xl pb-3">
          Our Specialized Drinks
        </h1>
      </div>
      <div className="flex m-10 gap-5">
        <div className="w-1/3 flex flex-col items-left pl-24">
          <div className="text-white text-3xl font-cor text-center mb-7">
            Wine & Beer
          </div>
          {wines.map((wine) => (
            <DrinkCard drink={wine} />
          ))}
        </div>
        <div className="w-1/3">
          <img src={images.menu} />
        </div>
        <div className="w-1/3">
          <div className="text-white text-3xl font-cor text-center mb-7">
            Cocktails
          </div>
          {cocktails.map((drink, i) => (
            <DrinkCard drink={drink} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WineAndDrinks;
