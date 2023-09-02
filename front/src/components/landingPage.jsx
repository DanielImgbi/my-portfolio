import {
  FaFacebook,
  FaInbox,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "./Header";
import Writer from "./Writer";

const LandingPage = () => {
  return (
    <main
      className="h-screen mt-20 bg-cover lg:flex lg:items-center "
      id="home"
    >
      <Header />
      <div className="  h-3/4 lg:h-full lg:w-3/6">
        <img
          src="/e4569443714172f2773aea229195685c.jpg"
          alt="img"
          className="h-full w-full"
        />
      </div>

      <div className="w-full flex flex-col items-center lg:h-4/5 lg:w-3/6 lg:py-32 ">
        <Writer />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-white absolute top-36 w-12 rounded-md   lg:w-16 lg:rounded-md lg:py-2 lg:fixed lg:top-80 lg:right-0  lg:shadow-lg lg:block"
      >
        <span className="flex flex-col justify-around text-3xl font-semibold px-2 rounded-md bg-white  h-[250px] lg:justify-between lg:items-center">
          <FaFacebook className="text-green-400 mr-2" />
          <FaInbox className="text-green-400 mr-2" />
          <FaInstagram className="text-green-400 mr-2" />
          <FaWhatsapp className="text-green-400 mr-2" />
          <FaTwitter className="text-green-400 mr-2" />
        </span>
      </motion.div>
    </main>
  );
};

export default LandingPage;
