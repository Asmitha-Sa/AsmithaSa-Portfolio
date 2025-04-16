import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed w-full top-0 z-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-2xl font-bold">MyPortfolio</div>

          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-sky-300 transition">Home</a>
            <a href="#about" className="text-white hover:text-sky-300 transition">About</a>
            <a href="#internships" className="text-white hover:text-sky-300 transition">Internships</a>
            <a href="#projects" className="text-white hover:text-sky-300 transition">Projects</a>
            <a href="#certificates" className="text-white hover:text-sky-300 transition">Certificates</a>
            <a href="#contact" className="text-white hover:text-sky-300 transition">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showMenu && <MobileMenu closeMenu={() => setShowMenu(false)} />}
    </nav>
  );
};

export default Navbar;
