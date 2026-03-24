import React from "react";
import { ArrowRightIcon } from "../../../utils/icons";
import { motion } from "framer-motion";

export const StudentProcess = () => {
  return (
    <section
      className={`w-full bg-[#EBEBF5] 3xl:px-[15%] md:px-[7%]  px-[5%] py-[20%] flex md:py-[5%] flex-col md:flex-row gap-5 font-jksans justify-between items-center`}
    >
      <div className=" flex flex-col gap-5 md:w-[40%]">
        <div className=" text-[#07255e] text-[40px] font-semibold font-montserrat leading-[60px]">
          Visa Process
        </div>
        <div className=" text-[#727272] text-base font-normal font-jksans leading-[30px]">
          Our expert team is dedicated to guiding you through every step of the
          visa application process, ensuring a seamless journey to your dream
          university. We handle all the details, so you can focus on preparing
          for your academic adventure.
        </div>

        <motion.div
          className="relative w-fit px-[30px] py-3 rounded-[10px] justify-center items-center gap-2.5 inline-flex md:mt-5 overflow-hidden bg-[#c90000]"
          whileHover="hover"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ x: "-150%" }}
            whileHover={{ x: "150%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)"
            }}
          />
          <div className="text-white text-sm font-semibold font-jksans md:leading-[30px] relative z-10">
           View Eligibility 
          </div>
          <span className="relative z-10">
            <ArrowRightIcon />
          </span>
        </motion.div>
      </div>
    </section>
  );
};
