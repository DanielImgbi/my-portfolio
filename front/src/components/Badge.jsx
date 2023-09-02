import React from "react";

const Badge = ({ children }) => {
  return (
    <div className="p-1 rounded-md text-md font-light bg-white shadow-md lg:py-1 lg:px-5 ">
      {children}
    </div>
  );
};

export default Badge;
