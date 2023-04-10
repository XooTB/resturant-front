import React from "react";

const CustomerCard = ({ image, text, name, profession }) => {
  return (
    <div className="text-grey flex w-1/2">
      <div>
        <img src={image} className="w-[350px] rounded-lg" />
      </div>
      <div>
        <p className="text-sm p-5 font-cor">{text}</p>
        <h2 className="text-xl text-golden font-cor pl-5">{name}</h2>
        <p className="pl-5 font-cor pb-20">{profession}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
