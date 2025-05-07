// "use client";

// import React, { useEffect, useState } from "react";

// type Star = {
//   id: number;
//   x: number;
//   y: number;
//   size: number;
//   delay: number;
// };

// const generateStars = (count: number): Star[] =>
//   Array.from({ length: count }, (_, id) => ({
//     id,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 2 + 1, // size between 1 and 3px
//     delay: Math.random() * 5, // delay between 0 and 5s
//   }));

// const StarSun: React.FC = () => {
//   const [stars, setStars] = useState<Star[]>([]);

//   useEffect(() => {
//     setStars(generateStars(100));
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0c0c1d] via-[#1a1a33] to-[#0c0c1d]">
//       {/* Static starfield */}
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="absolute rounded-full bg-white animate-flicker"
//           style={{
//             left: `${star.x}%`,
//             top: `${star.y}%`,
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             animationDelay: `${star.delay}s`,
//             opacity: 0.8,
//           }}
//         />
//       ))}

//       {/* Glowing sun/star core in center */}
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-300 opacity-30 blur-3xl animate-pulse" />

//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-yellow-400 blur-xl opacity-70 animate-slowpulse" />
//     </div>
//   );
// };

// export default StarSun;






// "use client";

// import React from "react";

// const StarSun = () => {
//   const starCount = 100;
//   const stars = Array.from({ length: starCount }, (_, i) => {
//     const x = Math.random() * 100;
//     const y = Math.random() * 100;
//     const size = Math.random() * 2 + 1;
//     const twinkleDuration = Math.random() * 3 + 2;

//     return (
//       <div
//         key={i}
//         className="absolute rounded-full bg-white opacity-70"
//         style={{
//           left: `${x}%`,
//           top: `${y}%`,
//           width: size,
//           height: size,
//           animation: `twinkle ${twinkleDuration}s infinite ease-in-out`,
//         }}
//       />
//     );
//   });

//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
//       <style>{`
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 1; }
//         }

//         @keyframes glow-pulse {
//           0%, 100% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.2); }
//           50% { box-shadow: 0 0 50px rgba(255, 255, 255, 0.6); }
//         }
//       `}</style>

//       {/* Stars */}
//       {stars}

//       {/* Moon at top-left corner */}
//       <div
//         className="absolute rounded-full bg-gradient-to-br from-gray-300 to-white shadow-lg"
//         style={{
//           width: "80px",
//           height: "80px",
//           top: "30px",
//           left: "30px",
//           boxShadow: "0 0 40px rgba(255, 255, 255, 0.5)",
//           animation: "glow-pulse 5s infinite ease-in-out",
//         }}
//       />
//     </div>
//   );
// };

// export default StarSun;





// "use client";

// import React from "react";

// const StarSun = () => {
//   const starCount = 100;
//   const stars = Array.from({ length: starCount }, (_, i) => {
//     const x = Math.random() * 100;
//     const y = Math.random() * 100;
//     const size = Math.random() * 2 + 1;
//     const twinkleDuration = Math.random() * 3 + 2;

//     return (
//       <div
//         key={i}
//         className="absolute rounded-full bg-white"
//         style={{
//           left: `${x}%`,
//           top: `${y}%`,
//           width: size,
//           height: size,
//           animation: `twinkle ${twinkleDuration}s infinite ease-in-out`,
//           opacity: Math.random() * 0.6 + 0.2,
//         }}
//       />
//     );
//   });

//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#415a77]">
//       <style>{`
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 1; }
//         }

//         @keyframes glow-pulse {
//           0%, 100% {
//             box-shadow: 0 0 30px rgba(255, 215, 100, 0.3);
//           }
//           50% {
//             box-shadow: 0 0 50px rgba(255, 215, 100, 0.6);
//           }
//         }
//       `}</style>

//       {/* Stars */}
//       {stars}

//       {/* Moon with soft yellow tint */}
//       <div
//         className="absolute rounded-full bg-gradient-to-br from-yellow-200 via-white to-yellow-100"
//         style={{
//           width: "80px",
//           height: "80px",
//           top: "30px",
//           left: "30px",
//           animation: "glow-pulse 5s infinite ease-in-out",
//         }}
//       />
//     </div>
//   );
// };

// export default StarSun;



"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function StarSun() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [shootingStars, setShootingStars] = useState<number[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setStars(generatedStars);
  }, []);

  // Shooting stars logic
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setShootingStars((prev) => [...prev, id]);
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((star) => star !== id));
      }, 2000);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a1f] via-[#0c1a2a] to-[#0a0a1f] overflow-hidden">
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-[2px] h-[2px] rounded-full bg-white animate-twinkle"
          style={{
            left: star.x,
            top: star.y,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Moon */}
      <div
        className={clsx(
          "absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-200",
          "shadow-[0_0_60px_20px_rgba(255,255,150,0.5)]"
        )}
      />

      {/* Shooting Stars */}
      {shootingStars.map((id) => (
        <div
          key={id}
          className="absolute top-0 left-0 w-[2px] h-[2px] bg-white animate-shooting-star"
          style={{
            top: Math.random() * window.innerHeight * 0.5,
            left: Math.random() * window.innerWidth * 0.5,
          }}
        />
      ))}

      {/* Fireflies */}
      {/* {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-green-300 opacity-70 animate-firefly"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))} */}

      {/* Nebula Glow */}
      <div className="absolute left-[60%] top-[30%] w-[400px] h-[400px] rounded-full bg-purple-600 opacity-10 blur-3xl" />
    </div>
  );
}

