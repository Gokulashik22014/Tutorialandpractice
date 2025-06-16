import React, { useState, useEffect } from "react";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
const Hexagon = ({ hexagon, index, hexagonSize }) => {
  const [trigger, setTrigger] = useState(false);
  const COLORS_TOP = ["#1E67C6", "#DD335C"];
  useEffect(() => {
    const playAnimationAtRandom = () => {
      setTrigger(true); // Start animation
      setTimeout(() => setTrigger(false), 500); // Reset after animation
    };
    const randomInterval = () => Math.random() * 4000 + 6000;    // Random interval between 6-10 seconds

    const loop = () => {
      playAnimationAtRandom();
      const timeout = setTimeout(loop, randomInterval()); // Schedule next animation
      return () => clearTimeout(timeout); // Cleanup
    };

    const cancelLoop = loop(); // Start the loop
    return () => cancelLoop();
  }, []);
  const svgColor =COLORS_TOP[Math.floor(Math.random() * 2)]
  const svgWidth=Math.floor(Math.random()*3)+2

  return (
    <motion.div
      className={`hexelements`}
      key={hexagon.id}
      initial={{ scale: 0, opacity: 1 }}
      animate={
        trigger
          ? { scale: 1.04, opacity: 0.3, rotate: 0.5 }
          : { scale: 1, opacity: 1, rotate: 0 }
      }
      transition={{
        duration: Math.max(0.008 * (index / 2), 0.01),
      }}
      style={{
        position: "absolute",
        top: hexagon.top,
        left: hexagon.left,
        width: `${hexagonSize.width}px`,
        height: `${hexagonSize.height}px`,
        // background: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=') no-repeat`,
        background: `url('data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="hexagon">
  <rect width="256" height="256" fill="none"></rect>
  <path stroke='${svgColor}' stroke-width='${svgWidth}' d="M219.87305,66.73828l-84-47.478a16.08654,16.08654,0,0,0-15.7461,0l-84,47.47852A16.0255,16.0255,0,0,0,28,80.668V175.332a16.02688,16.02688,0,0,0,8.127,13.92969l84,47.478a16.08782,16.08782,0,0,0,15.7461,0l84-47.47852A16.0255,16.0255,0,0,0,228,175.332V80.668A16.02688,16.02688,0,0,0,219.87305,66.73828Z"></path>
</svg>`)}') no-repeat`,
        backgroundSize: "contain",
      }}
    ></motion.div>
  );
};
const HexagonPattern = () => {
  const [hexagons, setHexagons] = useState([]);
  const hexagonSize = {
    width: 40,
    height: 50,
    verticalSpacing: 35,
    horizontalSpacing: 42,
  };

  useEffect(() => {
    const generateHexagons = () => {
      const { width, height, verticalSpacing, horizontalSpacing } = hexagonSize;

      // Calculate grid dimensions
      const countY = Math.ceil(window.innerHeight / verticalSpacing) + 1;
      const countX = Math.ceil(window.innerWidth / horizontalSpacing) + 1;

      const newHexagons = [];

      // Populate hexagon positions
      for (let i = 0; i < countY; i++) {
        for (let j = 0; j < countX; j++) {
          newHexagons.push({
            id: `${i}-${j}`,
            top: i * verticalSpacing,
            left:
              j * horizontalSpacing +
              ((i * (horizontalSpacing / 2)) % horizontalSpacing),
          });
        }
      }

      setHexagons(newHexagons);
    };

    generateHexagons();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
      className="hexagon"
    >
      {hexagons.map((hexagon, index) => (
        <Hexagon hexagon={hexagon} index={index} hexagonSize={hexagonSize} />
      ))}
    </div>
  );
};

export default HexagonPattern;
