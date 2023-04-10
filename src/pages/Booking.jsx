import React, { useState } from "react";
import { images } from "../constants";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [bookingInfo, setBookingInfo] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const NOG = e.target.NOG.value;
    const date = e.target.date.value;
    const phone = e.target.phone.value;

    setBookingInfo({ name, email, NOG, date, phone });
    navigate("/");
  };
  return (
    <div className="flex">
      <div className="w-1/2 bg-black m-5 rounded-lg">
        <div className="flex items-center justify-center ">
          <h1 className="text-3xl text-golden font-cor">
            Book your reservation
          </h1>
        </div>
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="m-5 p-3 border-2 border-crimson bg-transparent font-cor text-golden rounded-md"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="m-5 p-3 border-2 border-crimson bg-transparent font-cor text-golden rounded-md"
          />
          <input
            name="NOG"
            type="number"
            placeholder="Number of Guests"
            className="m-5 p-3 border-2 border-crimson bg-transparent font-cor text-golden rounded-md"
          />
          <input
            name="date"
            type="date"
            placeholder="Email Address"
            className="m-5 p-3 border-2 border-crimson bg-transparent font-cor text-golden rounded-md"
          />
          <input
            name="phone"
            type="number"
            placeholder="Phone Number"
            className="m-5 p-3 border-2 border-crimson bg-transparent font-cor text-golden rounded-md"
          />

          <button
            className="bg-golden px-5 py-2 w-28 m-5 rounded-sm hover:bg-crimson"
            type="submit"
          >
            Book
          </button>
        </form>
      </div>
      <div>
        <img src={images.gallery02} className="w-[450px]" />
      </div>
    </div>
  );
};

export default Booking;
