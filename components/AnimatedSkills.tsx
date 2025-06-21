// src/components/AnimatedSkills.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaLaravel, FaJs, FaPhp, FaGithub } from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const AnimatedSkills = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);

  //   // Add subtle continuous animation
  //   const interval = setInterval(() => {
  //     setIsVisible((v) => !v);
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, []);

  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  setIsVisible(true);
  
  // New timing logic
  const interval = setInterval(() => {
    setIsVisible(false);
    
    // Set visible again after 500ms
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    // Clear timeout when component unmounts
    return () => clearTimeout(timeout);
  }, 8000); // Main interval remains 8 seconds

  return () => clearInterval(interval);
}, []);

  const skills = [
    {
      name: "React",
      color: "from-blue-500 to-cyan-500",
      icon: <FaReact className="text-2xl" />,
      level: 95,
    },
    {
      name: "Next.js",
      color: "from-indigo-500 to-purple-500",
      icon: <SiNextdotjs className="text-2xl" />,
      level: 90,
    },
    {
      name: "Laravel",
      color: "from-green-500 to-emerald-500",
      icon: <FaLaravel className="text-2xl" />,
      level: 85,
    },
    {
      name: "Tailwind CSS",
      color: "from-cyan-500 to-sky-500",
      icon: <SiTailwindcss className="text-2xl" />,
      level: 98,
    },
    {
      name: "TypeScript",
      color: "from-blue-600 to-indigo-600",
      icon: <SiTypescript className="text-2xl" />,
      level: 88,
    },
    {
      name: "UI/UX Design",
      color: "from-purple-500 to-fuchsia-500",
      icon: <FaFigma className="text-2xl" />,
      level: 80,
    },{
      name: "JavaScript",
      color: "from-yellow-500 to-amber-500",
      icon: <FaJs className="text-2xl" />,
      level: 80,
    },{
      name: "PHP",
      color: "from-emerald-500 to-green-500",
      icon: <FaPhp className="text-2xl" />,
      level: 80,
    },{
      name: "Git & GitHub",
      color: "from-purple-500 to-fuchsia-500",
      icon: <FaGithub className="text-2xl" />,
      level: 80,
    },{
      name: "MySQL",
      color: "from-purple-500 to-emerald-500",
      icon: <SiMysql className="text-2xl" />,
      level: 80,
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const hoverItem = {
    scale: 1.05,
    y: -5,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const tapItem = {
    scale: 0.98,
    transition: { duration: 0.1 },
  };

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Expertise
        </motion.h2>
        <motion.p
          className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          My core competencies and specialized skills
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative"
            variants={item}
            whileHover={hoverItem}
            whileTap={tapItem}
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center h-full border border-slate-200 dark:border-slate-700 transition-all duration-300 group">
              {/* Skill icon with gradient background */}
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:rotate-[15deg]`}
              >
                {skill.icon}
              </div>

              {/* Skill name */}
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                {skill.name}
              </h3>

              {/* Skill level indicator */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-3">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>

              {/* Percentage badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                {skill.level}%
              </div>

              {/* Subtle floating effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

     

      {/* Animated background elements */}
      {/* Generate random values once to avoid hydration errors */}
      {(() => {
        const [mounted, setMounted] = React.useState(false);
        const bgElements = React.useMemo(
          () =>
            Array.from({ length: 8 }).map(() => ({
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: Math.random() * 100,
              top: Math.random() * 100,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: 1 + Math.random() * 0.5,
              duration: 10 + Math.random() * 20,
            })),
          []
        );
        React.useEffect(() => {
          setMounted(true);
        }, []);
        if (!mounted) return null;
        return (
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {bgElements.map((el, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10"
                style={{
                  width: `${el.width}px`,
                  height: `${el.height}px`,
                  left: `${el.left}%`,
                  top: `${el.top}%`,
                }}
                animate={{
                  x: [0, el.x],
                  y: [0, el.y],
                  scale: [1, el.scale],
                }}
                transition={{
                  duration: el.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        );
      })()}

    </div>
  );
};

export default AnimatedSkills;

{/* <motion.div
  className="flex flex-wrap gap-3 mb-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.7, delay: 0.5 }}
>
  {skills.map((skill, index) => (
    <motion.span
      key={index}
      className={`${skill.color} px-4 py-2 text-white rounded-full font-medium relative overflow-hidden`}
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.5 + index * 0.05,
        type: "spring",
        stiffness: 300,
      }}
      whileHover={{
        scale: 1.1,
        y: -3,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-0 rounded-full"
        animate={{
          opacity: [0, 0.3, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
      />

      <span className="relative z-10 flex items-center">
        {skill.name}
        <motion.span
          className="ml-2"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          ✨
        </motion.span>
      </span>

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-0"
          style={{
            top: `${Math.random() * 20}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -10, -20],
          }}
          transition={{
            duration: 1.5,
            delay: Math.random() * 1,
            repeat: Infinity,
            repeatDelay: 3 + Math.random() * 2,
          }}
        />
      ))}
    </motion.span>
  ))}
</motion.div> */}