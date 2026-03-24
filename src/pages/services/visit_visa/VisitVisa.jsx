import React, { useContext, useEffect } from "react";
import NavigationContext from "../../../contexts/NavigationContext";
import { Arrow } from "../../../components/layouts/Arrow";
import { Header } from "../../../components/layouts/Header";
import { ContactForm } from "../../home/ContactForm";
import { Footer } from "../../../components/layouts/Footer";
import { FAQ } from "../../home/FAQ";
import { Reviews } from "../../home/Reviews";
import { Hero } from "../../home/Hero";
import { VisitProcess } from "./VisitProcess";
import { VisitHero } from "./VisitHero";
import { VisitVisaContent } from "./VisitVisaContent";
import { VisitSimplify } from "./VisitSimplify";
import { visitVisaFaqItems } from "../../../utils/dataArrays";

export const VisitVisa = () => {
  const scrollRefs = useContext(NavigationContext);
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Arrow />
      <Header scrollRefs={scrollRefs} />
      <VisitHero />
      <VisitVisaContent />
      <VisitSimplify />
      <VisitProcess />
      <FAQ faqs={visitVisaFaqItems} />
      <Reviews />
      <ContactForm scrollRef={scrollRefs.contactUs} />
      <Footer />
    </>
  );
};
