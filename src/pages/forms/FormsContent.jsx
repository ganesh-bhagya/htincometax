import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { form_items } from "../../utils/dataArrays";
import { TaxIcon } from "../../utils/icons";

export const FormsContent =  ({ scrollRef }) => {
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
        className="text-center text-[#000000] text-base md:text-[20px] "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </motion.div>

      <div className="w-full md:hidden flex flex-col  md:px-0 flex-wrap justify-between md:mt-10 pt-5">
        {form_items
          .slice(0, showAll ? form_items.length : 4)
          .map((service, index) => (
            <VisaCard
              key={index}
              icon={service.icon}
              title={service.title}
              index={index}
            />
          ))}
      </div>

      <div className="w-full hidden md:flex md:flex-row flex-col px-[10%] md:px-0 flex-wrap justify-between mt-10 pt-5">
        {form_items.map((service, index) => (
          <VisaCard
            key={index}
            icon={service.icon}
            title={service.title}
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
      className="flex flex-col items-center md:w-[24%] border border-[#9DC16E] rounded-[20px] p-5 py-6 pb-10 mb-8"
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
        <Icon />
      </div>
      <div className=" font-kulim w-[75%] text-center text-lg md:text-[20px] font-bold  text-[#80272E] ">
        {title}
      </div>
      
    </motion.div>
  );
};
