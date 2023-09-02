import AboutMe from "../components/AboutMe";
import Experice from "../components/Experice";
import Footer from "../components/Footer";
import WhatIDo from "../components/WhatIDo";
import LandingPage from "../components/landingPage";

const Pages = () => {
  return (
    <div className="scroll-smooth lg:bg-white">
      <LandingPage />
      <AboutMe />
      <WhatIDo />
      <Experice />
      <Footer />
    </div>
  );
};

export default Pages;
