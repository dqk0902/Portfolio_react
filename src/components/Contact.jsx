import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import CV from "../assets/CV_Khang_Duong.pdf";
const Contact = () => {
  return (
    <div name="contact" className="bg-black">
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Contact
          </p>
          <p className="py-6">Would you like to work with me?</p>
          <p>
            Pop me an email at duongquockhang.1205@gmail.com or give me a shout
            on social media.
          </p>
          <div className="inline-flex">
            <a href="https://www.linkedin.com/in/khang-duong-3b4605229/">
              <FaLinkedin size={35} />
            </a>
            <a href="https://github.com/dqk0902">
              <FaGithub size={35} />
            </a>
            <a href={CV} target="_blank">
              <BsFillPersonLinesFill size={35} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
