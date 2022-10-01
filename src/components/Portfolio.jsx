import React from "react";
import MU from "../assets/MU.png";
import weather_vue from "../assets/weatherapp.png";
import shoppingcart from "../assets/shoppingcart.png";
import Todo from "../assets/Todoapp.png";
import user_info from "../assets/user-info.png";
import weather_react from "../assets/weather_react.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: MU,
      href: "https://github.com/dqk0902/FinalProject",
    },
    {
      id: 2,
      src: Todo,
      href: "https://github.com/dqk0902/TodoApp",
    },
    {
      id: 3,
      src: shoppingcart,
      href: "https://github.com/dqk0902/Shopping-Cart",
    },
    {
      id: 4,
      src: weather_vue,
      href: "https://github.com/dqk0902/Weatherapp_Vue.js",
    },
    {
      id: 5,
      src: user_info,
      href: "https://github.com/dqk0902/ReactAssignment",
    },
    {
      id: 6,
      src: weather_react,
      href: "https://github.com/dqk0902/Weather-app-React",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  className="w-1/2 px-7 py-3 m-4 justify-center duration-200 hover:scale-105"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
