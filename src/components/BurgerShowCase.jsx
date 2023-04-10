import React from "react";

export const BurgerShowCase = ({ burger }) => {
  return (
    <div className="text-white basis-1/2 bg-black p-2">
      <img
        src={burger.imgUrl}
        className="w-full h-80 object-cover rounded-lg"
      />
      <h1 className="font-cor text-golden text-2xl p-2">{burger.name}</h1>
      <p className="font-sans text-grey p-3 text-sm">{burger.description}</p>
    </div>
  );
};
