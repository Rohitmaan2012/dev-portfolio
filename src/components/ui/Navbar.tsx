"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-[#111111]/90 via-[#3b3f49]/90 to-[#111111]/90 backdrop-blur-lg border-b border-white/10 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 md:px-20">
        {/* Logo */}
        <a href="#hero" className="text-3xl font-extrabold tracking-tight flex items-center cursor-pointer">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            &lt;DEV&gt;
          </span>
          <span className="text-white ml-1">FOLIO</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10 text-lg font-semibold text-white font-raleway">
        {/* <nav className="hidden lg:flex gap-6 text-lg font-medium text-gray-300 font-inter"></nav> */}
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-cyan-400 transition-all duration-300">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl lg:hidden focus:outline-none cursor-pointer"
        >
          {isOpen ? <IoMdClose /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#111111]/95 px-8 pb-6 pt-4 text-white">
          <ul className="space-y-4 text-xl font-semibold font-raleway text-center">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block hover:text-cyan-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
