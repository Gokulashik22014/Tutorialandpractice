import React from "react";
import { motion } from "framer-motion";
const Text = ({ text }) => {
  return (
    <motion.a
      className="relative block overflow-hidden whitespace-nowrap text-4xl uppercase items-start"
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hover: { y: "-200%" },
        }}
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "200%" },
          hover: { y: 0 },
        }}
      >
        {text}
      </motion.div>
    </motion.a>
  );
};
const SliceText = ({ text }) => {
  return (
    <section className="grid gap-2 place-content-center text-black font-bold bg-teal-300">
      <Text text={text} />
    </section>
  );
};

export default SliceText;
