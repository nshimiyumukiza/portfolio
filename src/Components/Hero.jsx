
import { Link, Outlet } from "react-router";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import { motion } from "motion/react";
const Hero = () => {
  const [click, setClick] = useState();
  return (
    <div>
      <div className="bg-black text-white py-16 text-center px-12">
        <div className="flex justify-center">
          <img
            src="./image.png"
            alt=""
            className="mx-autor mb-8 w-48 h-48 rounded-full object-cover transifrom transition-transiform 
      duretion-300 hover:scale-105 "
          />
        </div>
        <h1 className="text-4xl font-bold">
          I'm{""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl fontd-bol">
            {" "}
            Nshimiyumukiza Erneste
          </span>
          ,student developer
        </h1>
        
        <p className="mt-4 text-lg text-gray-300 px-4 md:px-32">
          i have the goal to be full stack developer
        </p>
        <div className=" mt-8 space-x-4">
          <Link
            to="/contacts"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline px-4 py-2 rounded-full"
          >
            contact with me
          </Link>
          <Link
            to="/contact"

            className="bg-gradient-to-r  from-pink-400 to-blue-500 text-white hidden md:inline px-4 py-2 rounded-full"
          >
            resume
          </Link>
        </div>
      </div>
      <About />
      <Contact />
      <Outlet />
    </div>
  );
};

export default Hero;
