import React from "react";
import Badge from "./badge";
import Card from "./Card";

const WhatIDo = () => {
  return (
    <div className="px-6 text-2xl mb-5 lg:block ">
      <div className="text-3xl text-[#f5c781] font-bold my-10 mx-5 text-center">
        My Creative Portfolio
        <span>Section</span>
      </div>

      <div className="flex justify-around lg:w-4/6">
        <Badge>UI/UX</Badge>
        <Badge>React js</Badge>
        <Badge>Next js</Badge>
        <Badge>Vanilla js</Badge>
      </div>
      <div className=" w-full py-5 flex flex-col items-center lg:flex-row lg:justify-around lg:flex-wrap">
        <Card name="Book Store App" src="/Screenshot_20230829-151614~2.jpg" />
        <Card name="Book Store App" />
        <Card name="Book Store App" />
        <Card name="Book Store App" />
        <Card name="Book Store App" />
      </div>
    </div>
  );
};

export default WhatIDo;
