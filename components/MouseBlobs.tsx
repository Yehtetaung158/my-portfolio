"use client";

import { useEffect, useState, useCallback } from "react";

type Pos = { x: number; y: number };

const getCornerPositions = (): Pos[] => [
  { x: 90, y: 90 }, // top-left
  { x: window.innerWidth - 80, y: 100 }, // top-right
  { x: 60, y: window.innerHeight - 70 }, // bottom-left
  { x: window.innerWidth - 100, y: window.innerHeight - 100 }, // bottom-right
];

const colors = [
  "bg-gradient-to-r from-purple-500 to-pink-500",
  "bg-gradient-to-r from-pink-500 to-blue-500",
  "bg-gradient-to-r from-blue-500 to-cyan-500",
  "bg-gradient-to-r from-cyan-500 to-purple-500",
];

const sizes = [160, 180, 140, 200];
const blurs = [80, 100, 90, 120];

export default function MouseBlobs() {
  const [positions, setPositions] = useState<Pos[]>(getCornerPositions());
  const [targets, setTargets] = useState<Pos[]>(getCornerPositions());
  const [hovering, setHovering] = useState(false);
  const [hoverPos, setHoverPos] = useState<Pos>({ x: 0, y: 0 });
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newCorners = getCornerPositions();
      setPositions(newCorners);
      setTargets(newCorners);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update targets based on state
  useEffect(() => {
    if (isCenterHovered) {
      const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      setTargets(Array(4).fill(center));
    } else if (hovering) {
      const newTargets = positions.map((_, i) => ({
        x: hoverPos.x + (i % 2 === 0 ? -1 : 1) * 60,
        y: hoverPos.y + (i < 2 ? -1 : 1) * 60,
      }));
      setTargets(newTargets);
    } else {
      setTargets(getCornerPositions());
    }
  }, [isCenterHovered, hovering, hoverPos, positions]);

  // Smooth animation loop
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setPositions((prev) =>
        prev.map((pos, i) => {
          const dx = targets[i].x - pos.x;
          const dy = targets[i].y - pos.y;
          return {
            x: pos.x + dx * 0.15,
            y: pos.y + dy * 0.15,
          };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targets]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setHoverPos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.4; }
        }
      `}</style>

      {/* Corner Blobs */}
      {positions.map((pos, i) => (
        <div
          key={i}
          className={`absolute rounded-full transition-all duration-1000 ease-out ${colors[i % 4]}`}
          style={{
            left: pos.x,
            top: pos.y,
            width: sizes[i],
            height: sizes[i],
            transform: "translate(-50%, -50%)",
            filter: `blur(${blurs[i]}px)`,
            opacity: 0.3,
            animation: "pulse 6s ease-in-out infinite",
          }}
        />
      ))}

      {/* Interactive Center Blob */}
      <div
        className={`absolute left-1/2 top-1/2 h-64 w-64 rounded-full transition-all duration-300 ${
          isCenterHovered
            ? ""
            : " bg-gray-400 opacity-25 blur-3xl"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
          pointerEvents: "auto",
        }}
        onMouseEnter={() => setIsCenterHovered(true)}
        onMouseLeave={() => setIsCenterHovered(false)}
      />

      {/* Floating Particles */}
      {isCenterHovered && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
            //   className="absolute h-2 w-2 animate-float rounded-full bg-white opacity-50"
              style={{
                left: Math.cos((i * Math.PI) / 4) * 40,
                top: Math.sin((i * Math.PI) / 4) * 40,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}