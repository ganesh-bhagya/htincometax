import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import {
  ArrowDown,
  HamburgerIcon,
  CloseIcon,
  FacobookNewIcon,
  CallNewIcon,
  MailNewIcon
} from "../../utils/icons";
import { motion } from "framer-motion";

export const Header = ({ scrollRefs }) => {
  const [visibleMObile, setVisibleMObile] = useState(false);
  const handleFadeIn = () => {
    setVisibleMObile((prev) => {
      const newState = !prev;
      // document.body.style.overflow = newState ? "hidden" : "visible";
      return newState;
    });
  };

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
      id: "testimonials"
    },
    // {
    //   link: "/forms",
    //   name: "Forms",
    //   children: 0,
    //   type: "external",
    //   id: "testimonial"
    // },
    {
      link: "/",
      name: "FAQs",
      children: 0,
      type: "internal",
      id: "faq"
    }
  ];

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
  const scrollToDivMobile = (rerName) => {
    handleFadeIn();
    const isHomePage = window.location.pathname === "/";
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
    <>
      <section
        className={`w-full fixed z-50 py-3 md:py-4  bg-white px-[5%] md:px-[7%] 3xl:px-[7%] flex flex-row justify-between items-center border bottom-border border-b-2 font-kulim `}
      >
        <Link to="/" className=" w-[10%] md:w-[5%] overflow-hidden">
          <img src={logo} alt="" />
        </Link>
        <div className=" md:ml-[10%] w-[50%] hidden md:flex items-center relative justify-around  ">
          {navigationItems.map((item, itemIdex) => {
            return (
              <NavigationItem
                name={item.name}
                link={item.link}
                id={item.id}
                type={item.type}
                scrollToDiv={scrollToDiv}
                children={item.children}
              />
            );
          })}
        </div>
        <div
          onClick={handleFadeIn}
          className="bg-[#9DC16E54] p-2 rounded-sm md:hidden"
        >
          <HamburgerIcon />
        </div>
        <div className="w-[40%] hidden md:flex md:w-[15%] gap-5 justify-end items-center">
          <a
            href="https://www.facebook.com/htincometax/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacobookNewIcon />
          </a>
          <a href="tel:6479826014">
            <CallNewIcon />
          </a>
          <a href="mailto:htincometax@outlook.com">
            <MailNewIcon />
          </a>
        </div>

        <div
          className={`fixed w-full pb-[20%] inset-0 top-0 left-0 bottom-0 bg-[#DFEBCF] flex flex-col items-center h-[100vh]  transition transform duration-500 ease-in-out fade-up-enter-active ${
            visibleMObile ? "fade-up-enter-to" : "fade-up-enter-from "
          } `}
        >
          <div className="flex items-center justify-between w-full p-[20px]">
            <Link className="">
              {/* <img src={logo} className=" w-[15%] " alt="" /> */}
            </Link>
            <span
              className=" bg-[#9DC16E54] p-1 rounded-sm"
              onClick={handleFadeIn}
            >
              <CloseIcon />
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-3 mt-[20%] p-[20px]">
            <img src={logo} className=" w-[100px] mb-10" alt="" />
            {navigationItems.map((item, itemIdex) => {
              return (
                <NavigationItemMobile
                  name={item.name}
                  link={item.link}
                  id={item.id}
                  type={item.type}
                  scrollToDivMobile={scrollToDivMobile}
                  children={item.children}
                />
              );
            })}

            <div className="w-full flex gap-5 mt-10 justify-center items-center ">
            <a
            href="https://www.facebook.com/htincometax/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacobookNewIcon />
          </a>
          <a href="tel:6479826014">
            <CallNewIcon />
          </a>
          <a href="mailto:htincometax@outlook.com">
            <MailNewIcon />
          </a>
            </div>
          </div>
          {/* <div className=" w-full flex justify-center mt-auto">
            <div className="w-full flex gap-5  justify-center items-center ">
              <FacobookNewIcon />
              <CallNewIcon />
              <MailNewIcon />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

const NavigationItem = ({ link, name, children, id, type, scrollToDiv }) => {
  return (
    <>
      {type === "internal" ? (
        <button
          onClick={() => scrollToDiv(id)}
          className="text-black   font-medium text-[xs] md:text-lg 3xl:text-lg flex items-center gap-1 "
        >
          <span> {name}</span>
          {children !== 0 && (
            <span>
              <ArrowDown />
            </span>
          )}
        </button>
      ) : (
        <Link
          to={link}
          className="text-black  font-medium  text-[xs] md:text-lg 3xl:text-lg flex items-center gap-1 "
        >
          <span> {name}</span>
          {children !== 0 && (
            <span>
              <ArrowDown />
            </span>
          )}
        </Link>
      )}
    </>
  );
};

const NavigationItemMobile = ({
  link,
  name,
  children,
  id,
  type,
  scrollToDivMobile
}) => {
  return (
    <>
      {type === "internal" ? (
        <button
          onClick={() => {
            scrollToDivMobile(id);
            document.body.style.overflow = "visible"; // Ensure scrolling is enabled
          }}
          className="text-black font-bold  font-kulim text-xl flex items-center gap-1 "
        >
          <span> {name}</span>
          {children !== 0 && (
            <span>
              <ArrowDown />
            </span>
          )}
        </button>
      ) : (
        <Link
          to={link}
          onClick={() => {
            handleFadeIn();
            document.body.style.overflow = "visible"; // Ensure scrolling is enabled
          }}
          className="text-black font-bold  font-kulim text-xl flex items-center gap-1 "
        >
          <span> {name}</span>
          {children !== 0 && (
            <span>
              <ArrowDown />
            </span>
          )}
        </Link>
      )}
    </>
  );
};
