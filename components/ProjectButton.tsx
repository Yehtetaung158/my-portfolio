"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaCode, FaEnvelope, FaArrowRight } from "react-icons/fa";

const ProjectButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  type Particle = {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    color: string;
  };

  const [projectParticles, setProjectParticles] = useState<Particle[]>([]);
  const [contactParticles, setContactParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setIsVisible(true);

    // Create floating particles for projects button
    const projectInterval = setInterval(() => {
      if (isHovered) {
        const newParticle = {
          id: Date.now(),
          x: Math.random() * 100,
          y: 100,
          size: Math.random() * 10 + 5,
          duration: Math.random() * 2 + 1,
          color: "from-blue-400 to-indigo-500",
        };
        setProjectParticles((prev) => [...prev.slice(-10), newParticle]);
      }
    }, 100);

    // Create floating particles for contact button
    const contactInterval = setInterval(() => {
      if (isHoveredContact) {
        const newParticle = {
          id: Date.now() + 1, // Ensure unique ID
          x: Math.random() * 100,
          y: 100,
          size: Math.random() * 10 + 5,
          duration: Math.random() * 2 + 1,
          color: "from-emerald-400 to-teal-500",
        };
        setContactParticles((prev) => [...prev.slice(-10), newParticle]);
      }
    }, 100);

    return () => {
      clearInterval(projectInterval);
      clearInterval(contactInterval);
    };
  }, [isHovered, isHoveredContact]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      className="relative "
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.7, delay: 1.2 }}
    >
      {/* Buttons container */}
      <div className="flex flex-wrap justify-start gap-6 ">
        {/* Project Button */}
        <motion.div className="relative">
          {/* Floating particles for projects button */}
          {projectParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className={`absolute rounded-full bg-gradient-to-r ${particle.color}`}
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: 0,
                zIndex: -1,
              }}
              animate={{
                y: [0, -100],
                opacity: [1, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: particle.duration,
                ease: "easeOut",
              }}
              onAnimationComplete={() => {
                setProjectParticles((prev) =>
                  prev.filter((p) => p.id !== particle.id)
                );
              }}
            />
          ))}

          <motion.a
            href="#projects"
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-full shadow-2xl overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(59, 130, 246, 0.5), 0 10px 10px -5px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={(e) => {
              e.preventDefault();
              scrollToProjects();
            }}
          >
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                opacity: isHovered ? [0.3, 0.8, 0.3] : 0,
                scale: isHovered ? [1, 1.5, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)",
              }}
            />

            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: isHovered
                  ? "0 0 0 2px rgba(255,255,255,0.8)"
                  : "0 0 0 0px rgba(255,255,255,0)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Icon animation */}
            <motion.span
              animate={{
                rotate: isHovered ? [0, 10, -10, 0] : 0,
                y: isHovered ? [0, -5, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse",
              }}
            >
              <FaCode className="text-xl" />
            </motion.span>

            <span className="relative z-10">See My Projects</span>

            {/* Arrow animation */}
            <motion.span
              animate={{
                y: isHovered ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
              }}
            >
              <FaArrowDown className="text-sm" />
            </motion.span>
          </motion.a>
          <motion.div
            className="text-start text-blue-400 text-sm mt-2 font-medium"
            animate={{
              opacity: isHovered ? 1 : 0.5,
              y: isHovered ? 0 : -5,
            }}
            transition={{ duration: 0.3 }}
          >
            Discover amazing work!
          </motion.div>
        </motion.div>

        {/* Contact Button */}
        <motion.div className="relative">
          {/* Floating particles for contact button */}
          {contactParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className={`absolute rounded-full bg-gradient-to-r ${particle.color}`}
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: 0,
                zIndex: -1,
              }}
              animate={{
                y: [0, -100],
                opacity: [1, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: particle.duration,
                ease: "easeOut",
              }}
              onAnimationComplete={() => {
                setContactParticles((prev) =>
                  prev.filter((p) => p.id !== particle.id)
                );
              }}
            />
          ))}

          <motion.a
            href="#contact"
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-2xl overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(16, 185, 129, 0.5), 0 10px 10px -5px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHoveredContact(true)}
            onHoverEnd={() => setIsHoveredContact(false)}
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
          >
            {/* Glowing effect for contact button */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                opacity: isHoveredContact ? [0.3, 0.8, 0.3] : 0,
                scale: isHoveredContact ? [1, 1.5, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)",
              }}
            />

            {/* Animated border for contact button */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: isHoveredContact
                  ? "0 0 0 2px rgba(255,255,255,0.8)"
                  : "0 0 0 0px rgba(255,255,255,0)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Icon animation for contact button */}
            <motion.span
              animate={{
                rotate: isHoveredContact ? [0, 10, -10, 0] : 0,
                y: isHoveredContact ? [0, -5, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                repeat: isHoveredContact ? Infinity : 0,
                repeatType: "reverse",
              }}
            >
              <FaEnvelope className="text-xl" />
            </motion.span>

            <span className="relative z-10">Contact Me</span>

            {/* Arrow animation for contact button */}
            <motion.span
              animate={{
                y: isHovered ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
              }}
            >
              <FaArrowDown className="text-sm" />
            </motion.span>
          </motion.a>
         <motion.div
          className="text-start text-emerald-400 text-sm mt-2 font-medium"
          animate={{
            opacity: isHoveredContact ? 1 : 0.5,
            y: isHoveredContact ? 0 : -5,
          }}
          transition={{ duration: 0.3 }}
        >
          Let's collaborate!
        </motion.div>
        </motion.div>
      </div>

     
    </motion.div>
  );
};

export default ProjectButton;
