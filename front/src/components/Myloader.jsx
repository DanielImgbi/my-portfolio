import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Myloader = () => {
  return (
    <div className=" h-screen  w-full flex items-center justify-center">
      <ClipLoader color={"green"} loading={true} size={250} />
    </div>
  );
};

export default Myloader;
