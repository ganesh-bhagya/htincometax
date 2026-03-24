import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SendIcon, RingIcon, AddressIcon, MailIcon } from "../../utils/icons";
import contact from "../../assets/images/contact.png";
import { ToastContainer, toast } from "react-toastify";

export const ContactForm = ({ scrollRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.section
        ref={scrollRef}
        className="w-full bg-white md:px-[7%] 3xl:px-[15%] px-[5%] py-[20%] md:py-[5%] overflow-x-hidden flex font-jksans"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <div
          className="w-full flex md:flex-row flex-col justify-between items-start"
          ref={ref}
        >
          <motion.div
            className="md:w-[48%] flex flex-col justify-between mb-5 md:mb-0"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 }
              }
            }}
          >
            <div className="text-theme-blue-color text-2xl md:text-[35px] md:leading-[35px] 3xl:text-[50px] 3xl:leading-[60px] font-bold">
              Need assistance? <br className="hidden md:block" />
              <span className="text-theme-red-color">Reach out</span> today
            </div>
            <div className="md:w-[70%] mt-5 mb-5 md:mb-0 md:mt-20">
              <img src={contact} alt="" />
            </div>
          </motion.div>

          <motion.div
            className="md:w-[48%] w-full flex flex-col gap-3"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.5 }
              }
            }}
          >
            <div className="flex flex-col md:flex-row w-full items-center justify-between">
              <motion.div
                className="md:w-[48%] w-full"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.7 }
                  }
                }}
              >
                <InputItem icon={SendIcon} label="Your Email" />
              </motion.div>
              <motion.div
                className="md:w-[48%] w-full"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.8 }
                  }
                }}
              >
                <InputItem icon={RingIcon} label="Your Phone" />
              </motion.div>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.9 }
                }
              }}
            >
              <InputItem icon={AddressIcon} label="Your Address" />
            </motion.div>

            <motion.div
              className="w-full flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 1 }
                }
              }}
            >
              <span className="text-base font-normal leading-[30px] text-theme-blue-color">
                Message
              </span>
              <div className="flex items-start border border-gray-300 p-3 rounded-[20px]">
                <textarea
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none resize-none"
                  rows="4"
                  placeholder="Write Message..."
                />
                <MailIcon />
              </div>
            </motion.div>

            <motion.div
              className="w-full px-[30px] py-5 bg-[#c90000] rounded-[999px] justify-center items-center gap-2.5 inline-flex cursor-pointer mt-5"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 1.1 }
                }
              }}
              onClick={() => toast("Sent Succesfully")}
            >
              <div className="text-white text-sm font-semibold md:leading-[30px]">
                Send Message
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <ToastContainer />
    </>
  );
};

const InputItem = ({ icon, label }) => {
  let Icon = icon;
  return (
    <div className="flex w-full flex-col mb-3 md:mb-0">
      <span className="text-sm 2xl:text-base font-normal leading-[30px] text-theme-blue-color mb-1">
        {label}
      </span>
      <div className="flex items-center border-[1px] border-gray-300 py-2 px-5 rounded-full">
        <input
          className="appearance-none placeholder:text-sm bg-transparent border-none w-full text-[#727272] placeholder:text-[#727272] placeholder:font-jksans mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder={label}
        />
        <Icon />
      </div>
    </div>
  );
};
