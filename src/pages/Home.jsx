import React from "react";
import Header from "../components/Header";
import Aboutus from "../components/Aboutus";
import images from "../constants/images";
import ChefWord from "../components/ChefWord";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
      <Header />
      <Aboutus />
      <Reviews />
      <ChefWord />
    </div>
  );
};

export default Home;
