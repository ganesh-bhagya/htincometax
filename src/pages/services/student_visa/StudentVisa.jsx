import React, { useContext, useEffect } from "react";
import NavigationContext from "../../../contexts/NavigationContext";
import { Arrow } from "../../../components/layouts/Arrow";
import { Header } from "../../../components/layouts/Header";
import { ContactForm } from "../../home/ContactForm";
import { Footer } from "../../../components/layouts/Footer";
import { FAQ } from "../../home/FAQ";
import { Reviews } from "../../home/Reviews";
import { Hero } from "../../home/Hero";
import { StudentHero } from "./StudentHero";
import { StudentVisaContent } from "./StudentVisaContent";
import { Simplify } from "./Simplify";
import { StudentProcess } from "./StudentProcess";
import { studentVisaFaqItems } from "../../../utils/dataArrays";

export const StudentVisa = () => {
  const scrollRefs = useContext(NavigationContext);
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Arrow />
      <Header scrollRefs={scrollRefs} />
      <StudentHero />
      <StudentVisaContent />
      <Simplify />
      <StudentProcess />
      <FAQ faqs={studentVisaFaqItems} />
      <Reviews />
      <ContactForm scrollRef={scrollRefs.contactUs} />
      <Footer />
    </>
  );
};
