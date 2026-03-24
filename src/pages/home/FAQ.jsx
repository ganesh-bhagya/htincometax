import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";

export const FAQ = ({ scrollRef, faqs }) => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the FAQ section is visible
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, staggerChildren: 0.2 }
        }
      }}
      className="w-full bg-white md:px-[7%] 3xl:px-[7%] px-[5%] py-[10%] md:py-[5%] overflow-x-hidden flex flex-col justify-between items-center  font-kulim"
    >
      <motion.div
       ref={scrollRef}
        className="text-center text-[#80272E] text-[36px] md:text-[48px] font-bold 3xl:leading-[60px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        FAQs
      </motion.div>

      <motion.div
        className="  flex flex-col gap-4 mt-10"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
          }
        }}
      >
        {faqs.map((faq, faqIndex) => {
          let turn = faqIndex + 1;
          return (
            <FaqItem
              key={faqIndex}
              open={open}
              turn={turn}
              handleOpen={handleOpen}
              title={faq.title}
              des={faq.des}
              index={faqIndex}
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
};

const FaqItem = ({ open, turn, handleOpen, title, des, index }) => {
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
        className={` mb-2 rounded-[20px]  font-kulim`}
      >
        <AccordionHeader
          onClick={() => handleOpen(turn)}
          className="border-none p-3 bg-[#9DC16E54]"
        >
          <div className="flex relative w-full gap-5 items-center justify-between px-3">
            <div className=" flex w-[85%] gap-3 items-start">
              <span className=" text-[#80272E] font-bold ">Q</span>
              <span className="w-full text-black 3xl:text-lg font-normal text-base">
                {title}
              </span>
            </div>

            <span
              className={` w-9 h-9 rounded-full flex justify-center items-center`}
            >
              {open === turn ? "-" : "+"}
            </span>
          </div>
        </AccordionHeader>
        <AccordionBody className={`py-1 border border-[#9DC16E] mt-5 px-3`}>
          <div className="flex relative w-full gap-3 items-start px-3">
            <span className=" text-[#80272E] font-bold text-lg ">A</span>
            <span className="w-[90%] text-black text-sm 3xl:text-lg font-normal font-kulim">
              {des}
            </span>
          </div>
        </AccordionBody>
      </Accordion>
    </motion.div>
  );
};
