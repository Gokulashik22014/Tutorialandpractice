import React, { useCallback, useEffect } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";
import "./style.css";
import Text from "./Text";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useNavigate } from "react-router";
const COLORS_TOP = ["#1E67C6", "#DD335C"];
const Hero = () => {
  let navigate = useNavigate();
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const handleOnClick=()=>{
    navigate("/content");
  }
  const backgroundImage = useMotionTemplate`radial-gradient(100% 125% at 30% 0%, transparent 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
    await loadEmittersPlugin(engine); // Load the emitters plugin
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div>
      <motion.div
        className="h-screen relative w-full z-10 px-24"
        style={{ backgroundImage }}
      >
        <div className="text-8xl text-white relative z-10 title text-center">
          <Text />
        </div>
      </motion.div>
      <motion.button
        style={{
          border,
          boxShadow,
        }}
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:10
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="z-10 absolute text-gray-50 bottom-1/3 left-1/2 group flex w-64 h-12 justify-center items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
        onClick={handleOnClick}
      >
        Explore 
      </motion.button>
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#020617",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse", // Emit particles while hovering
                },
                onClick: {
                  enable: true,
                  mode: "push", // Attract particles to mouse on click
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 150, // Reduce repulse distance (default is 100)
                },
                attract: {
                  distance: 10,
                  duration: 0.4, // Attraction duration
                  factor: 2, // Speed factor
                },
              },
            },
            particles: {
              life: {
                duration: 0.5,
              },
              number: {
                value: 100, // Default number of particles
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: ["#DD335C", "#1E67C6"], // Default particle color
              },
              shape: {
                type: "circle", // Circular particles
              },
              opacity: {
                value: { min: 0.4, max: 0.8 },
                animation: {
                  enable: true,
                  speed: 3,
                  minimumValue: 0.2,
                  sync: false,
                },
              },
              size: {
                value: { min: 2, max: 4 }, // Start from 0 size and grow
              },
              move: {
                enable: true,
                speed: 3, // Default particle speed
                direction: ["top"],
                outModes: {
                  default: "bounce",
                },
              },
              stroke: {
                width: 0.3,
                color: "#ffffff",
              },
            },
            emitters: {
              direction: "none",
              life: {
                count: 2,
                duration: 5,
              },
              rate: {
                quantity: 10, // Number of particles to emit per second
                delay: 0.4, // Delay between each emission
              },
              size: {
                width: 100, // Size of the emitter area
                height: 100,
              },
              position: {
                x: 50, // Center of the screen horizontally
                y: 50, // Center of the screen vertically
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
