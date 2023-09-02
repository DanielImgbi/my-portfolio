import { useState } from "react";
import { FaHamburger, FaHome, FaBrain, FaFile, FaPhone } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav
      className={`absolute top-4 mx-7 hidden w-[500px] lg:rounded-md lg:py-2 lg:fixed lg:right-0  lg:block`}
    >
      <ol className="flex  justify-around text-xl font-semibold px-2 lg:justify-between lg:items-center ">
        <li>
          <a href="#home" className="flex items-center hover:text-green-400">
            <span className="block ">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="flex items-center hover:text-green-400"
          >
            <span className="">Portfolio</span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="flex items-center hover:text-green-400"
          >
            <span className="">Experience</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="flex items-center hover:text-green-400">
            <span className="">Contacts</span>
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;
