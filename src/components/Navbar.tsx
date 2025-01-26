"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [show, setShow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsSticky(true);
        setShow(true);
      } else {
        setIsSticky(false);
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id:string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close menu on mobile after clicking a link
  };

  return (
    <nav
      className={`transition-all duration-500 ${
        isSticky
          ? "sticky top-0 bg-[#0f0f0f] border-[0.2px] border-[#252525] shadow-lg z-40"
          : ""
      } ${show ? "block" : "hidden"}`}
    >
      <div className="flex justify-between items-center w-[90vw] max-w-[1200px] mx-auto py-5">
        <div className="logo text-2xl font-bold text-white">AFFAN</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-9 text-[15px]">
          {["Home", "Services", "Project", "Blog", "About", "Contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleScrollToSection(section)}
                className={`${
                  activeSection === section
                    ? "text-[#ee4818]"
                    : "text-[#c0c0c0]"
                } hover:text-[#ee4818]`}
              >
                {section.toUpperCase()}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-white"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-[#0f0f0f] py-5 text-[15px]">
          {["Home", "Services", "Project", "Blog", "About", "Contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleScrollToSection(section)}
                className={`${
                  activeSection === section
                    ? "text-[#ee4818]"
                    : "text-[#c0c0c0]"
                } hover:text-[#ee4818]`}
              >
                {section.toUpperCase()}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
