import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRightIcon,
  BlueArrowRightIcon,
  CalanderIcon,
  UserIcon
} from "../../utils/icons";
import blog from "../../assets/images/blog.jpeg";

export const Blogs = ({ scrollRef }) => {
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
    <motion.section
      className="w-full bg-white"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div
        ref={scrollRef}
        className=" md:px-[7%] 3xl:px-[15%] px-[5%] py-[20%] md:py-[5%] overflow-x-hidden flex flex-col justify-between items-start font-jksans"
      >
        <motion.div
          className="w-full flex items-end justify-between"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.3 }
            }
          }}
        >
          <div className="w-full flex flex-col relative">
            <div className="text-start text-theme-red-color text-[10px] md:text-sm font-semibold uppercase md:leading-[14px] tracking-wider 3xl:mb-2">
              Recent Blogs
            </div>
            <div className="text-start text-theme-blue-color text-2xl leading-10 md:text-[35px] 3xl:text-[50px] font-bold md:leading-[50px] 3xl:leading-[60px] md:w-[45%] 2xl:w-[60%] mt-3">
              Latest News & Updates
            </div>
          </div>
          {/* <div className="hidden md:block">
          <div className="w-[160px] px-[30px] py-2 bg-[#c90000] rounded-[10px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-semibold font-jksans md:leading-[30px]">
              Read More
            </div>
            <span>
              <ArrowRightIcon />
            </span>
          </div>
        </div> */}
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-between items-center w-full mt-10 font-jksans"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.5 }
            }
          }}
        >
          <BlogItem index={0} />
          <BlogItem index={1} />
          <BlogItem index={2} />
        </motion.div>
      </div>
    </motion.section>
  );
};

const BlogItem = ({ index }) => {
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
      className="border-[1px] border-[#E3DBD8] md:w-[31%] flex flex-col rounded-[20px] overflow-hidden mb-8"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.2 }
        }
      }}
    >
      <div className="w-full">
        <img src={blog} className="object-cover w-full" alt="" />
      </div>
      <div className="w-full flex flex-col p-6 gap-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span>
              <CalanderIcon />
            </span>
            <span className="text-[#727272] md:text-sm font-normal font-jksans leading-[30px]">
              October 19, 2022
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <UserIcon />
            </span>
            <span className="text-[#727272] md:text-sm font-normal font-jksans leading-[30px]">
              By Admin
            </span>
          </div>
        </div>
        <div className="text-theme-blue-color text-[22px] font-bold font-jksans leading-[30px]">
          Top Tips for a Successful Student Visa Application
        </div>
        <div className="text-[#727272] text-base font-normal font-jksans">
          Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
        </div>
        {/* <div className="w-full flex justify-start">
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-theme-blue-color text-sm font-semibold font-jksans md:leading-[30px]">
              Read More
            </div>
            <span>
              <BlueArrowRightIcon />
            </span>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};
