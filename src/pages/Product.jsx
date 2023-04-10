import React, { useState } from "react";
import images from "../constants/images";
import { BurgerShowCase } from "../components/BurgerShowCase";
import { data } from "../constants";
import WineAndDrinks from "../Containers/WineAndDrinks";
import Burgers from "../Containers/Burgers";

const Product = () => {
  const [currentlyShowing, setCurrentlyShowing] = useState("burgers");

  const burgers = data.burgers;

  const handleChange = (e) => {
    setCurrentlyShowing(e.target.value);
  };

  return (
    <div className="w-full">
      <div
        className="w-full bg-no-repeat bg-center h-56 flex items-center justify-center"
        style={{
          backgroundImage: `url("${images.bg2}")`,
        }}
      >
        <h1 className="text-5xl text-golden font-cor">Our Products</h1>
      </div>
      <div className="flex flex-col items-center justify-center font-cor p-14">
        <p className="text-white text-2xl mt-10 mb-2 ">Serving Quality</p>
        <img src={images.spoon} className="mb-7" />
        <h1 className="text-golden text-5xl text-center pb-10">
          We at Goyeux are serving our customers <br /> for over a decade.
        </h1>
        <p className="text-grey font-sans px-14 text-center mx-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <div className="mt-10">
          <button className="bg-golden px-6 py-3 text-black">Read More</button>
          <button className="bg-transparent px-6 py-3 border-2 border-golden text-golden ml-5">
            Contact Us
          </button>
        </div>
      </div>
      <div className="w-full mb-10">
        <div className="">
          <p className="text-white font-cor p-5 ml-5 text-lg">Select a Menu</p>
          <select
            onChange={handleChange}
            className="text-black font-semibold bg-white font-cor border-2 border-golden rounded-lg ml-10 h-10 w-24 mb-5"
          >
            <option value="burgers">Burgers</option>
            <option value="drinks">Drinks</option>
          </select>
        </div>

        {currentlyShowing === "burgers" ? <Burgers /> : <div></div>}

        {currentlyShowing === "drinks" ? <WineAndDrinks /> : <div></div>}
      </div>
    </div>
  );
};

export default Product;
