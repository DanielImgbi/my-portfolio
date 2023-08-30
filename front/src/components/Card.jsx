import React from "react";

const Card = ({ src, name }) => {
  return (
    <div className="h-96 w-5/6 rounded-md text-center my-3 bg-[#e2dada] p-3 lg:h-96 lg:w-96">
      <img src={src} alt="img" className="bg-white h-4/6 w-full rounded mb-2" />

      <span className="my-2 font-semibold">{name}</span>
      <p className="font-light text-sm mt-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Card;
