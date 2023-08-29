import { FaHamburger, FaHome, FaBrain, FaFile, FaPhone } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className=" px-5 py-4 h-20 flex justify-between items-center ">
      <div className=" shadow-md">
        <span className="text-3xl bg-blue-600 text-white rounded-tr-full font-bold border border-white px-4 py-2 shadow-md">
          D
        </span>
        <span className="text-4xl font-semibold text-ellipsis pr-1 ">
          aniel
        </span>
      </div>

      <div className="flex">
        <FaHamburger
          className={`text-3xl font-semibold text-ellipsis lg:hidden `}
        />

        <nav
          className={`absolute top-20 w-full lg:w-20 lg:rounded-md lg:py-2 lg:fixed lg:top-80 lg:right-0 lg:shadow-lg `}
        >
          <ol className="flex flex-col justify-around text-3xl font-semibold px-2  bg-white  h-[250px] lg:justify-between lg:items-center ">
            <li>
              <a href="#" className="flex items-center">
                <FaHome className="text-blue-600 mr-2 " />{" "}
                <span className="lg:hidden">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <FaBrain className="text-blue-600 mr-2" />{" "}
                <span className="lg:hidden">My Experience</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <FaFile className="text-blue-600 mr-2" />{" "}
                <span className="lg:hidden">My Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <FaPhone className="text-blue-600 mr-2" />{" "}
                <span className="lg:hidden">Contacts</span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
