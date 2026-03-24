import React, { useContext, useEffect, useRef, useState } from "react";
import { Header } from "../../components/layouts/Header";
import { Arrow } from "../../components/layouts/Arrow";
import { Footer } from "../../components/layouts/Footer";
import { Hero } from "./Hero";
import { AboutUs } from "./AboutUs";
import { Services } from "./Services";
import { FAQ } from "./FAQ";
import { Reviews } from "./Reviews";
import NavigationContext from "../../contexts/NavigationContext";
import { generalFaqItems } from "../../utils/dataArrays";
import { Vnm } from "./Vnm";
import { Locations } from "./Locations";
import { DownloadForm } from "./DownloadForm";

export const Home = () => {
  const { scrollRefs } = useContext(NavigationContext);
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Arrow/>
      <Header scrollRefs={scrollRefs} />
      <Hero />
      <AboutUs scrollRef={scrollRefs.abtus} />
      <Vnm />
      <Locations scrollRef={scrollRefs.locations} />
      <DownloadForm />
      <Services scrollRef={scrollRefs.services} />
      <Reviews scrollRef={scrollRefs.testimonials} />
      <FAQ scrollRef={scrollRefs.faq} faqs={generalFaqItems} />

      <Footer scrollRefs={scrollRefs} />
    </>
  );
};
