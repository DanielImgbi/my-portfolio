import React from "react";

const NavBar = () => {
  return (
    <div className=" px-5 py-4 h-20 flex justify-between items-center">
      <div className=" p-4">
        <span className="text-3xl text-blue-600 font-bold mx-2 border border-white px-4">
          D
        </span>
        <span className="text-3xl font-semibold text-ellipsis "> aniel</span>
      </div>

      <nav>
        <ol className="lg:flex justify-between items-center bg-green-900 hidden">
          <li>home</li>
          <li>My Experience</li>
          <li>My Portfolio</li>
          <li>Contacts</li>
        </ol>
      </nav>
    </div>
  );
};

export default NavBar;
