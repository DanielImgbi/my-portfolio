import { useState } from "react";
import { FaHamburger, FaHome, FaBrain, FaFile, FaPhone } from "react-icons/fa";

const DropDown = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle((prev) => !prev);
  };

  return (
    <div
      className=" px-5 py-4 h-20 flex justify-between items-center"
      id="landing-page"
    >
      <div className=" shadow-md">
        <span className="text-3xl bg-[#fad8a6] text-white rounded-tr-full font-bold border border-white px-4 py-2 shadow-md">
          D
        </span>
        <span className="text-4xl font-semibold text-ellipsis pr-1 ">
          aniel
        </span>
      </div>
      <div className="flex">
        <FaHamburger
          className={`text-3xl font-semibold text-ellipsis lg:hidden `}
          onClick={handleNavToggle}
        />

        {navToggle && (
          <nav
            className={`absolute top-20 left-0 w-full lg:w-20 lg:rounded-md lg:py-2 lg:fixed lg:top-80  lg:shadow-lg `}
          >
            <ol className="flex flex-col justify-around text-3xl font-semibold px-2  bg-white  h-[250px] lg:justify-between lg:items-center ">
              <li>
                <a href="#" className="flex items-center">
                  <FaHome className="text-[#fad8a6] mr-2 " />
                  <span className="block lg:hidden">Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <FaBrain className="text-[#fad8a6] mr-2" />
                  <span className="lg:hidden">My Experience</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <FaFile className="text-[#fad8a6] mr-2" />
                  <span className="lg:hidden">My Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <FaPhone className="text-[#fad8a6] mr-2" />
                  <span className="lg:hidden">Contacts</span>
                </a>
              </li>
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};

export default DropDown;
