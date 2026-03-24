import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Locations = ({ scrollRef }) => {
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
      className={`w-full  bg-[#9DC16E54] md:px-[7%] 3xl:px-[7%] px-[5%] py-[10%] md:py-[5%] flex overflow-x-hidden font-kulim`}
    >
      <div
        className="flex w-full  flex-col justify-center items-center"
        ref={ref}
      >
        <div className=" text-[36px] md:text-[48px] text-[#80272E] font-bold">
          Locations
        </div>

        <div className=" w-full flex flex-col md:flex-row justify-between mt-10">
          {/* <div className=" md:w-[49%] flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.4764611293886!2d-79.26075209999999!3d43.742201699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d165bc1829c9%3A0xae62696e0fa4c976!2sH%20%26%20T%20Income%20Tax!5e0!3m2!1sen!2slk!4v1736573356762!5m2!1sen!2slk"
              // width="600"
              // height="450"
            className=" w-full h-[300px] md:h-[450px]"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className=" text-black text-base md:text-lg mt-2">Ajax Office</div>
            <div className=" text-[#80272E] text-base md:text-lg font-semibold">
              (647) 982-6014
            </div>
          </div> */}
          <div className=" w-full flex flex-col md:mt-0 mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.4764611293886!2d-79.26075209999999!3d43.742201699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d165bc1829c9%3A0xae62696e0fa4c976!2sH%20%26%20T%20Income%20Tax!5e0!3m2!1sen!2slk!4v1736573356762!5m2!1sen!2slk"
              // width="600"
              // height="450"
              className=" w-full h-[300px] md:h-[450px]"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="w-full flex flex-col md:flex-row justify-between">
              <div className=" flex flex-col">
                <div className=" text-black  text-base md:text-lg mt-2">
                  Scarborough Office, 1071 Midland Ave, Suite 204
                </div>
                <div className=" text-black  text-base font-semibold md:text-lg">
                  Located inside Upper Level Offices
                </div>
                <div className=" text-[#80272E]  text-base md:text-lg font-semibold">
                  (647) 982-6014
                </div>
              </div>
              <div className=" flex flex-col md:items-end">
                <div className=" text-black  text-base font-bold md:text-lg mt-2">
                  Other Office
                </div>
                <div className=" text-black  text-base md:text-lg ">
                  Ajax Office
                </div>

                <div className=" text-[#80272E]  text-base md:text-lg font-semibold">
                  (647) 982-6014
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-lg bg-[#80272E] font-medium text-white mt-12 px-28 md:px-11 py-3 rounded-[36px]">
          Directions
        </div>
      </div>
    </section>
  );
};
