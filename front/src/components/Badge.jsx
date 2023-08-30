import React from "react";

const Badge = ({ children }) => {
  return (
    <div className="p-2 rounded-md font-light bg-[#e7e1e1] lg:py-3 lg:px-5">
      {children}
    </div>
  );
};

export default Badge;
