import React from "react";
import images from "../constants/images";
import { data } from "../constants";
import { BurgerShowCase } from "../components/BurgerShowCase";

const Burgers = () => {
  const burgers = data.burgers;
  return (
    <div className="bg-black pt-5">
      <div className="flex items-center justify-center mb-7 flex-col">
        <p className="text-golden font-cor text-2xl">Our Burgers</p>
        <img src={images.spoon} />
      </div>
      <div className="flex mx-8 gap-5 ">
        {burgers.map((burger, i) => (
          <BurgerShowCase burger={burger} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Burgers;
