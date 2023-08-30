import React from "react";
import { FaMailBulk, FaMailchimp, FaPhone } from "react-icons/fa";

const LandingPage = () => {
  return (
    <main className="h-screen lg:flex lg:items-center lg:rounded-tl-full lg:bg-[#fad8a6]">
      {/* h-[410px] lg:w-[430px]*/}
      <div className="h-[410px] flex flex-col justify-center items-center lg:w-[430px]  lg:ml-4">
        <div className="h-5/6 w-10/12 rounded-full ">
          <img
            src="public/Screenshot_20230829-151614~2.jpg"
            alt="user img"
            className="h-full w-full bg-gray-200 rounded-full "
          />
        </div>
      </div>

      <div className=" text-xl px-4 font-semibold">
        <span className="py-3 my-5 border-b-2 font-light">Hello, I'm </span>
        <p className="font-bold text-3xl mt-5 font-serif"> Imgbi G. Daniel</p>
        <p className="font-light">Web Developer</p>
      </div>

      <div className=" text-xl px-4 font-semibold mt-7">
        <span className="flex">
          <FaMailBulk className="text-[#fad8a6] mr-2" />
          imgbidanielgodspower@gmail.com
        </span>

        <span className="flex mt-4">
          <FaPhone className="text-[#fad8a6] mr-2" /> +234 9136 710 274
        </span>
      </div>
    </main>
  );
};

export default LandingPage;
