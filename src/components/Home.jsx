import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import dqk from "../assets/dqk.png";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#e0f2fe] ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            Hi, I'm Duong Quoc Khang
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am Junior Software Developer. In addition, I am the ideal
            candidate of a team searching for a multifaceted developer who can
            motivate the team and oversee the development process. Also, I am a
            developer with a strong aptitude for problem-solving and an
            adaptable mentality.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-[#7dd3fc] cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={dqk}
            alt="my profile"
            className="rounded-2xl object-cover h-80 w-150 flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
