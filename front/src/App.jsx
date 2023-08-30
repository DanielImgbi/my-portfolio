import AboutMe from "./components/AboutMe";
import DropDown from "./components/DropDown";
import NavBar from "./components/NavBar";
import WhatIDo from "./components/WhatIDo";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <div className="scroll-smooth lg:bg-white">
      <DropDown />
      <NavBar />
      <LandingPage />
      <AboutMe />
      <WhatIDo />
    </div>
  );
}

export default App;
