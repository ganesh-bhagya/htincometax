import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import { FQARightIcon } from "../../utils/icons";
import finland from "../../assets/images/finland.png";
import uk from "../../assets/images/uk.png";
import usa from "../../assets/images/usa.png";
import nz from "../../assets/images/nz.png";
import japan from "../../assets/images/japan.png";
import france from "../../assets/images/france.png";
import australia from "../../assets/images/australia.png";
import canada from "../../assets/images/canada.png";

export const Countries = () => {
  const country_items = [
    { title: "USA", icon: usa },
    { title: "UK", icon: uk },
    { title: "Canada", icon: canada },
    { title: "Australia", icon: australia },
    { title: "France", icon: france },
    { title: "Japan", icon: japan },
    { title: "New Zealand", icon: nz },
    { title: "Finland", icon: finland },
  ];

  const swiperRef = useRef(null);

  const next = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const previous = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, // Trigger animation when 30% is visible
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="w-full bg-white md:px-[7%] 3xl:px-[15%] px-[5%] py-[20%] overflow-x-hidden md:py-[5%] flex flex-col justify-between items-start font-jksans"
      ref={ref}
    >
      <motion.div
        className="w-full flex flex-col relative"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <div className="text-start text-theme-red-color text-[10px] md:text-sm font-semibold uppercase md:leading-[14px] tracking-wider 3xl:mb-2">
          available countries
        </div>
        <div className="text-start text-theme-blue-color text-2xl leading-10 md:text-[35px] 3xl:text-[50px] font-bold md:leading-[50px] 3xl:leading-[60px] md:w-[45%] 2xl:w-[60%] mt-3">
          Countries Where Our Services Are Available
        </div>
        <div className="absolute top-[30%] right-0 hidden md:flex items-center gap-4">
          <span
            onClick={previous}
            className="w-[60px] h-[60px] flex justify-center items-center rounded-full border-theme-blue-color border-[0.5px]"
          >
            <FQARightIcon />
          </span>
          <span
            onClick={next}
            className="w-[60px] h-[60px] flex justify-center items-center rounded-full border-theme-blue-color border-[0.5px] transform rotate-180"
          >
            <FQARightIcon />
          </span>
        </div>
      </motion.div>

      <motion.div
        className="w-full flex mt-10 md:mt-16 2xl:mt-20"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.3 },
          },
        }}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          grid={{ rows: 2 }}
          loop={true}
          spaceBetween={30}
          pagination={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              grid: { rows: 2 },
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              grid: { rows: 2 },
              spaceBetween: 30,
            },
          }}
          modules={[Grid, Pagination, Autoplay]}
          className="mySwiper w-full h-[25vh] md:h-[40vh] 3xl:h-[35vh]"
        >
          {country_items.map((item, index) => (
            <SwiperSlide className="md:w-[30%] w-[48%] h-fit" key={index}>
              <SliderItem
                icon={item.icon}
                title={item.title}
                index={index}
                controls={controls}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

const SliderItem = ({ title, icon, index, controls }) => {
  return (
    <motion.div
      className="flex items-center w-full border-[#0000003a] border-[0.5px] rounded-[20px] gap-2 p-2 md:p-3"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.2 },
        },
      }}
    >
      <span className="flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
        <img
          src={icon}
          className="object-cover object-center w-full h-full"
          alt={title}
        />
      </span>
      <span>{title}</span>
    </motion.div>
  );
};
