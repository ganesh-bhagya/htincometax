import React, { useContext, useEffect } from "react";
import NavigationContext from "../../../contexts/NavigationContext";
import { Arrow } from "../../../components/layouts/Arrow";
import { Header } from "../../../components/layouts/Header";
import { ContactForm } from "../../home/ContactForm";
import { Footer } from "../../../components/layouts/Footer";
import { FAQ } from "../../home/FAQ";
import { Reviews } from "../../home/Reviews";;
import { BusinessHero } from "./BusinessHero";
import { BusinessContent } from "./BusinessContent";
import { BusinessSimplify } from "./BusinessSimplify";
import { BusinessProcess } from "./BusinessProcess";
import { businessVisaFaqItems } from "../../../utils/dataArrays";

export const BusinessVisa = () => {
  const scrollRefs = useContext(NavigationContext);
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Arrow />
      <Header scrollRefs={scrollRefs} />
      <BusinessHero />
      <BusinessContent />
      <BusinessSimplify />
      <BusinessProcess />
      <FAQ faqs={businessVisaFaqItems}/>
      <Reviews />
      <ContactForm scrollRef={scrollRefs.contactUs} />
      <Footer />
    </>
  );
};
