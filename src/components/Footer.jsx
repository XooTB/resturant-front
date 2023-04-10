import React from "react";
import images from "../constants/images";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex text-white justify-between bg-black p-5">
      <div className="text-grey text-center text-sm ml-5">
        <h1 className="text-3xl font-cor text-white pt-7">Contact Us</h1>
        <p className="pt-5">9 W 53rd Street, NYC 11000, USA</p>
        <p className="pt-5">+1 212-324-344</p>
        <p className="pb-5">+1 212-324-344</p>
      </div>
      <div className="text-center flex items-center flex-col">
        <h1 className="text-4xl font-cor pb-5 text-golden pt-5">Goyeux</h1>
        <p className="text-base font-cor">
          "The Best way to find yourself is to lose yourself in the service of
          others"
        </p>
        <img src={images.spoon} className="pb-5 pt-2" />
        <div className="flex pb-14">
          <FiFacebook className="w-7 h-7 m-1" />
          <FiTwitter className="w-7 h-7 m-1" />
          <FiInstagram className="w-7 h-7 m-1" />
        </div>
        <div className="text-grey font-sm font-cor">
          2021 Goyeux. All Rights reserved.
        </div>
      </div>
      <div className="mr-5 text-grey font-sans text-sm text-center">
        <h1 className="font-cor text-3xl text-white pt-7 pb-5">
          Working Hours
        </h1>
        <p>Monday-Friday:</p>
        <p className="pb-2">08:00 am - 12:00 pm</p>
        <p>Saturday-Sunday:</p>
        <p>07:00 am - 11:00 am</p>
      </div>
    </div>
  );
};

export default Footer;
