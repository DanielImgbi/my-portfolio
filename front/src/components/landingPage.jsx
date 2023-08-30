import React from "react";
import {
  FaFacebook,
  FaInbox,
  FaInstagram,
  FaMailBulk,
  FaMailchimp,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <main className="h-screen lg:flex lg:items-center lg:rounded-tl-full ">
      {/* h-[410px] lg:w-[430px]*/}
      <div className="h-[410px] flex flex-col justify-center items-center lg:w-3/6 lg:h-5/6  lg:ml-4">
        <div className="h-5/6 w-10/12 rounded-full ">
          <img
            src="/Screenshot_20230829-151614~2.jpg"
            alt="user img"
            className="h-full w-full bg-gray-200 rounded-full "
          />
        </div>
      </div>

      <div className="flex flex-col items-center  lg:h-4/5 lg:w-3/6 lg:py-32">
        <div className=" text-xl py-2 px-4 font-semibold rounded-md text-center w-5/6  shadow lg:shadow-xl lg:w-full">
          <span className="py-3 my-5 border-b-2 font-light">Hello, I'm </span>
          <p className="font-bold text-3xl mt-5 font-serif"> Imgbi G. Daniel</p>
          <p className="font-light">Web Developer</p>
        </div>

        <div className=" text-xl px-4 font-semibold mt-7 lg:text-2xl">
          <span className="flex">
            <FaMailBulk className="text-[#fad8a6] mr-2" />
            imgbidanielgodspower@gmail.com
          </span>

          <span className="flex mt-4">
            <FaPhone className="text-[#fad8a6] mr-2" /> +234 9136 710 274
          </span>

          <span className="my-5 p-3 text-3xl flex justify-between lg:w-3/4">
            <FaFacebook className="text-[#fad8a6] mr-2" />
            <FaInbox className="text-[#fad8a6] mr-2" />
            <FaInstagram className="text-[#fad8a6] mr-2" />
            <FaWhatsapp className="text-[#fad8a6] mr-2" />
            <FaTwitter className="text-[#fad8a6] mr-2" />
          </span>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
