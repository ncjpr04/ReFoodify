"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const menuLinks = [
  { text: "Home", to: "home" },
  { text: "Impact", to: "impact" },
  { text: "Contact Us", to: "/contact", isExternal: true },
  { text: "Get Started", to: "/signup", isExternal: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.pageYOffset;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.pageYOffset > lastScrollY) {
      setShowNavbar(false);
      setIsOpen(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY = window.pageYOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const topButton = document.getElementById("topButton");
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (topButton) {
      topButton.addEventListener("click", scrollToTop);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (topButton) {
        topButton.removeEventListener("click", scrollToTop);
      }
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-3 transition-all duration-300 ease-out-expo transform ${
        showNavbar ? "translate-y-0 scale-100" : "-translate-y-full scale-90"
      }`}
    >
      <div className="sm:max-w-full lg:max-w-fit duration-300 ease-in-out bg-[#000000d7] border-[#000000] border-[1px] backdrop-blur-sm rounded-full lg:hover:shadow-md mx-auto flex justify-between w-5/6 px-10 py-3">
        <div className="flex items-center gap-16">
          <div>
            <a href="/" className="flex gap-1 font-bold text-gray-700 items-center">
              <span className="h-7 text-primary flex justify-center items-center overflow-hidden">
                <img
                  src="https://github.com/ncjpr04/TechComets/blob/main/logo4.png?raw=true"
                  className="w-7"
                  alt="Logo"
                />
              </span>
            </a>
          </div>

          <div className="hidden lg:flex gap-8 text-[#fffdfd] font-bold">
            {menuLinks.map((item, index) =>
              item.isExternal ? (
                <Link href={item.to} key={index} className="flex items-center justify-center cursor-pointer rounded-full py-1 px-3 hover:text-slate-100 hover:bg-green-800 duration-300">
                  {item.text}
                </Link>
              ) : (
                <ScrollLink
                  key={index}
                  to={item.to}
                  smooth={true}
                  className="flex items-center justify-center cursor-pointer rounded-full py-1 px-3 hover:text-slate-100 hover:bg-green-800 duration-300"
                >
                  {item.text}
                </ScrollLink>
              )
            )}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <button
                  className="relative border-2 group hover:border-green-500 w-6 h-6 duration-500 ease-in-out overflow-hidden"
                  type="button"
                >
                  <p className="font-Manrope text-3xl h-full w-full flex items-center justify-center border text-white duration-500 relative z-10 group-hover:scale-0">
                    ×
                  </p>
                  <span className="absolute w-full h-full bg-blue-500 rotate-45 group-hover:top-4 duration-500 top-12 left-0"></span>
                  <span className="absolute w-full h-full bg-red-500 rotate-45 top-0 group-hover:left-4 duration-500 left-12"></span>
                  <span className="absolute w-full h-full bg-red-500 rotate-45 top-0 group-hover:right-4 duration-500 right-12"></span>
                  <span className="absolute w-full h-full bg-blue-500 rotate-45 group-hover:bottom-4 duration-500 bottom-12 right-0"></span>
                </button>
              ) : (
                <Menu color="#ffffff" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-3 mx-10">
        <div
          className={`lg:hidden overflow-hidden flex items-center rounded-3xl flex-col gap-12 ${
            !isOpen
              ? "h-0"
              : "h-fit fixed z-40 w-full bg-[#000000d7] border-[#000000] border-[1px] ease-in-out origin-top duration-300 backdrop-blur-md max-w-xl shadow-md shadow-[#000000d2]"
          }`}
        >
          <div className="px-8 overflow-hidden">
            <div className="flex flex-col py-2 items-center font-bold tracking-wider">
              {menuLinks.map((item, index) =>
                item.isExternal ? (
                  <Link href={item.to} key={index} className="w-full h-full flex cursor-pointer items-center justify-center my-1 px-10 py-2 rounded-full hover:bg-red-600 text-white hover:text-slate-100 duration-300">
                    {item.text}
                  </Link>
                ) : (
                  <ScrollLink
                    key={index}
                    to={item.to}
                    smooth={true}
                    className="w-full h-full flex cursor-pointer items-center justify-center my-1 px-10 py-2 rounded-full hover:bg-red-600 text-white hover:text-slate-100 duration-300"
                  >
                    {item.text}
                  </ScrollLink>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
