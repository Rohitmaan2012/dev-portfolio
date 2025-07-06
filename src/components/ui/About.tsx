"use client";

import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-offset bg-[#111418] py-24 px-6 sm:px-10 mt-24 border-t border-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-white md:translate-x-7">About Me</h2>
      {/* text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16 text-left px-6 md:px-0 md:pl-[calc(theme(spacing.6)+theme(spacing.12))] lg:pl-[calc(theme(spacing.6)+theme(spacing.20))] */}

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Avatar - lifted slightly above */}
        <div className="mt-0 sm:-mt-24 w-[18rem] sm:w-[26rem] h-[18rem] sm:h-[26rem] relative rounded-full overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.15)] border border-cyan-500/30 flex-shrink-0">
          <Image
            src="/images/avatar-rohit.png"
            alt="Rohit Maan"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Text + Socials */}
        <div className="text-left max-w-2xl text-gray-300 space-y-5">
          <p className="text-lg leading-relaxed">
            Experienced Full Stack Developer with a passion for designing and building robust, scalable applications & software systems with AI-powered solutions.
          </p>
          <p className="text-lg leading-relaxed">
            Currently, I am pursuing my Master&#39;s Degree in Artificial Intelligence from University of South Florida with 3.83 GPA. I&#39;ll be graduating in May 2026.
          </p>
          <p className="text-lg leading-relaxed">
            My journey in tech began with a strong foundation in computer science and has led me through exciting projects across fintech, telecom, and cyber defense.
          </p>
          <p className="text-lg leading-relaxed">
            When I’m not coding, I’m either stretching my legs on the soccer field, diving into sci-fi realms, or rallying through a game of tennis.
          </p>

          {/* Social icons */}
          <div className="flex gap-6 pt-4 items-center">
            <a
                href="https://github.com/Rohitmaan2012"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-125 hover:-translate-y-1 duration-300"
            >
                <Github className="w-7 h-7 text-white" />
            </a>
            <a
                href="https://linkedin.com/in/rohitmaan2012"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-125 hover:-translate-y-1 duration-300"
            >
                <Linkedin className="w-7 h-7 text-[#0A66C2]" />
            </a>
            <a
                href="https://leetcode.com/Rohitmaan2012/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-125 hover:-translate-y-1 duration-300"
            >
                <Image
                src="/images/leetcode_logo.png"
                alt="LeetCode"
                width={28}
                height={28}
                className="object-contain"
                />
            </a>
            </div>
        </div>
      </div>
    </section>
  );
}
