import React from "react";
import { motion } from "framer-motion";

export const DownloadForm = () => {
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


    // Function to handle menu download
    const handleMenuDownload = () => {
      // Specify the path to the menu PDF in the public directory
      const menuPath = "files/H&T_Income_Client_Form.pdf";
      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = menuPath;
      link.download = "H&T_Income_Client_Form.pdf";
      link.click();
    };
  

  return (
    <section
      className={`w-full  bg-[#4F0F14] md:px-[7%] 3xl:px-[7%] px-[5%] py-[20%] md:py-[5%] flex flex-col justify-center items-center gap-3 overflow-x-hidden font-kulim`}
    >
      <motion.div
        variants={itemVariants}
        className=" text-white font-semibold text-center text-[36px] md:text-[48px] "
      >
        Click below to <span className="text-[#9DC16E] ">Download</span> a
        Client Intake Form
      </motion.div>

      <motion.button
      onClick={handleMenuDownload}
        variants={itemVariants}
        className=" bg-[#9DC16E] w-fit px-24 md:px-9 py-3 text-[#80272E] text-lg md:text-[20px] font-semibold rounded-[30px] mt-5"
      >
        Client Intake Form
      </motion.button>
    </section>
  );
};
