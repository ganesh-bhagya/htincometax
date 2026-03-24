import React from "react";
import { ArrowRightIcon } from "../../../utils/icons";
import { motion } from "framer-motion";
import visitProcess from "../../../assets/images/visit-process.png";

export const SkillProcess = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };
  return (
    <section
      className={`w-full bg-[#EBEBF5] 3xl:px-[15%] md:px-[7%]  px-[5%] py-[20%] flex md:py-[5%] flex-col md:flex-row gap-5 font-jksans justify-between items-center`}
    >
      <div className=" flex flex-col gap-5 md:w-[40%]">
        <div className=" text-[#07255e] text-[40px] font-semibold font-montserrat leading-[60px]">
          Visa Process
        </div>
        <div className=" text-[#727272] text-base font-normal font-jksans leading-[30px]">
          Our expert team is here to guide you through each step of the visit
          visa application process, ensuring a smooth and stress-free
          experience. We take care of all the details, from document preparation
          to submission, so you can focus on planning your trip, whether it’s
          for leisure, family visits, or business purposes. Rest assured, we’ll
          handle the complexities while ensuring your visa is approved
          efficiently.
        </div>

        {/* <motion.div
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
        </motion.div> */}
      </div>
      <motion.div
        className="md:w-[45%] 2xl:w-[45%] mt-10 md:mt-0"
        variants={imageVariants}
      >
        <img src={visitProcess} className=" object-cover w-full" alt="Student Visa" />
      </motion.div>
    </section>
  );
};
