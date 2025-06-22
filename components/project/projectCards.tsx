// import React from "react";

// type Project = {
//   id: number;
//   name: string;
//   imageUrl: string;
//   description: string;
//   sourceCode: string;
//   project_url: string;
// };

// type Props = {
//   projectData: Project[];
// };

// const ProjectCards = ({ projectData }: Props) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2  py-2 lg:grid-cols-3 gap-8">
//       {projectData.map((project) => (
//         <div
//           key={project.id}
//           className="border p-4 rounded shadow max-w-[400px] max-sm:w-full max-sm:mx-auto "
//         >
//           <img
//             src={project.imageUrl}
//             alt={project.name}
//             className="w-full h-48 object-cover rounded"
//           />
//           <h2 className="mt-4 text-xl max-sm:text-lg font-semibold mb-2">{project.name}</h2>
//           <p className="text-slate-900 drop-shadow-lg max-sm:text-sm dark:text-sky-100 ">
//             {project.description}
//           </p>
//           <div className="mt-2 space-x-2">
//             <a
//               href={project.sourceCode}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 max-sm:text-sm underline"
//             >
//               Source Code
//             </a>
//             <a
//               href={project.project_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-green-500 max-sm:text-sm underline"
//             >
//               Live Demo
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectCards;

"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  sourceCode: string;
  project_url: string;
  technologies?: string;
};

type Props = {
  projectData: Project[];
};

const ProjectCards = ({ projectData }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  console.log("Project Data:", projectData);

  useEffect(() => {
    // Simple fade-in animation
    setIsVisible(true);
  }, []);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto" id="projects">
      <div className="text-center mb-16">
        <h2
          className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-500 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          My Projects
        </h2>
        <p
          className={`mt-4 text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-400 transition-opacity duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Here are some of my recent works. Each project reflects my passion for
          creating impactful digital experiences.
        </p>
      </div>

      {projectData && projectData.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-700/10 dark:to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                {/* Project image with overlay */}
                <div className="relative overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <div className="relative w-full h-full">
                      <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Animated overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                      {/* Floating effect container */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                          className="absolute top-4 left-4 w-8 h-8 bg-blue-500 rounded-full animate-float"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="absolute bottom-4 right-4 w-6 h-6 bg-indigo-500 rounded-full animate-float"
                          style={{ animationDelay: "0.3s" }}
                        ></div>
                        <div
                          className="absolute top-1/3 right-8 w-5 h-5 bg-purple-500 rounded-full animate-float"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Links on hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                      aria-label="Source code"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  </div>
                </div>
                {/* Project content */}
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className=" flex gap-2">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    {/* Technology badges */}
                    <div className=" flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full">
                        {project.technologies}
                      </span>
                    </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      <span
                        className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 min-h-[60px]">
                    {project.description}
                  </p>

                  {/* Progress bar style indicator */}
                  <div className="relative pt-1 mb-4">
                    <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-slate-200 dark:bg-slate-700">
                      <div
                        style={{
                          width: `${Math.min(
                            100,
                            Math.max(30, Math.floor(Math.random() * 70) + 30)
                          )}%`,
                        }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-indigo-600"
                      ></div>
                    </div>
                    <div className="text-right text-xs text-slate-500 dark:text-slate-400">
                      Project Completion
                    </div>
                  </div>

                  {/* Links (visible on mobile) */}
                  <div className="flex gap-4 sm:hidden mt-4">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <FaGithub /> Source
                    </a>
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute transform rotate-45 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs w-48 h-10 -right-20 -top-2 flex items-center justify-center">
                    Featured
                  </div>
                </div>
              </div>
              // <div
              //   key={project.id}
              //   className={`group relative overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
              //     isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              //   }`}
              //   style={{ transitionDelay: `${index * 100}ms` }}
              // >
              //   {/* Project image with overlay */}
              //   <div className="relative overflow-hidden">
              //     <div className="h-60 overflow-hidden">
              //       <img
              //         src={project.imageUrl}
              //         alt={project.name}
              //         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              //       />
              //     </div>

              //     {/* Gradient overlay */}
              //     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

              //     {/* Technology badges */}
              //     <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
              //       {/* {project.technologies.map((tech, idx) => (
              //         <span
              //           key={idx}
              //           className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full shadow transition-transform duration-300 hover:-translate-y-0.5"
              //         >
              //           {tech}
              //         </span>
              //       ))} */}
              //     </div>

              //     {/* Links on hover */}
              //     <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              //       <a
              //         href={project.sourceCode}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
              //         aria-label="Source code"
              //       >
              //         <FaGithub className="text-xl" />
              //       </a>
              //       <a
              //         href={project.project_url}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all transform hover:scale-110"
              //         aria-label="Live demo"
              //       >
              //         <FaExternalLinkAlt className="text-xl" />
              //       </a>
              //     </div>
              //   </div>

              //   {/* Project content */}
              //   <div className="p-6">
              //     <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              //       {project.name}
              //     </h3>
              //     <p className="text-slate-600 dark:text-slate-300 mb-4">
              //       {project.description}
              //     </p>

              //     {/* Links (visible on mobile) */}
              //     <div className="flex gap-4 sm:hidden mt-4">
              //       <a
              //         href={project.sourceCode}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              //       >
              //         <FaGithub /> Source
              //       </a>
              //       <a
              //         href={project.project_url}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline"
              //       >
              //         <FaExternalLinkAlt /> Demo
              //       </a>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>

          {/* View more button */}
          {/* <div className={`mt-16 text-center transition-opacity duration-700 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              View All Projects
            </button>
          </div> */}
        </>
      ) : (
        <div className="text-center py-12">
          <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-6">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            No Projects Found
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            It looks like there are no projects to display at the moment. Please
            check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectCards;

// import React, { useState, useEffect } from "react";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// type Project = {
//   id: number;
//   name: string;
//   imageUrl: string;
//   description: string;
//   sourceCode: string;
//   project_url: string;
//   technologies: string[];
// };

// type Props = {
//   projectData: Project[];
// };

// const ProjectCards = ({ projectData }: Props) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Simple fade-in animation without Framer Motion
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="py-12 px-4 max-w-7xl mx-auto">
//       <div className="text-center mb-16">
//         <h2
//           className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-500 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//         >
//           My Projects
//         </h2>
//         <p
//           className={`mt-4 text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-400 transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//         >
//           Here are some of my recent works. Each project reflects my passion for creating
//           impactful digital experiences.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projectData?.map((project, index) => (
//           <div
//             key={project.id}
//             className={`group relative overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//             }`}
//             style={{ transitionDelay: `${index * 100}ms` }}
//           >
//             {/* Project image with overlay */}
//             <div className="relative overflow-hidden">
//               <div className="h-60 overflow-hidden">
//                 <img
//                   src={project.imageUrl}
//                   alt={project.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

//               {/* Technology badges */}
//               <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
//                 {project.technologies.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full shadow transition-transform duration-300 hover:-translate-y-0.5"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Links on hover */}
//               <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <a
//                   href={project.sourceCode}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
//                   aria-label="Source code"
//                 >
//                   <FaGithub className="text-xl" />
//                 </a>
//                 <a
//                   href={project.project_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all transform hover:scale-110"
//                   aria-label="Live demo"
//                 >
//                   <FaExternalLinkAlt className="text-xl" />
//                 </a>
//               </div>
//             </div>

//             {/* Project content */}
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                 {project.name}
//               </h3>
//               <p className="text-slate-600 dark:text-slate-300 mb-4">
//                 {project.description}
//               </p>

//               {/* Links (visible on mobile) */}
//               <div className="flex gap-4 sm:hidden mt-4">
//                 <a
//                   href={project.sourceCode}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
//                 >
//                   <FaGithub /> Source
//                 </a>
//                 <a
//                   href={project.project_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline"
//                 >
//                   <FaExternalLinkAlt /> Demo
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View more button */}
//       <div className={`mt-16 text-center transition-opacity duration-700 delay-500 ${
//         isVisible ? 'opacity-100' : 'opacity-0'
//       }`}>
//         <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
//           View All Projects
//         </button>
//       </div>
//     </div>
//   );
// };

// // Add default props for demonstration purposes
// ProjectCards.defaultProps = {
//   projectData: [
//     {
//       id: 1,
//       name: "E-Commerce Platform",
//       imageUrl: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=600",
//       description: "A full-featured e-commerce solution with payment integration and admin dashboard.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["React", "Node.js", "MongoDB"]
//     },
//     {
//       id: 2,
//       name: "Task Management App",
//       imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
//       description: "Productivity application for teams to manage tasks and collaborate in real-time.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["Next.js", "Firebase", "Tailwind CSS"]
//     },
//     {
//       id: 3,
//       name: "Weather Dashboard",
//       imageUrl: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=600",
//       description: "Real-time weather application with location-based forecasts and interactive maps.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["React", "Weather API", "Chart.js"]
//     },
//     {
//       id: 4,
//       name: "Social Media Analytics",
//       imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
//       description: "Analytics platform providing insights into social media performance metrics.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["TypeScript", "GraphQL", "D3.js"]
//     },
//     {
//       id: 5,
//       name: "Fitness Tracker",
//       imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
//       description: "Mobile-first fitness application tracking workouts and nutrition plans.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["React Native", "Redux", "Health API"]
//     },
//     {
//       id: 6,
//       name: "Recipe Finder",
//       imageUrl: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=600",
//       description: "Discover recipes based on ingredients you have with step-by-step cooking guides.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["Vue.js", "Express", "PostgreSQL"]
//     }
//   ]
// };

// export default ProjectCards;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// type Project = {
//   id: number;
//   name: string;
//   imageUrl: string;
//   description: string;
//   sourceCode: string;
//   project_url: string;
//   technologies: string[];
// };

// type Props = {
//   projectData: Project[];
// };

// const ProjectCards = ({ projectData }: Props) => {
//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <div className="py-12 px-4 max-w-7xl mx-auto">
//       <div className="text-center mb-16">
//         <motion.h2
//           className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-500"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           My Projects
//         </motion.h2>
//         <motion.p
//           className="mt-4 text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-400"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           Here are some of my recent works. Each project reflects my passion for creating
//           impactful digital experiences.
//         </motion.p>
//       </div>

//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         {projectData.map((project) => (
//           <motion.div
//             key={project.id}
//             className="group relative overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-2xl"
//             variants={item}
//             whileHover={{ y: -10 }}
//           >
//             {/* Project image with overlay */}
//             <div className="relative overflow-hidden">
//               <div className="h-60 overflow-hidden">
//                 <img
//                   src={project.imageUrl}
//                   alt={project.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

//               {/* Technology badges */}
//               <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
//                 {project.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full shadow"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Links on hover */}
//               <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <a
//                   href={project.sourceCode}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
//                   aria-label="Source code"
//                 >
//                   <FaGithub className="text-xl" />
//                 </a>
//                 <a
//                   href={project.project_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all"
//                   aria-label="Live demo"
//                 >
//                   <FaExternalLinkAlt className="text-xl" />
//                 </a>
//               </div>
//             </div>

//             {/* Project content */}
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                 {project.name}
//               </h3>
//               <p className="text-slate-600 dark:text-slate-300 mb-4">
//                 {project.description}
//               </p>

//               {/* Links (visible on mobile) */}
//               <div className="flex gap-4 sm:hidden mt-4">
//                 <a
//                   href={project.sourceCode}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
//                 >
//                   <FaGithub /> Source
//                 </a>
//                 <a
//                   href={project.project_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline"
//                 >
//                   <FaExternalLinkAlt /> Demo
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* View more button */}
//       <motion.div
//         className="mt-16 text-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//       >
//         <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
//           View All Projects
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// // Add default props for demonstration purposes
// ProjectCards.defaultProps = {
//   projectData: [
//     {
//       id: 1,
//       name: "E-Commerce Platform",
//       imageUrl: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=600",
//       description: "A full-featured e-commerce solution with payment integration and admin dashboard.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["React", "Node.js", "MongoDB"]
//     },
//     {
//       id: 2,
//       name: "Task Management App",
//       imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
//       description: "Productivity application for teams to manage tasks and collaborate in real-time.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["Next.js", "Firebase", "Tailwind CSS"]
//     },
//     {
//       id: 3,
//       name: "Weather Dashboard",
//       imageUrl: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=600",
//       description: "Real-time weather application with location-based forecasts and interactive maps.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["React", "Weather API", "Chart.js"]
//     },
//     {
//       id: 4,
//       name: "Social Media Analytics",
//       imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
//       description: "Analytics platform providing insights into social media performance metrics.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["TypeScript", "GraphQL", "D3.js"]
//     },
//     {
//       id: 5,
//       name: "Fitness Tracker",
//       imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
//       description: "Mobile-first fitness application tracking workouts and nutrition plans.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["React Native", "Redux", "Health API"]
//     },
//     {
//       id: 6,
//       name: "Recipe Finder",
//       imageUrl: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=600",
//       description: "Discover recipes based on ingredients you have with step-by-step cooking guides.",
//       sourceCode: "https://github.com",
//       project_url: "https://example.com",
//       technologies: ["Vue.js", "Express", "PostgreSQL"]
//     }
//   ]
// };

// export default ProjectCards;
