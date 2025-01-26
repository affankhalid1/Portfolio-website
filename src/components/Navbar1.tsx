"use client";
import React, { useState } from "react";

const Navbar = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close the mobile menu on link click
  };

  return (
    <nav className="w-[90vw] mx-auto max-w-[1200px] py-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo text-2xl font-bold text-white">AFFAN</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-9 text-[15px]">
          {["Home", "Services", "Project", "Blog", "About", "Contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
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
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center gap-6 mt-4 bg-[#0f0f0f] p-5 rounded-md md:hidden">
          {["Home", "Services", "Project", "Blog", "About", "Contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
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
