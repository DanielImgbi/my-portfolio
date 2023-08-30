import React from "react";
import { FaDev } from "react-icons/fa";

const WhatIDo = () => {
  return (
    <div className="px-6 text-2xl mb-5">
      <h1 className="text-3xl text-[#f5c781] font-bold my-10 mx-5 text-center">
        What I do
      </h1>
      <div className="flex justify-center">
        <FaDev className="text-[#f5c781] mr-2 text-3xl" />
      </div>
    </div>
  );
};

export default WhatIDo;
