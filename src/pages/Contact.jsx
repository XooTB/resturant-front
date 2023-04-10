import React from "react";
import images from "../constants/images";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <divk
        className="w-full bg-no-repeat bg-center h-56 flex items-center justify-center"
        style={{
          backgroundImage: `url("${images.bg2}")`,
        }}
      >
        <h1 className="text-5xl text-golden font-cor">Contact Us</h1>
      </divk>
      <div className="bg-black flex items-center justify-center p-16 flex-col">
        <h1 className="text-golden text-3xl font-cor p-5">Find us at:</h1>
        <div>
          <img src={images.map} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl text-golden font-cor pt-10">Contact Us: </h1>
        </div>
        <div className="flex flex-row">
          <ContactForm />
          <img src={images.laurels} className="w-[550px] m-20" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
