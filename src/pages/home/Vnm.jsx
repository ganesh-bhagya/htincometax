import React from "react";
import { MisionIcon, VisionIcon } from "../../utils/icons";

export const Vnm = () => {
  return (
    <section
      className={`w-full  bg-white md:px-[7%] 3xl:px-[7%] px-[5%] py-[20%] md:py-[5%] flex flex-col md:flex-row justify-center gap-3 overflow-x-hidden font-kulim`}
    >
      <div className=" md:w-[40%] flex flex-col border-2 border-[#9DC16E] rounded-3xl p-5 ">
        <div className="flex items-center gap-3">
          <VisionIcon />
          <span className=" text-[20px] md:text-[25px] font-semibold text-black">
            Vision
          </span>
        </div>
        <div className=" text-base md:text-[20px] mt-5">
          H&T Income Tax envisions being the trusted partner that empowers
          individuals and businesses to achieve financial success through expert
          tax solutions and exceptional service.
        </div>
      </div>
      <div className=" md:w-[40%] flex flex-col  bg-[#9DC16E2E] rounded-3xl p-5 ">
        <div className="flex items-center gap-3">
          <MisionIcon />
          <span className="text-[20px] md:text-[25px]  font-semibold text-black">
            Mission
          </span>
        </div>
        <div className=" text-base md:text-[20px] mt-5">
          H&T Income Tax is dedicated to providing trusted, personalized tax
          services that simplify the tax process, maximize returns, and ensure
          the financial well-being of our clients.
        </div>
      </div>
    </section>
  );
};
