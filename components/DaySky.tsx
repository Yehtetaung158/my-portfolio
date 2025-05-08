"use client";
import React from "react";
import NaturalSun from "./NaturalSun";

const clouds = [
  { className: "top-10 left-10", delay: "0s", size: "w-60 h-24 max-sm:w-44 max-sm:w-18 ",hiddenCloud :"" },
  { className: "top-20 left-1/2", delay: "4s", size: "w-72 h-28", hiddenCloud:" max-sm:hidden" },
  { className: "top-32 right-16", delay: "8s", size: "w-56 h-20",hiddenCloud:" max-sm:hidden" },
];

export default function DaySky() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100" />

      {/* Natural Sun with Rays */}
      <div className="absolute top-16 left-20 w-40 h-40">
        <div className="w-[200px]">
          <NaturalSun />
        </div>
      </div>

      {/* Animated Clouds */}
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className={`absolute ${cloud.className} ${cloud.size} ${cloud.hiddenCloud} opacity-70  animate-cloud transition-transform`}
          style={{
            animationDelay: cloud.delay,
            animationDuration: "60s",
          }}
        >
          <div className="absolute w-full h-full bg-white rounded-full blur-md opacity-70" />
          <div className="absolute -top-3 left-5 w-1/2 h-2/3 bg-white rounded-full blur-sm opacity-60" />
          <div className="absolute top-2 right-4 w-1/3 h-1/2 bg-white rounded-full blur-sm opacity-60" />
        </div>
      ))}

      {/* Keyframes */}
      <style>{`
        @keyframes cloudMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(100vw); }
        }

        .animate-cloud {
          animation-name: cloudMove;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}

