import React, { useContext, useEffect } from "react";
import NavigationContext from "../../../contexts/NavigationContext";
import { Arrow } from "../../../components/layouts/Arrow";
import { Header } from "../../../components/layouts/Header";
import { ContactForm } from "../../home/ContactForm";
import { Footer } from "../../../components/layouts/Footer";
import { FAQ } from "../../home/FAQ";
import { Reviews } from "../../home/Reviews";
import {  SkillContent } from "./SkillContent";


import { SkillProcess } from "./SkillProcess";
import { SkillSimplify } from "./SkillSimplify";
import { SkillHero } from "./SkillHero";
import { sponsorshipsFaqItems } from "../../../utils/dataArrays";

export const Sponsorships = () => {
  const scrollRefs = useContext(NavigationContext);
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Arrow />
      <Header scrollRefs={scrollRefs} />
      <SkillHero />
      {/* <AsylumContent /> */}
      <SkillSimplify />
      <SkillProcess />

      <FAQ faqs={sponsorshipsFaqItems} />
      <Reviews />
      <ContactForm scrollRef={scrollRefs.contactUs} />
      <Footer />
    </>
  );
};
