import React from "react";
import heroFull from "../../assets/images/hero-full.jpg";
import { motion } from "framer-motion";

export const Hero = () => {
  // Variants for container and item animations
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
    <section className="w-full flex flex-col items-center justify-center gap-5 relative  overflow-x-hidden pb-5 h-screen md:pt-[20vh] pt-[5vh]">
      {/* Hero Text */}
      <motion.div
        className="text-center  flex flex-col justify-center items-center font-kulim pt-16 md:pt-8  3xl:pt-8 z-30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="text-[#9DC16E] text-[36px] w-[80%] md:w-full  md:text-[60px] font-bold"
          variants={itemVariants}
        >
          Simplifying Taxes with Trust <br /> and Care

        </motion.span>
        {/* <motion.span
          className="text-white text-base md:text-[20px] font-normal"
          variants={itemVariants}
        >
          We’ve been providing clients with world class accounting support since
          2005.
        </motion.span> */}
        <motion.span
          className="text-white text-base md:text-[20px] font-normal w-[90%] md:w-[48%] mt-5"
          variants={itemVariants}
        >
         Since 2005, H&T Income Tax has been providing clients with trusted, world-class accounting support. From expert consultation on business and tax matters to comprehensive management and innovative technological solutions, we cover all aspects of tax services and beyond, ensuring our clients make confident and happy tax decisions every step of the way.

        </motion.span>

        {/* <motion.span
          className="text-[#9DC16E] text-[20px] md:text-[32px] font-bold mt-10"
          variants={itemVariants}
        >
          Download Now
        </motion.span>
        <motion.button
          variants={itemVariants}
          className=" bg-[#9DC16E] px-20 md:px-9 py-3 text-[#80272E] text-lg md:text-[20px] font-semibold rounded-[30px] mt-5"
        >
          Client Intake Form
        </motion.button> */}
      </motion.div>

      <div className=" absolute w-full h-full top-0 left-0 bg-[#0000007a] z-10"></div>
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
