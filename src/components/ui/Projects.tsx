"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center gap-4 px-6 sm:px-10 py-24 bg-[#111418] text-white border-t border-gray-800"
    >
      <div className="text-center mb-12">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Projects
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {[
          {
            title: "Movie Recommendation System",
            img: "/images/MovieRS.png",
            desc: "Implemented an AI-based API which predicts popular and top rated movies by location, recent searches and age demographics.",
            github: "https://github.com/Rohitmaan2012/Movie-Recommendation-System",
            live: "#",
          },
          {
            title: "Smart Email Assistant",
            img: "/images/emailAI.png",
            desc: "Built AI-based Chrome extension for Gmail that generates email replies by analyzing incoming messages's tone and context.",
            github: "https://github.com/Rohitmaan2012/email-writer",
            live: "#",
          },
          {
            title: "Twitter Sentiment Analysis",
            img: "/images/TwitterSentiment.png",
            desc: "Predicted the sentiment polarity, specifically the level of positivity for individual tweets using natural language processing techniques.",
            github: "https://github.com/Rohitmaan2012/Twitter_Sentiment_Analysis",
            live: "#",
          },
        ].map((proj, idx) => (
          <div
            key={idx}
            className="bg-[#1e1e1e] rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.18)] hover:shadow-[0_0_45px_rgba(255,255,255,0.35)] transition-all duration-300 transform hover:scale-[1.03] flex flex-col"
          >
            <Image
              src={proj.img}
              alt={proj.title}
              width={380}
              height={220}
              className="rounded-t-2xl object-cover w-full h-[220px]"
            />
            <div className="flex flex-col flex-grow px-5 py-4">
              <h2 className="text-xl font-bold text-white mb-4 text-center">{proj.title}</h2>
              <p className="text-sm text-gray-300 mb-5 leading-snug text-justify">{proj.desc}</p>
              <div className="flex justify-between items-center">
                <a href={proj.github} className="text-sm text-blue-400 hover:underline flex items-center gap-1">
                  <FaGithub className="text-lg" />
                  View Code
                </a>
                <a href={proj.live} className="text-sm text-blue-400 hover:underline flex items-center gap-1">
                  <FiExternalLink className="text-lg" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
