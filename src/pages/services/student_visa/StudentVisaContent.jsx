import React from "react";
import aboutus from "../../../assets/images/student-visa.png";
import { ArrowRightIcon, TickIcon } from "../../../utils/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const StudentVisaContent = ({ scrollRef }) => {
  const aboutItems = [
    {
      title: "Expert Consultants",
      description:
        "Our experienced consultants provide personalized guidance."
    },
    {
      title: "Comprehensive Support",
      description:
        "From start to finish, we're with you every step of the way."
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
        staggerChildren: 0.2,
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
        <img src={aboutus} alt="Student Visa" />
      </motion.div>

      <motion.div
        className="flex flex-col md:w-[58%] items-start gap-3 mt-0 md:mt-[2%]"
        variants={containerVariants}
      >
        <motion.div
          className="text-theme-blue-color text-2xl md:text-4xl 2xl:text-[50px] font-bold 2xl:leading-[60px]"
          variants={itemVariants}
        >
          Start Your Academic <br /> Journey Abroad
        </motion.div>

        <motion.div
          className="md:w-[75%] 3xl:w-[80%] text-[#727272] md:text-base font-normal font-montserrat text-sm 2xl:leading-[30px] mt-1 mb-2"
          variants={itemVariants}
        >
          Embarking on an international academic journey is an exciting
          opportunity, and our team is here to make the process seamless and
          stress-free. We offer a full range of student visa services designed
          to support you every step of the way. From helping you select the
          right course and institution that aligns with your career goals, to
          meticulously preparing and submitting your application, our
          experienced consultants are committed to ensuring your success. We
          also provide expert visa guidance, ensuring all documentation is
          complete and compliant with the specific requirements of your chosen
          country.
        </motion.div>

        <motion.div
          className="relative w-fit px-[30px] py-3 rounded-[10px] justify-center items-center gap-2.5 inline-flex md:mt-5 overflow-hidden bg-[#c90000]"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/student-visa/apply-now" className="text-white text-sm font-semibold font-jksans md:leading-[30px]">
            Apply Now
          </Link>
          <span>
            <ArrowRightIcon />
          </span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const AboutUsItem = ({ title, description }) => {
  return (
    <motion.div
      className="3xl:w-[40%] md:w-[40%] flex flex-col gap-2 mb-2 md:mb-0"
      variants={itemVariants}
    >
      <div className="flex w-full gap-2 items-center">
        <span>
          <TickIcon />
        </span>
        <div className="text-theme-blue-color text-base md:text-lg font-semibold md:leading-7">
          {title}
        </div>
      </div>
      <div className="text-[#727272] md:w-[80%] font-normal font-montserrat 2xl:text-base 2xl:leading-[30px] md:text-[15px] text-sm">
        {description}
      </div>
    </motion.div>
  );
};
