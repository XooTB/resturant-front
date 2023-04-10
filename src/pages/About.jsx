import React from "react";
import { images } from "../constants";
import ChefWord from "../components/ChefWord";

const About = () => {
  return (
    <div>
      <div
        className="w-full bg-no-repeat bg-center h-56 flex items-center justify-center"
        style={{
          backgroundImage: `url("${images.bg2}")`,
        }}
      >
        <h1 className="text-5xl text-golden font-cor">Welcome to Goyeux</h1>
      </div>

      <div className="bg-black text-grey">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-cor text-white font-medium pt-5">
            Our history
          </p>
          <img src={images.spoon} className="pb-7" />
          <h1 className="text-golden text-5xl font-cor font-medium">
            Serving Customers for over a Decade
          </h1>
        </div>
        <div className="flex gap-5 m-20 p-8">
          <div className="w-1/2">
            <p className="font-sans text-base pt-0 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <img src={images.shopfront} />
          </div>
          <div className="w-1/2">
            <div>
              <img src={images.darkStudio} />
            </div>
            <div>
              <h1 className="font-cor text-golden text-3xl py-5">
                Over The Years
              </h1>
              <p className="font-sans text-white text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                pharetra adipiscing ultrices vulputate posuere tristique. In sed
                odio nec aliquet eu proin mauris et.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ChefWord />
      </div>
    </div>
  );
};

export default About;
