// src/components/TypewriterTextCycle.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";

const TypewriterTextCycle = () => {
  const texts = ["Web Developer ", "YE HTET AUNG"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const pauseDuration = 2000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeEffect = () => {
      const currentText = texts[currentIndex];

      if (isDeleting) {
        // Deleting text
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        // Typing text
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentText) {
        // Pause at end of typing
        timerRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText === "") {
        // Move to next text after deleting
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    timerRef.current = setTimeout(
      typeEffect,
      isDeleting ? typingSpeed / 2 : typingSpeed
    );

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [displayText, isDeleting, currentIndex]);

  return (
    <div className=" h-20 max-sm:h-10 block mt-2 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent">
      {displayText}
      {/* <span className="animate-pulse">|</span> */}
    </div>
  );
};

export default TypewriterTextCycle;
