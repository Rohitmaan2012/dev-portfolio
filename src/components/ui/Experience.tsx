"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCog, FaRocket } from "react-icons/fa";

const experiences = [
  {
    company: "Cyber Florida",
    role: "SOC Analyst - Graduate Assistant",
    period: "Jan 2025 – May 2025",
    description:
      "At Cyber Florida (USF), I contributed to the Drones project with a focus on cybersecurity monitoring and network forensics. I used Splunk to analyze real-time SIEM alerts and detect potential threats. My responsibilities included deep packet inspection across TCP/IP layers to identify anomalies like port scans and ICMP irregularities. I also performed forensic analysis of network logs, leveraging IP tracing, subnetting, and routing patterns to investigate indicators of compromise and trace the origin of threats.",
    tags: ["Splunk", "Wireshark", "Network Forensics"],
    icon: <FaShieldAlt className="text-cyan-400" />,
    logo: "/logos/cyberflorida_logo.png",
  },
  {
    company: "British Telecommunications Group",
    role: "Senior Software Engineer",
    period: "Dec 2023 – July 2024",
    description:
      "At BT Group, I worked with the EE team to enhance broadband and mobile service capabilities, focusing on customer and order-basket functionalities. I improved core features like product inventory management and payment gateways, contributing to a 68% increase in monthly revenue. I led in-depth code reviews to identify and resolve critical issues, which boosted system reliability and reduced production bug reports by over 30%. Additionally, I used Swagger tools like OpenAPI for API design and documentation, and restructured the codebase into modular, reusable utility components to support long-term scalability.",
    tags: ["Java", "Spring Boot", "MySQL"],
    icon: <FaCog className="text-cyan-400" />,
    logo: "/BT_logo.svg",
  },
  {
    company: "Deloitte USI",
    role: "Software Engineer",
    period: "May 2021 – July 2023",
    description:
      "At Deloitte, I developed InsurCloud, an end-to-end insurance web application, as part of a cloud-based, distributed system. I designed scalable microservices using Java Spring Boot following a service-oriented architecture, deployed via Docker, and integrated with Jenkins to streamline CI/CD processes. To enable real-time capabilities, I implemented web sockets supporting over 10,000 concurrent users with ~40ms latency, boosting user retention by 25%. I also utilized Redis and Kafka to handle high-speed data processing at over 1 million messages per second and implemented rate limiting using the token bucket algorithm to control REST API traffic effectively.",
    tags: ["Docker", "Kubernetes", "AWS"],
    icon: <FaRocket className="text-cyan-400" />,
    logo: "/logos/deloitte_logo.png",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto py-24 px-6 sm:px-12 lg:px-20 border-t border-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-16 font-bold text-center text-white">
        Work Experience
      </h2>

      <div className="relative border-l-2 border-cyan-600/30 pl-6 space-y-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <span className="absolute left-0 top-3 -translate-x-1/2 w-5 h-5 bg-cyan-400/20 border-2 border-cyan-400 rounded-full flex items-center justify-center">
              {exp.icon}
            </span>

            <Card className="bg-gradient-to-br from-[#0f1117] via-[#1a1f2e] to-[#10131c] border border-white/20 rounded-[3rem] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)]">
              <CardContent className="p-0">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                  {/* Logo + Title */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-contain rounded-md border border-white/10"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-white tracking-wide">
                        {exp.role}
                      </h3>
                      <p className="text-base text-cyan-400 mt-1 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Period */}
                  <span className="text-sm text-white bg-white/10 px-4 py-1 rounded-full font-medium border border-white/10">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 text-xs font-medium">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
