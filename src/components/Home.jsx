import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-lg">
        <p className="text-pink-600 sm:text-sm xl:text-7xl ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Furkan Emre Akyel
        </h1>
        <h2 className="xl:text-4xl sm:text-sm font-bold text-[#8892b0]">
          I'm Front-End Developer and EEE
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px] xl:text-2xl sm:text-sm ">
          I'm an Electrical-Electronic Engineering student and Junior Front-End
          Developer. I'm keen on with web development, so I have been working
          and practicing HTML, CSS, Javascript, Git, GitHub and React for a long
          time. I can create cool responsive websites and web applications for
          you.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
