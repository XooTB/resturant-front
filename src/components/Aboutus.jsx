import React from "react";
import images from "../constants/images";

const Aboutus = () => {
  return (
    <div className="w-full">
      <div className="absolute w-full">
        <img src={images.G} className="m-auto h-[500px] mt-20" />
      </div>
      <div className="flex relative items-center">
        <div className="text-right">
          <h1 className="font-cor text-4xl text-golden font-bold">About Us</h1>
          <p className="text-grey font-sans font-light text-base break-normal pb-7 pl-36">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            atque voluptatibus similique. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Tempora atque voluptatibus similique.
          </p>
          <button className="bg-golden px-6 py-3 mb-7 hover:bg-crimson">
            Explore Menu
          </button>
        </div>
        <div className="m-10">
          <img src={images.knife} />
        </div>
        <div>
          <h1 className="font-cor text-4xl text-golden font-bold">
            Our History
          </h1>
          <p className="text-grey font-sans font-light text-base break-normal pb-7 pr-36">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            atque voluptatibus similique. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Tempora atque voluptatibus similique.
          </p>
          <button className="bg-golden px-6 py-3 mb-7 hover:bg-crimson">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
