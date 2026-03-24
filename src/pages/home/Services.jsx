import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { service_items } from "../../utils/dataArrays";
import { TaxIcon } from "../../utils/icons";

export const Services = ({ scrollRef }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      ref={scrollRef}
      className={`w-full overflow-x-hidden  3xl:px-[7%] md:px-[7%] px-[5%] py-[10%] flex md:py-[5%] flex-col gap-5 font-kulim justify-center items-center`}
    >
      <motion.div
        className="text-center text-[#80272E] text-[36px] md:text-[48px] font-bold 3xl:leading-[60px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Services
      </motion.div>

      <div className="w-full md:hidden flex flex-col  md:px-0 flex-wrap justify-between md:mt-10 pt-5">
        {service_items
          .slice(0, showAll ? service_items.length : 4)
          .map((service, index) => (
            <VisaCard
              key={index}
              icon={service.icon}
              title={service.title}
              des={service.des}
              index={index}
            />
          ))}
      </div>

      <div className="w-full hidden md:flex md:flex-row flex-col px-[10%] md:px-0 flex-wrap justify-between mt-10 pt-5">
        {service_items.map((service, index) => (
          <VisaCard
            key={index}
            icon={service.icon}
            title={service.title}
            des={service.des}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const VisaCard = ({ icon, title, des, index }) => {
  const Icon = icon;
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the card is visible
    triggerOnce: true // Only trigger once
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center md:w-[49%] bg-[#9DC16E54] rounded-[20px] p-5 py-6 pb-10 mb-8"
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
      <div className="w-fit  flex justify-center items-center p-2 mb-3">
        <TaxIcon />
      </div>
      <div className=" font-kulim text-[22px] md:text-2xl font-bold leading-8 text-black ">
        {title}
      </div>
      <div className="flex flex-col text-center gap-3 mt-5 text-black font-normal  font-kulim  2xl:text-lg  md:text-[15px] text-sm">
        {des}
      </div>
    </motion.div>
  );
};
