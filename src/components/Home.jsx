import React from "react";
import videoBg from "../assets/my.mp4";
import { FaGithub, FaLinkedin, FaHackerrank, FaGoogle } from "react-icons/fa";
import LeetcodeLogo from "../assets/leetcode1.png";

const Home = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        className="absolute w-full h-full object-cover z-0"
        src={videoBg}
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 pt-28 md:pt-0 text-left">
        <h1 className="text-4xl md:text-4xl font-bold text-white">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg md:text-1xl text-gray-300 max-w-screen-sm">
          Bringing Ideas to Life with Code, Creativity & Curiosity ✨
        </p>
        <p className="mt-4 text-lg md:text-1xl text-gray-300 text-left">
          I’m passionate about crafting user-friendly web experiences, exploring
          the potential of AI, and building scalable solutions using cloud technologies.
          Explore my journey, projects, and passions right here!
        </p>

        {/* Social Media Links */}
        <div className="mt-6 flex gap-6 flex-wrap">
          <a
            href="https://github.com/Asmitha-Sa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-300 transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/asmitha-sa-11b18b285/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-300 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://leetcode.com/u/ASMITHA04_SA/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-300 transition duration-300"
          >
            <img src={LeetcodeLogo} alt="LeetCode" className="w-8 h-8 filter invert" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/22cs022_KPRIET"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-300 transition duration-300"
          >
            <FaHackerrank size={30} />
          </a>
          <a
            href="https://www.cloudskillsboost.google/public_profiles/a295ecf3-b936-4ad4-964b-825bfa1e612c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-300 transition duration-300"
          >
            <FaGoogle size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
