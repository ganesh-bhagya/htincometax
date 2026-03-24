import React, { useContext, useEffect } from "react";
import NavigationContext from "../../../contexts/NavigationContext";
import { Arrow } from "../../../components/layouts/Arrow";
import { Header } from "../../../components/layouts/Header";
import { ContactForm } from "../../home/ContactForm";
import { Footer } from "../../../components/layouts/Footer";
import { FAQ } from "../../home/FAQ";
import { Reviews } from "../../home/Reviews";
import { AsylumsHero } from "./AsylumsHero";
import { AsylumContent } from "./AsylumContent";
import { AsylumProcess } from "./AsylumProcess";
import { AsylumSimplify } from "./AsylumSimplify";
import { asylumFaqItems } from "../../../utils/dataArrays";

export const AsylumVisa = () => {
  const scrollRefs = useContext(NavigationContext);
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Arrow />
      <Header scrollRefs={scrollRefs} />
      <AsylumsHero />
      {/* <AsylumContent /> */}
      <AsylumSimplify />
      <AsylumProcess />

      <FAQ faqs={asylumFaqItems} />
      <Reviews />
      <ContactForm scrollRef={scrollRefs.contactUs} />
      <Footer />
    </>
  );
};
