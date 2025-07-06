"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#111111]/90 via-[#3b3f49]/90 to-[#111111]/90 text-white py-6 px-4 border-t border-white/10 shadow-sm">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/rohitmaan2012"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rohitmaan2012"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm sm:text-base text-gray-300 font-medium text-center">
          © 2025 Rohit Maan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
