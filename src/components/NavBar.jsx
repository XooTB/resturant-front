import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center p-3 bg-black">
      <h1 className="text-5xl text-white font-cor ml-5">
        <NavLink to="/">Goyeux</NavLink>
      </h1>
      <div>
        <NavLink
          to="/"
          className="text-lg bg text-white font-cor p-5 font-medium"
        >
          Home{" "}
        </NavLink>
        <NavLink
          to="/contact"
          className="text-lg text-white font-cor p-5 font-medium"
        >
          Contact{" "}
        </NavLink>
        <NavLink
          to="/product"
          className="text-lg text-white font-cor p-5 font-medium"
        >
          Product{" "}
        </NavLink>
        <NavLink
          to="/book"
          className="text-lg text-white font-cor p-5 font-medium"
        >
          Booking
        </NavLink>
        <NavLink
          to="/about"
          className="text-lg text-white font-cor p-5 font-medium"
        >
          About{" "}
        </NavLink>
      </div>
      <div className="mr-10">
        <button className="bg-crimson px-5 py-2 rounded-xl hover:bg-golden font-cor text-black font-semi medium">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
