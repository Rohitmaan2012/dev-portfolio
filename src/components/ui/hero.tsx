"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { Mail, FileText} from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: hasMounted ? 0 : 1}}
      animate={{ opacity: 1}}
      transition={{ duration: hasMounted ? 0.5 : 0 }}
      className="relative pt-32 pb-20 px-6 sm:px-10 max-w-4xl mx-auto flex flex-col items-center text-center"
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 sm:whitespace-nowrap whitespace-normal">
        <span className="text-white block sm:inline">Hi, I&apos;m </span>
        <span
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text block sm:inline"
          style={{ display: "inline-block" }}
        >
          <span className="inline-block min-h-[6.5rem] sm:min-h-0 leading-[1.15]">
            <Typewriter
              words={["Rohit Maan", "Software Engineer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </span>
      </h1>

      <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mt-6 sm:mt-0 px-2 sm:px-0">
        <span className="block">Designing digital experiences that hit different</span>
        <span className="block mt-3 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text tracking-wide">
          Fast. Intuitive. Unforgettable.
        </span>
      </p>

    <div className="flex gap-6 flex-wrap justify-center mt-4">
    <Button
      onClick={() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transform transition duration-300 ease-in-out flex items-center gap-2"
    >
      <Mail className="w-5 h-5" />
      Let’s Talk
    </Button>

    <a
      href="/Rohit_Maan_SDE_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer px-8 py-3 rounded-full border-2 border-cyan-500 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white hover:shadow-blue-500/40 hover:scale-105 transform transition duration-300 ease-in-out flex items-center gap-2"
    >
      <FileText className="w-5 h-5" />
      View Resume
    </a>

    </div>
    </motion.section>
  );
}
