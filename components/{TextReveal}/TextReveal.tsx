"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { animateText } from "@/components/{TextReveal}/actions/animateText";

interface AnimatedTextProps {
  children: ReactNode;
}

function TextReveal({ children }: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    animateText(textRef.current);
  }, []);

  // Convert children to string (works if children are plain text)
  const text = typeof children === "string" ? children : "";

  const words = text.split(" ");

  return (
    <div>
      <div ref={textRef} className="perspective-container">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="word inline-block">
            {word.split("").map((letter, letterIndex) => (
              <span key={letterIndex} className="letter inline-block">
                {letter}
              </span>
            ))}
            &nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

export default TextReveal;
