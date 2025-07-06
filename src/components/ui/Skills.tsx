"use client";

import { FaJava } from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiSpringboot,
  SiReact,
  SiApachekafka,
  SiDocker,
  SiKubernetes,
  SiTensorflow,
  SiMongodb,
  SiAmazon,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: FaJava },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "SQL", icon: SiMysql },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "React", icon: SiReact },
  { name: "Kafka", icon: SiApachekafka },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AWS", icon: SiAmazon },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-24 px-6 sm:px-12 lg:px-20"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-white">Skills</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center shadow-md
                       transition-all duration-300 transform hover:scale-105 group hover:bg-cyan-900/30 hover:shadow-cyan-500/20"
          >
            <div className="bg-white/10 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center 
                            transition-all duration-300 group-hover:bg-cyan-400/20">
              <Icon className="text-white group-hover:text-cyan-400 transition-colors duration-300" size={36} />
            </div>
            <p className="text-md font-medium text-gray-200 group-hover:text-cyan-400 transition-colors duration-300">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
