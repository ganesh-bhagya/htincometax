import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const SkillHero = () => {
  return (
    <motion.section
      className="w-full flex flex-col justify-center md:justify-start items-start px-[5%] md:px-[3%] 3xl:px-[3%] gap-5 relative bg-theme-blue-color h-auto pb-5 min-h-[50vh] md:h-auto md:min-h-[70vh] md:pt-[20vh] pt-[5vh]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="pt-[5%]">
        <motion.div
          className="text-white text-[50px] font-bold font-monda"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         Rejected
        </motion.div>

        <motion.div
          className="flex gap-3 items-center text-center text-white text-xl font-normal font-molengo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/">Home</Link>
          <span>{">"}</span>
          <span>Rejected</span>
        </motion.div>
      </div>
    </motion.section>
  );
};
