import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { reviewItems } from "../../utils/dataArrays";
import heroFull from "../../assets/images/hero-full.jpg";

export const Reviews = ({ scrollRef })  => {
  const swiperRef = useRef(null);


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
      className="w-full relative  overflow-x-hidden md:px-[7%] 3xl:px-[15%] px-[5%] py-[10%] md:py-[5%] flex flex-col justify-between md:items-center font-jksans"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div    ref={scrollRef} className=" absolute w-full h-full top-0 left-0 bg-[#80272EDE] z-10"></div>

      {/* Desktop Background Image */}
      <div className="absolute left-0 bottom-0 flex w-full z-0">
        <img
          src={heroFull}
          className="w-full h-screen md:h-full object-cover opacity-85"
          alt=""
        />
      </div>

      <motion.div
        className="w-full flex z-20 "
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.5 }
          }
        }}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true // Optional: Makes dots more interactive
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30
            }
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper md:w-[90%] "
        >
          {reviewItems.map((item, index) => (
            <SwiperSlide className="md:w-full h-fit" key={index}>
              <div className="my-6 md:w-[95%] mx-3 h-full">
                <ReviewCardItem item={item} index={index} controls={controls} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

const ReviewCardItem = ({ item, index, controls }) => {
  return (
    <motion.div
      className={`flex flex-col z-20 items-center justify-center md:p-4 p-6 py-8  w-[100%] gap-3 md:mx-auto cursor-pointer  transition-colors `}
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
      <p className=" text-[20px] text-white font-kulim  md:w-[80%] text-center">
        {item.comment}
      </p>

      <div className="flex items-center justify-center md:w-[40%] mt-2 gap-3">
        <div className="">
          {/* <img
            className="h-[50px] w-[50px] md:h-[50px] md:w-[50px] object-cover rounded-[50%]"
            src={item.img}
            alt="Card image"
          /> */}
        </div>
        <div className="flex flex-col font-kulim  items-start justify-start  ">
          <span className=" text-[20px] font-semibold text-white font-kulim ">
            {item.name}{" "}
          </span>
          {/* <span className="font-kulim md:text-lg text-base text-white">
            {item.position}
          </span> */}
        </div>
      </div>
    </motion.div>
  );
};
