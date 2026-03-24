import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "./../../assets/images/logo.png";
import map from "./../../assets/images/map.png";
import {
  FacebookIcon,
  FooterCallIcon,
  FooterFacebookIcon,
  FooterMailIcon
} from "../../utils/icons";
import { Link, useNavigate } from "react-router-dom";

export const Footer = ({ scrollRefs }) => {
  const navigationItems = [
    {
      link: "/",
      name: "Home",
      children: 0,
      type: "external",
      id: "home"
    },
    {
      link: "/",
      name: "About",
      children: 0,
      type: "internal",
      id: "abtus"
    },
    {
      link: "/",
      name: "Locations",
      children: 0,
      type: "internal",
      id: "locations"
    },
    {
      link: "/",
      name: "Services",
      children: 0,
      type: "internal",
      id: "services"
    },

    {
      link: "/",
      name: "Testimonial",
      children: 0,
      type: "internal",
      id: "testimonial"
    },
    // {
    //   link: "/forms",
    //   name: "Forms",
    //   children: 0,
    //   type: "external",
    //   id: "faq"
    // },
    {
      link: "/",
      name: "FAQs",
      children: 0,
      type: "internal",
      id: "faq"
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  const scrollToDiv = (rerName) => {
    const isHomePage = window.location.pathname === "/";
    console.log("ss");
    if (!isHomePage) {
      navigate(`/?scrollTo=${rerName}`);
    } else {
      if (rerName === "abtus") {
        scrollRefs.abtus.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "locations") {
        scrollRefs.locations.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "services") {
        scrollRefs.services.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "testimonials") {
        scrollRefs.testimonials.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "faq") {
        scrollRefs.faq.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const isServicesLink = new URLSearchParams(window.location.search).get(
      "scrollTo"
    );
    if (isServicesLink !== null) {
      const navigationTimeout = setTimeout(() => {
        if (isServicesLink === "abtus") {
          scrollRefs.abtus.current.scrollIntoView({ behavior: "smooth" });
        } else if (isServicesLink === "locations") {
          scrollRefs.locations.current.scrollIntoView({ behavior: "smooth" });
        } else if (rerName === "services") {
          scrollRefs.services.current.scrollIntoView({ behavior: "smooth" });
        } else if (rerName === "testimonials") {
          scrollRefs.testimonials.current.scrollIntoView({
            behavior: "smooth"
          });
        } else if (rerName === "faq") {
          scrollRefs.faq.current.scrollIntoView({ behavior: "smooth" });
        }

        const urlWithoutQueryParam = window.location.pathname;
        window.history.replaceState({}, document.title, urlWithoutQueryParam);
      }, 1000);

      return () => clearTimeout(navigationTimeout);
    }
  }, [scrollRefs]);

  return (
    <motion.section
      ref={ref}
      className="w-full bg-black flex flex-col relative font-kulim overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div className="w-full pb-[5%]  flex flex-col items-center justify-between py-[10%] md:py-[6%] md:pb-[3%] border-b border-white md:px-[7%] 3xl:px-[15%] px-[7%]">
        <motion.div
          className="w-[18%] flex flex-col items-center py-5 md:py-0 "
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2 }
            }
          }}
        >
          <div className="md:w-[100px] ww-[80px] overflow-hidden">
            <img src={logo} alt="" />
          </div>

          <div className=" flex flex-col md:flex-row items-center gap-5 mt-10 md:mt-5 ">
            {navigationItems.map((item, itemIdex) => {
              return (
                <MenuItem
                  id={item.id}
                  scrollToDiv={scrollToDiv}
                  title={item.name}
                />
              );
            })}
          </div>

          <div className=" flex items-center gap-5 mt-5">
            <a
              href="https://www.facebook.com/htincometax/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FooterFacebookIcon />{" "}
            </a>
            <a href="tel:6479826014">
              {" "}
              <FooterCallIcon />{" "}
            </a>
            <a href="mailto:htincometax@outlook.com">
       
              <FooterMailIcon />{" "}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="md:px-[7%] 3xl:px-[15%] px-[7%] flex items-center justify-center w-full py-3"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.7 }
          }
        }}
      >
        <div className="text-white text-base font-normal leading-[30px]">
          © H&T Income Tax | All Rights Reserved
        </div>
        {/* <div className="hidden md:block">
          <FooterBottom />
        </div> */}
      </motion.div>
    </motion.section>
  );
};

const MenuItem = ({ title, id, scrollToDiv }) => (
  <button
    onClick={() => scrollToDiv(id)}
    className="text-white text-base md:text-[20px] font-normal text-start leading-[30px]"
  >
    {title}
  </button>
);
