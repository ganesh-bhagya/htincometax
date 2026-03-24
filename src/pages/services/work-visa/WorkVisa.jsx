import React, { useContext, useEffect } from "react";
import NavigationContext from "../../../contexts/NavigationContext";
import { Arrow } from "../../../components/layouts/Arrow";
import { Header } from "../../../components/layouts/Header";
import { ContactForm } from "../../home/ContactForm";
import { Footer } from "../../../components/layouts/Footer";
import { FAQ } from "../../home/FAQ";
import { Reviews } from "../../home/Reviews";;
import { WorkContent } from "./WorkContent";
import { WorkHero } from "./WorkHero";
import { WorkSimplify } from "./WorkSimplify";
import { WorkProcess } from "./WorkProcess";
import { workingVisaFaqItems } from "../../../utils/dataArrays";

export const WorkVisa = () => {
  const scrollRefs = useContext(NavigationContext);
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Arrow />
      <Header scrollRefs={scrollRefs} />
      <WorkHero />
      <WorkContent />
      <WorkSimplify />
      <WorkProcess />
      <FAQ faqs={workingVisaFaqItems} />
      <Reviews />
      <ContactForm scrollRef={scrollRefs.contactUs} />
      <Footer />
    </>
  );
};
