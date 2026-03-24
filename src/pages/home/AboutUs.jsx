import React, { useEffect } from "react";
import aboutusone from "../../assets/images/abtusone.png";
import aboutustwo from "../../assets/images/abtustwo.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutUs = ({ scrollRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    // threshold: 0.2, // Animation will trigger when 20% of the component is visible
    triggerOnce: true // Animation triggers only once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={scrollRef}
      className={`w-full  bg-white md:px-[7%] 3xl:px-[7%] px-[5%] py-[10%] md:py-[5%] flex overflow-x-hidden font-kulim`}
    >
      <div
        className="flex w-full md:flex-row flex-col-reverse justify-between items-start"
        ref={ref}
      >
        <motion.div
          className="md:w-[54%] 2xl:w-[50%] mt-10 md:mt-0 flex items-center gap-[2%] "
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
          }}
        >
          <img src={aboutustwo} className="w-[55%]" alt="About Us" />

          <div className=" flex flex-col gap-3 w-[45%]">
            <img src={aboutusone} className="w-full" alt="About Us" />
            <div className=" bg-[#9DC16E] rounded-2xl w-full flex flex-col justify-center  items-center p-10 py-6  md:py-14">
              <span className=" text-white text-[48px] md:text-[80px] md:leading-[80px] ">
                20+
              </span>
              <span className="text-black text-[20px] md:text-2xl">
                experiences
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:w-[45%] md:items-end gap-3 mt-0 md:mt-[2%]"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.3 }
            }
          }}
        >
          <div className="text-[#9DC16E] text-center md:text-right text-[40px] md:text-4xl 2xl:text-[50px] font-bold 2xl:leading-[60px]">
            Who We Are
          </div>
          <div className="md:w-[65%] 3xl:w-[70%] text-black md:text-[20px] font-normal text-center md:text-right text-base 2xl:leading-[30px] mt-1 mb-2">
            H & T Income Tax offers exceptional accounting and tax services to a
            diverse range of clients throughout Scarborough and Durham. As your
            trusted accountants, we are dedicated to guiding you through every
            tax decision with care and a focus on your best interests. No matter
            your needs, we possess the expertise and authority to manage your
            taxes with the utmost professionalism and precision.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
