import React, { useState } from "react";
import visitImg from "../../../assets/images/business-visa.jpg";
import { ArrowRightIcon, TickIcon } from "../../../utils/icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { visitItems } from "../../../utils/dataArrays";
import { FAQRightIcon, FAQUptIcon } from "../../../utils/icons";

export const AsylumContent = ({ scrollRef }) => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 2 : value);

  const aboutItems = [
    {
      title: "Expert Consultants",
      description: "Our experienced consultants provide personalized guidance."
    },
    {
      title: "Comprehensive Support",
      description: "From start to finish, we're with you every step of the way."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <motion.section
      ref={scrollRef}
      className="w-full bg-white md:px-[7%] 3xl:px-[10%] px-[5%] py-[20%] md:py-[5%] flex md:flex-row flex-col-reverse justify-between items-start font-jksans"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="md:w-[35%] 2xl:w-[38%] mt-10 md:mt-0"
        variants={imageVariants}
      >
        <img src={visitImg} alt="Student Visa" />
      </motion.div>

      <motion.div
        className="flex flex-col md:w-[58%] items-start gap-3 mt-0 md:mt-[2%]"
        variants={containerVariants}
      >
        <motion.div
          className="md:w-[75%] 3xl:w-[80%] text-[#727272] md:text-base font-normal font-montserrat text-sm 2xl:leading-[30px] mt-1 mb-2"
          variants={itemVariants}
        >
          To apply, you need to provide an invitation or letter verifying your
          business purpose, as well as documents demonstrating your financial
          stability and assets in Sri Lanka. It’s important to note that this
          visa does not allow you to engage in permanent employment, which
          requires a separate work visa.
        </motion.div>

       

        {/* <motion.div
          className="relative w-fit px-[30px] py-3 rounded-[10px] justify-center items-center gap-2.5 inline-flex md:mt-5 overflow-hidden bg-[#c90000]"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="/student-visa/apply-now"
            className="text-white text-sm font-semibold font-jksans md:leading-[30px]"
          >
            Apply Now
          </Link>
          <span>
            <ArrowRightIcon />
          </span>
        </motion.div> */}
      </motion.div>
    </motion.section>
  );
};

const VisitItem = ({ open, turn, handleOpen, title, des, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the FAQ item is visible
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      className="w-[75%]"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.1 }
        }
      }}
    >
      <Accordion
        open={open === turn}
        className={`bg-[#EBEBF5] mb-2 font-montserrat py-2`}
      >
        <AccordionHeader
          onClick={() => handleOpen(turn)}
          className="border-none py-0"
        >
          <div className="flex relative w-full gap-5 justify-between items-start px-3">
            <span className="w-[85%] text-theme-blue-color 3xl:text-lg text-base">
              {title}
            </span>
            <span
              className={`${
                open === turn ? "bg-[#07255E]" : "bg-[#EBEBF5]"
              } w-9 h-9 rounded-full flex justify-center items-center`}
            >
              {open === turn ? <FAQUptIcon /> : <FAQRightIcon />}
            </span>
          </div>
        </AccordionHeader>
        <AccordionBody className="py-1">
          <div className="flex relative w-full gap-5 justify-between items-center px-3">
            <span className="w-[90%] text-[#1c1d21] text-sm  font-normal font-montserrat tracking-wide">
              {des}
            </span>
          </div>
        </AccordionBody>
      </Accordion>
    </motion.div>
  );
};
