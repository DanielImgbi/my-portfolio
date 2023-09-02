import React from "react";

const RoundedBadge = ({ src, name }) => {
  return (
    <>
      <div className=" h-28 w-28  flex flex-col justify-center items-center">
        <img
          src={src}
          alt="badge"
          className="rounded-full h-2/4 w-3/6 shadow-md  bg-gray-200 "
        />
        <span className="text-gray-300">{name}</span>
      </div>
    </>
  );
};

export default RoundedBadge;
