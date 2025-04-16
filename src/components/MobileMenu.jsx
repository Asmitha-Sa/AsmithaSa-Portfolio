import React, { useEffect } from "react";

const MobileMenu = ({ closeMenu }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 pt-16 bg-black/10 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-6">
      <button onClick={closeMenu} className="absolute top-5 right-5 text-white text-2xl">
        ✕
      </button>

      <a href="#home" onClick={closeMenu} className="text-white text-xl hover:text-sky-300">Home</a>
      <a href="#about" onClick={closeMenu} className="text-white text-xl hover:text-sky-300">About</a>
      <a href="#internships" onClick={closeMenu} className="text-white text-xl hover:text-sky-300">Internships</a>
      <a href="#projects" onClick={closeMenu} className="text-white text-xl hover:text-sky-300">Projects</a>
      <a href="#certificates" onClick={closeMenu} className="text-white text-xl hover:text-sky-300">Certificates</a>
      <a href="#contact" onClick={closeMenu} className="text-white text-xl hover:text-sky-300">Contact</a>
    </div>
  );
};

export default MobileMenu;
