import React, { createContext, useRef, useState } from "react";

const NavigationContext = createContext();

export const HomeProvider = ({ children }) => {
  const scrollRefs = {
    abtus: useRef(null),
    locations: useRef(null),
    services: useRef(null),
    testimonials: useRef(null),
    faq: useRef(null),
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const value = { scrollRefs, mobileNavOpen, setMobileNavOpen };

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};

export default NavigationContext;