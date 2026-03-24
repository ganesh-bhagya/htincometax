import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const VisitSimplify = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const process_items = [
    {
      number: "01",
      title: "Initial Consultation",
      des: "Discuss your needs, assess your situation, and outline the steps."
    },
    {
      number: "02",
      title: "Documentation & Application",
      des: "Gather required documents and complete forms accurately."
    },
    {
      number: "03",
      title: "Submission and Follow-up",
      des: "Submit your application, monitor progress, provide updates until approval."
    }
  ];

  return (
    <motion.section
      className="w-full bg-white md:px-[7%] 3xl:px-[10%] px-[5%] py-[20%] md:py-[5%] flex flex-col justify-between items-start font-jksans"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <motion.div
        className="w-full flex items-end justify-between"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
        }}
      >
        <div className="w-full flex flex-col relative">
          <div className="text-start text-theme-red-color text-[10px] md:text-sm font-semibold uppercase md:leading-[14px] tracking-wider 3xl:mb-2">
            Process
          </div>
          <div className="text-start text-theme-blue-color text-2xl leading-10 md:text-[35px] 3xl:text-[50px] font-bold md:leading-[50px] 3xl:leading-[60px] md:w-[45%] 2xl:w-[60%] mt-3">
            We simplify your journey
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-between items-center w-full mt-10 font-jksans"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
        }}
      >
        {process_items.map((process, index) => (
          <ProcessItem
            key={process.number}
            number={process.number}
            title={process.title}
            des={process.des}
            index={index}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

const ProcessItem = ({ number, title, des, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="md:w-[32%] flex flex-col rounded-[20px] mb-5 bg-white p-8 shadow-md gap-3"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }
      }}
    >
      <div className="text-style text-[50px] font-bold font-jksans leading-[60px]">
        {number}
      </div>
      <div className="text-[#07255e] text-[22px] font-bold font-jksans leading-[30px]">
        {title}
      </div>
      <div className="text-[#07255e] text-base font-normal font-montserrat leading-[30px]">
        {des}
      </div>
    </motion.div>
  );
};
