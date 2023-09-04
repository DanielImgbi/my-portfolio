import { lazy } from "react";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import LandingPage from "../components/landingPage";

const WhatIDo = lazy(() => import("../components/WhatIDo"));
const Experience = lazy(() => import("../components/Experience"));

const Pages = () => {
  return (
    <div className="scroll-smooth lg:bg-white">
      <LandingPage />
      <AboutMe />
      <WhatIDo />
      <Experience />
      <Footer />
    </div>
  );
};

export default Pages;
