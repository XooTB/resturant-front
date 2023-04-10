import React from "react";
import images from "../constants/images";
import CustomerCard from "./CustomerCard";

const Reviews = () => {
  return (
    <div className="bg-black pt-5">
      <div className="flex items-center flex-col">
        <p className="text-white text-3xl font-cor">Testimony</p>
        <img src={images.spoon} />
        <h1 className="text-golden font-cor text-5xl pt-3">Happy Customers</h1>
      </div>
      <div className="p-20 px-28">
        <div className="flex">
          <CustomerCard
            image={images.customer1}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="James Cam"
            profession="artist"
          />
          <CustomerCard
            image={images.customer2}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="Jane Cooper"
            profession="Chef"
          />
        </div>
        <div className="flex">
          <CustomerCard
            image={images.customer3}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="Robert Fox"
            profession="Chef"
          />
          <CustomerCard
            image={images.customer4}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="Brooklyn Simmons"
            profession="Caterer"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
