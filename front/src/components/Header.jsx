import { useState } from "react";
import { FaBars } from "react-icons/fa";

import NavBar from "./NavBar";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle((prev) => !prev);
  };

  return (
    <div
      className="fixed z-30 top-0 w-full left-0 px-5 py-4 h-20 flex justify-between items-center bg-white bg-opacity-60 backdrop-filter backdrop-blur-md "
      id="landing-page"
    >
      <div className=" shadow-md">
        <span className="text-3xl bg-green-400 text-white rounded-tr-full font-bold border border-white px-4 py-2 shadow-md">
          D
        </span>
        <span className="text-4xl font-semibold text-ellipsis pr-1 ">
          aniel
        </span>
      </div>
      <div className="flex">
        <span
          className={`text-3xl mx-5 font-semibold text-ellipsis lg:hidden `}
          onClick={handleNavToggle}
        >
          {navToggle ? <span>X</span> : <FaBars />}
        </span>

        <NavBar />

        {/* drop down */}
        {navToggle && (
          <nav
            className={`absolute top-20 right-0 w-full z-20   h-[600px] bg-white `}
          >
            <ol className="flex flex-col justify-around text-xl  font-bold px-4   h-3/6  ">
              <li>
                <a
                  href="#home"
                  className="flex items-center hover:text-green-400"
                >
                  <span className="block lg:hidden">Home</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="flex items-center">
                  <span className="lg:hidden hover:text-green-400">
                    My Portfolio
                  </span>
                </a>
              </li>
              <li>
                <a href="#experience" className="flex items-center">
                  <span className="lg:hidden hover:text-green-400">
                    My Experience
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center">
                  <span className="lg:hidden hover:text-green-400">
                    Contacts
                  </span>
                </a>
              </li>
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
