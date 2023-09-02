import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";

const Writer = () => {
  const [skill, setSkill] = useState("");
  const skills = ["Hello! ", "I'm Daniel. ", "I'm a Web Developer. "];
  let i = 0;
  let e = 0;
  let isComplete = false;
  let canDelete = false;
  let holder = "";
  useLayoutEffect(() => writeEffect(), []);

  // Writting Effect Algorithm
  const writeEffect = () => {
    const test = (text) => setSkill(skill + text);
    if (i < skills.length) {
      let curSkill = skills[i];
      if (e < curSkill.length && isComplete === false) {
        holder += curSkill[e];
        test(holder);
        e++;
        if (e === curSkill.length) {
          isComplete = true;
          canDelete = true;
        }
      } else if (e !== 0 && canDelete === true) {
        holder = holder.slice(0, e - 2);
        test(holder);
        e--;
      } else {
        isComplete = false;
        canDelete = false;
        i++;
      }
    } else {
      i = 0;
    }
    setTimeout(() => writeEffect(), 250);
  };

  return (
    <h1 className=" flex items-center font-semibold text-3xl text-green-500 space-x-1 md:space-x-3 md:text-4xl md:font-bold">
      <span>{skill}</span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, delay: 0.5 }}
        className="w-1 h-11 md:h-20 bg-white mt-2 md:w-2"
      >
        |
      </motion.div>
    </h1>
  );
};

export default Writer;
