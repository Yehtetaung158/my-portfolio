"use client";

import React from "react";

export default function NaturalSun() {
  return (
    <div className="absolute top-16 left-16 w-64 h-64 max-sm:w-40 max-sm:h-40 pointer-events-none">
      {/* Sun Core */}
      <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-90 blur-2xl" />

      {/* Mid Glow */}
      <div className="absolute inset-6 rounded-full bg-yellow-200 opacity-50 blur-[100px]" />

      {/* Outer Diffuse Glow */}
      <div className="absolute inset-10 rounded-full bg-yellow-100 opacity-30 blur-[160px]" />

      {/* Subtle Solar Rays (radial light burst) */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-32 bg-yellow-100 opacity-10"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -100%) rotate(${i * (360 / 20)}deg)`,
            transformOrigin: "bottom center",
          }}
        />
      ))}
    </div>
  );
}
