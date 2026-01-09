import React, { useEffect, useRef } from "react";
import "./bouncing-bubbles.css"; // Make sure to import the CSS file for styles

export default function BouncingBubbles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bubbleCount = 20;
    const bubbles: HTMLDivElement[] = [];
    const colors = ["#F1A2F2", "#F1C4F2", "#8A49A6", "#3E3673"];

    // Create and style bubbles
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      container.appendChild(bubble);
      bubbles.push(bubble);
    }

    // Animate the bubbles
    bubbles.forEach((bubble) => {
      const size = Math.random() * 90 + 20; // Random size between 10px and 60px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.backgroundColor = `${
        colors[Math.floor(Math.random() * (3 - 0 + 1) + 0)]
      }`;
      bubble.style.filter = "blur(2px)";
      bubble.style.boxShadow = "0 0 15px 5px rgba(173, 216, 230, 0.8);";
      bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5s and 10s
      bubble.style.animationDelay = `${Math.random() * 5}s`; // Random delay up to 5s
    });

    // Cleanup bubbles when the component unmounts
    return () => {
      bubbles.forEach((bubble) => bubble.remove());
    };
  }, []);

  return <div ref={containerRef} className="bubbles-container"></div>;
}
