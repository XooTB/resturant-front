import React from "react";
import images from "../constants/images";

const ChefWord = () => {
  return (
    <div className="flex mt-20 text-grey">
      <div className="w-1/2">
        <img src={images.chef} className=" p-20" />
      </div>
      <div className="w-1/2 mt-36">
        <p className="text-white text-3xl font-cor font-medium">Chef's Word</p>
        <img src={images.spoon} className="pb-10" />
        <h1 className="text-golden text-5xl font-cor font-semibold pb-20 ">
          What We Believe In
        </h1>
        <img src={images.quote} className="w-10" />
        <p className="text-lg pb-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          atque voluptatibus similique. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Tempora atque voluptatibus similique.
        </p>

        <h2 className="text-golden text-3xl font-cor">Kevin Luo</h2>
        <h3 className="font-cor text-lg pt-2 pb-5">Chef & Founder</h3>
        <img src={images.sign} className="w-[200px]" />
      </div>
    </div>
  );
};

export default ChefWord;
