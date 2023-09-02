import React from "react";
import Badge from "./badge";
import Card from "./Card";
import { motion } from "framer-motion";

const WhatIDo = () => {
  return (
    <div className="px-6 text-2xl mb-5 lg:block  " id="portfolio">
      <div className="text-3xl font-bold my-10 mx-5 text-center">
        My Creative Portfolio
        <span className="mx-2">Section</span>
      </div>

      <div className="flex justify-around w-full lg:w-4/6 lg:m-auto">
        <Badge>UI/UX</Badge>
        <Badge>React js</Badge>
        <Badge>Next js</Badge>
        <Badge>Vanilla js</Badge>
      </div>
      <div className=" w-full box-border py-5 flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center lg:flex-wrap">
        <motion.a href="https://portfolio-elijah.netlify.app">
          <Card
            name="Elijah"
            detail={"a portfolio website"}
            src="/Elijah-Porfolio.png"
          />
        </motion.a>
        <motion.a href="https://poke-app-daniel.netlify.app">
          <Card
            name="Pokemon"
            detail={"Pokemon website with complex poke api"}
            src={"/Pokemon.png"}
          />
        </motion.a>

        <motion.a href="https://daniel-bookstore.netlify.app">
          <Card
            name="upflex books"
            detail={"Book store app"}
            src={"/Upflex-Book-Store.png"}
          />
        </motion.a>
        <motion.a href="danieldelicacy.onrender.com">
          <Card
            name="Sales App"
            detail={"Point of sales app"}
            src={"/POINT-OF-SALE.png"}
          />
        </motion.a>

        <Card name="Fylo web" />

        <motion.a href="danieldelicacy.onrender.com">
          <Card
            name="Safcert"
            detail={
              "The complete digital solution for the processing and issuance of important academic documents."
            }
            src={"/SAFCerts.png"}
          />
        </motion.a>
      </div>
    </div>
  );
};

export default WhatIDo;
