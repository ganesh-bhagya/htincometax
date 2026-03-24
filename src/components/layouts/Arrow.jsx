import React, { useContext } from "react";
import NavigationContext from "../../contexts/NavigationContext";

export const Arrow = () => {
  const { mobileNavOpen } = useContext(NavigationContext) || {};
  if (mobileNavOpen) return null;

  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeuT7xPsSp1SOeVi4Fv4rCrM8HrDOsLhBr-Cbeoedik-n7xrg/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[25px] right-[10px] md:bottom-[35px] md:right-[35px] z-[100] cursor-pointer arrow-font"
    >
      <div className="flex flex-col gap-2">
        <button className="bg-[#9DC16E] px-5 md:px-9 py-2 md:py-3 text-[#80272E] hover:bg-[#80272E] hover:text-[#9DC16E] border border-[#9DC16E] transition-colors duration-300 ease-in-out text-sm md:text-[20px] font-semibold rounded-[5px] mt-5">
          A New comer to Canada ?
        </button>
      </div>
    </a>
  );
};
