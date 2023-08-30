import { useState } from "react";
import { FaHamburger, FaHome, FaBrain, FaFile, FaPhone } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav
      className={`bg-white absolute top-20 w-full hidden lg:w-16 lg:rounded-md lg:py-2 lg:fixed lg:top-80 lg:right-0  lg:shadow-lg lg:block`}
    >
      <ol className="flex flex-col justify-around text-3xl font-semibold px-2  bg-white  h-[250px] lg:justify-between lg:items-center ">
        <li>
          <a href="#" className="flex items-center">
            <FaHome className="text-[#f5c781] mr-2 " />
            <span className="block lg:hidden">Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaBrain className="text-[#f5c781] mr-2" />
            <span className="lg:hidden">My Experience</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaFile className="text-[#f5c781] mr-2" />
            <span className="lg:hidden">My Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaPhone className="text-[#f5c781] mr-2" />
            <span className="lg:hidden">Contacts</span>
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;
