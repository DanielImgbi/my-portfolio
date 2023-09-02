import { FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className=" w-full h-40 flex flex-col items-center mx-auto text-md px-4 font-semibold mt-7 lg:text-2xl lg:flex-row lg:justify-around"
        id="contact"
      >
        <span className="flex">
          <FaMailBulk className="text-green-400 mr-2" />
          imgbidanielgodspower@gmail.com
        </span>

        <span className="flex mt-4">
          <FaPhone className="text-green-400 mr-2" /> +234 9136 710 274
        </span>
      </div>

      <div className="w-full text-md flex justify-center my-9 lg:text-2xl">
        <span>&copy;</span> Daniel 2023
      </div>
    </>
  );
};

export default Footer;
