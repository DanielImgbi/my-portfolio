import React from "react";
import RoundedBadge from "./RoundedBadge";

const Experice = () => {
  const images = [
    { name: "Git", src: "git.png" },
    { name: "Html", src: "html.png" },
    { name: "Bootstap", src: "bootstrap.jpg" },
    { name: "tailwind", src: "tailwind.jpg" },
    { name: "Js", src: "js.png" },
    { name: "Css", src: "css.png" },
    { name: "React", src: "react.png" },
    { name: "Next js", src: "nextjs.png" },
    { name: "Framer", src: "framer.jpg" },
    { name: "Redux", src: "redux.png" },
    { name: "typescript", src: "typescript.png" },
    { name: "Node js", src: "nodejs.png" },
    { name: "Express", src: "expressjs.png" },
    { name: "MongoDB", src: "mongodb.png" },
    { name: "Mongoose", src: "mongoosejs.png" },
    { name: "JWT", src: "jwt.png" },
  ];
  return (
    <>
      <h1 className="text-center text-xl font-bold lg:text-3xl" id="experience">
        Skills and Experience
      </h1>
      <div className="w-full px-10 py-3 flex flex-col items-center lg:w-full lg:flex-row lg:justify-center">
        <div className="w-5/6 flex flex-wrap ">
          {images.map((img) => (
            <RoundedBadge src={`/${img.src}`} key={img.name} name={img.name} />
          ))}
        </div>
        <div className="w-3/6 ">
          <ol className="flex ">
            <li>
              <span className="font-bold text-lg lg:mx-4">2023</span>
            </li>

            <li>
              <ol className="text-lg font font-semibold">
                <li className="flex flex-col mb-3">
                  <span>Backend Developer</span>
                  <span className=" font-light">Frelancer (Arsify)</span>
                </li>

                <li className="flex flex-col">
                  <span>Fullstack Developer</span>
                  <span className=" font-light">Frelancer (Fiverr)</span>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Experice;
