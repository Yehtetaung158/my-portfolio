"use client";

import { useEffect, useState } from "react";

type Pos = { x: number; y: number };

const cornerPositions: Pos[] = [
  { x: 90, y: 90 }, // top-left
  { x: window.innerWidth - 80, y: 100 }, // top-right
  { x: 60, y: window.innerHeight - 70 }, // bottom-left
  { x: window.innerWidth - 100, y: window.innerHeight - 100 }, // bottom-right
  ];

export default function MouseBlobs() {
  const [positions, setPositions] = useState<Pos[]>(cornerPositions);
  const [hovering, setHovering] = useState(false);
  const [hoverPos, setHoverPos] = useState<Pos>({ x: 0, y: 0 });
  const [isCenterHovered, setIsCenterHovered] = useState(false); // Track if the center blob is hovered

  console.log("is center ",isCenterHovered)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovering && !isCenterHovered) {
        setPositions((prev) =>
          prev.map((pos) => ({
            x: pos.x + Math.random() * 20 - 10,
            y: pos.y + Math.random() * 20 - 10,
          }))
        );
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [hovering, isCenterHovered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (hovering) {
      setHoverPos({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div
      className="fixed inset-0 z-10"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Blobs at corners */}
      {positions.map((pos, i) => {
        const x = hovering
          ? hoverPos.x + i * 30 - 45
          : pos.x; // scatter blobs when not hovering
        const y = hovering
          ? hoverPos.y + i * 30 - 45
          : pos.y; // scatter blobs when not hovering

        return (
          <div
            key={i}
            className={`absolute w-64 h-64 rounded-full opacity-25 blur-3xl transition-all duration-1000 ${
              ["bg-purple-500", "bg-pink-500", "bg-blue-500", "bg-yellow-500"][i % 4]
            }`}
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}

      {/* Center Blob */}
      <div
        className={`absolute w-64 h-64 rounded-full opacity-25 blur-3xl transition-all duration-1000 bg-gray-500`}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "auto", // Make center blob interactable
        }}
        onMouseEnter={() => setIsCenterHovered(true)} // When hover over center blob, set to true
        onMouseLeave={() => setIsCenterHovered(false)} // When hover off center blob, set to false
      />

      {/* Center: Collect blobs on hover */}
      {isCenterHovered && (
        <div
          className="absolute z-50 w-64 h-64 rounded-full bg-gray-500 opacity-50 blur-3xl"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      )}

      {/* Move blobs to center on center hover */}
      {isCenterHovered && (
        <>
          {positions.map((pos, i) => {
            if (i === 4) return null; // Don't move the center blob itself
            const x = window.innerWidth / 2; // Move to center horizontally
            const y = window.innerHeight / 2; // Move to center vertically
            return (
              <div
                key={i}
                className={`absolute w-64 h-64 rounded-full opacity-25 blur-3xl transition-all duration-1000 ${
                  ["bg-purple-500", "bg-pink-500", "bg-blue-500", "bg-yellow-500"][i % 4]
                }`}
                style={{
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)",
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
