"use client";

// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaSun,
  FaMoon,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { type } from "os";
import { useStore } from "@/store/store";
import ThemeToggleButton from "./nav/ThemeToggleButton";
import { Moon, Sun } from "lucide-react";
import TypewriterTextCycle from "./TypewriterTextCycle";
import ProjectButton from "./ProjectButton";
import { FaDownload } from "react-icons/fa";
// import AnimatedSkills from "./AnimatedSkills";

type HeroSectionProps = {
  image: string;
  aboutMe: string;
};


function HeroSection({ image, aboutMe }: HeroSectionProps) {
  const isDark = useStore((state: { isDark: boolean }) => state.isDark);
  const setIsDark = useStore((state: { setIsDark: (value: boolean) => void }) => state.setIsDark);

  // const [darkMode, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Skills badges with colors
  const skills = [
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Next.js", color: "bg-indigo-500" },
    { name: "PHP", color: "bg-emerald-500" },
    { name: "Laravel", color: "bg-purple-500" },
    { name: "MySQL", color: "bg-orange-500" },
    { name: "Tailwind CSS", color: "bg-sky-500" },
    { name: "Git", color: "bg-gray-500" },
  ];

  // Stats data
  const stats = [
    { value: "2", label: "Years Exp" },
    // { value: "50+", label: "Projects" },
    // { value: "20+", label: "Clients" },
    { value: "9", label: "Technologies" },
  ];

  // Testimonial data
  const testimonials = [
    {
      name: "John Doe",
      role: "CTO at Tech Innovations",
      content:
        '"Ye Htet Aung delivered exceptional work on our web platform. His attention to detail and problem-solving skills set him apart. Highly recommended!"',
    },
    {
      name: "Jane Smith",
      role: "Product Manager at Digital Solutions",
      content:
        '"Working with Ye was a pleasure. He transformed our complex requirements into an elegant solution that exceeded our expectations."',
    },
  ];

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    localStorage.setItem("darkMode", (!isDark).toString());
  };

  // Check for saved theme preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(savedDarkMode);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      <div className=" mx-auto px-4 py-12 sm:py-14">
        {/* Theme toggle */}
        <div className="absolute top-4 flex justify-center items-center gap-2 right-4 ">
          <ThemeToggleButton />
          {/* download resume */}
          <a
            href="Junior-web-developer-Ye-Htet-Aung.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800 rounded-lg shadow hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
            download
          >
            Download Resume
          <FaDownload/>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-sm:mt-6">
          {/* Left Column - Text Content */}
          <motion.div
            className="flex-1 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Welcome badge */}
            {/* <motion.div
              className="mb-4 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold tracking-wide">
                WELCOME TO MY PORTFOLIO
              </span>
            </motion.div> */}

            {/* Name with gradient */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-sky-100 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="block text-blue-600 dark:text-blue-400">
                HEY, I'M
              </span>
              <span>
                <TypewriterTextCycle />
              </span>
            </motion.h1>

            {/* Animated tagline */}
            {/* <motion.div
              className="mb-6 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 border-r-4 border-blue-500 pr-2">
                Creative Developer & Problem Solver
              </h2>
            </motion.div> */}

            {/* Description */}
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
                {aboutMe}
            </motion.p>

            {/* Skills Badges */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`${skill.color} px-4 py-2 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  {skill.name}
                </span>
              ))}
            </motion.div>

            {/* <AnimatedSkills/> */}



            <ProjectButton />

            {/* Social Links */}
            <motion.div
              className="mt-10 flex gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              <a
                href="https://www.linkedin.com/in/ye-htet-aung-23abb4280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
              {/* <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a> */}
              <a
                href="https://github.com/Yehtetaung158/"
                className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"
              >
                <FaGithub />
                
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Profile image with floating animation */}
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-2xl">
                {/* Profile image placeholder with gradient */}
                {/* <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
              <div className="text-white text-6xl font-bold">YA</div>
            </div> */}
                <img src={image} alt="" />

                {/* Floating animation effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-white/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Floating elements around profile */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 backdrop-blur-sm border border-blue-200 dark:border-blue-500/30 shadow-lg"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 backdrop-blur-sm border border-indigo-200 dark:border-indigo-500/30 shadow-lg"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-1/3 -right-12 w-16 h-16 rounded-full bg-purple-500/10 dark:bg-purple-500/20 backdrop-blur-sm border border-purple-200 dark:border-purple-500/30 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            {/* Stats Section */}
            <motion.div
              className="mt-16 flex gap-4 max-w-lg justify-center items-center mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-4 flex  flex-col justify-center items-center rounded-2xl shadow text-center border border-slate-100 dark:border-slate-700"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonial Section */}
        {/* <motion.div
              className="mt-20 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold">
                  TESTIMONIALS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-slate-800 dark:text-slate-200">What People Say</h2>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonials[0].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{testimonials[0].name}</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">{testimonials[0].role}</div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic">
                  {testimonials[0].content}
                </p>
              </div>
            </motion.div> */}
      </div>
    </div>
  );
}

export default HeroSection;



            {/* Buttons */}
            {/* <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold rounded-full shadow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span>See My Projects</span>
              </a>
            </motion.div> */}