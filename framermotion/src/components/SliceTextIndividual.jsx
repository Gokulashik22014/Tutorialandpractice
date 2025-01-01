import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const Text = ({ text }) => {
  return (
    <motion.a
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase lg:text-4xl"
     
      whileHover="hover"
      initial="initial"
    >
      <div className="relative">
        {text.split("").map((t, i) => (
          <motion.span
            className="inline-block"
            key={`top-${i}`}  // Add a unique key prop for each element
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {t}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((t, i) => (
          <motion.span
            className="inline-block"
            key={`bottom-${i}`}  // Add a unique key prop for each element
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i, // Consistent stagger timing
            }}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const SliceTextIndividual = ({ text }) => {
  return (
    <section className="grid gap-2 place-content-center text-black font-bold bg-teal-300">
      <Text text={text} />
    </section>
  );
};

export default SliceTextIndividual;
