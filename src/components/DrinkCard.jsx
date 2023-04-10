import React from "react";

const DrinkCard = ({ drink }) => {
  return (
    <div className="flex flex-col text-white mb-7 justify-center">
      <div className="flex items-center">
        <p className="text-golden font-cor text-xl font-medium w-1/2">
          {drink.title}
        </p>
        <div className="h-[1px] bg-white w-[50px] mx-5"></div>
        <p>{drink.price}</p>
      </div>
      <div className="text-grey font-sans text-sm">{drink.tags}</div>
    </div>
  );
};

export default DrinkCard;
