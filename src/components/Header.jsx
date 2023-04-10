import React from "react";
import images from "../constants/images";

const Header = () => {
  return (
    <div className="flex flex-row flex-1 bg-black pt-36 pb-16">
      <div className="w-1/3 ml-48">
        <p className="font-cor font-semibold text-xl text-white mt-5">
          Chase The New Flavor
        </p>
        <img src={images.spoon} className="pb-5" />
        <h1 className="text-golden font-cor font-bold text-7xl pb-5">
          The Key To
        </h1>
        <h1 className="text-golden font-cor font-bold text-7xl pb-5">
          Fine Dining
        </h1>
        <p className="text-grey font-sans font-light text-base break-normal pb-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          atque voluptatibus similique. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Tempora atque voluptatibus similique.
        </p>
        <button className="bg-golden px-6 py-3 mb-7 hover:bg-crimson">
          Explore Menu
        </button>
      </div>
      <div className="w-1/3 ml-36">
        <img src={images.welcome} alt="hero-img" className="h-[540px] pb-20" />
      </div>
    </div>
  );
};

export default Header;
