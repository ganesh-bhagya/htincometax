import React, { useContext, useEffect, useRef, useState } from "react";
import { Header } from "../../components/layouts/Header";
import { Footer } from "../../components/layouts/Footer";
import { FormHero } from "./FormHero";
import NavigationContext from "../../contexts/NavigationContext";
import { FormsContent } from "./FormsContent";

export const Forms = () => {
  const scrollRefs = useContext(NavigationContext);
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header scrollRefs={scrollRefs} />
      <FormHero />
      <FormsContent />
      <Footer scrollRefs={scrollRefs} />
    </>
  );
};
