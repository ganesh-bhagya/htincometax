import React from "react";
import { motion } from "framer-motion";
import heroFull from "../../assets/images/hero-full.jpg";
export const FormHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const serviceariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 3.5 } }
  };
  return (
    <section className="w-full flex flex-col items-center justify-center gap-5 relative  overflow-x-hidden pb-5 h-[70vh] md:pt-[10vh] pt-[5vh]">
      <motion.div
        className="text-center  flex flex-col justify-center items-center font-kulim  pt-5 md:pt-5 3xl:pt-5 z-30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="text-[#9DC16E] text-[36px] w-[80%] md:w-full  md:text-[60px] font-bold"
          variants={itemVariants}
        >
          Tax Forms
        </motion.span>
        <motion.span
          className="text-white text-base md:text-[20px] font-normal"
          variants={itemVariants}
        >
          Home {">"} Tax Form
        </motion.span>
      </motion.div>

      <div className=" absolute w-full h-full top-0 left-0 bg-[#000000be] z-20"></div>
      {/* Mobile Background Image */}

      {/* Desktop Background Image */}
      <div className="absolute bottom-0 flex w-full z-0">
        <img
          src={heroFull}
          className="w-full h-screen md:h-full object-cover opacity-85"
          alt=""
        />
      </div>
    </section>
  );
};
