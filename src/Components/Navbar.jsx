

import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaBars,
  FaTimes,
  FaDownload,
  FaExternalLinkAlt
} from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
import { Outlet } from "react-router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      id: "home",
      name: "Home",
      icon: <FaHome className="text-lg" />,
      href: "/",
    },
    {
      id: "about",
      name: "About",
      icon: <IoIosPerson className="text-lg" />,
      href: "/about",
    },
    {
      id: "projects",
      name: "Projects",
      icon: <GoProjectSymlink className="text-lg" />,
      href: "/projects",
    },
    {
      id: "resume",
      name: "Resume",
      icon: <RiContactsFill className="text-lg" />,
      href: "/contact",
    },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-white/10 py-4"
          : "bg-transparent py-6"
        }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="relative group">
              <a
                href="/"
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                Erneste
              </a>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative group flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${activeSection === item.id
                      ? "text-cyan-400 bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <span className={`transition-colors duration-300 ${activeSection === item.id ? "text-cyan-400" : "text-purple-400"
                    }`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>

                  {/* Active indicator */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${activeSection === item.id ? "w-full" : "group-hover:w-full"
                    }`}></div>
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              {/* Resume Download */}
              <button className="group flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300">
                <FaDownload className="text-sm group-hover:animate-bounce" />
                <span className="text-sm font-medium">Resume</span>
              </button>

              {/* Contact Button */}
              <a
                href="/contacts"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors duration-300"
            >
              <div className="relative">
                <FaBars className={`absolute transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`} />
                <FaTimes className={`absolute transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ${isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
          } overflow-hidden`}>
          <div className="px-4 py-6 bg-black/95 backdrop-blur-lg border-t border-white/10 mt-4">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${activeSection === item.id
                      ? "text-cyan-400 bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className={`transition-colors duration-300 ${activeSection === item.id ? "text-cyan-400" : "text-purple-400"
                    }`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </a>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300">
                  <FaDownload className="text-sm" />
                  <span className="font-medium">Download Resume</span>
                </button>

                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
                >
                  Contact Me
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 md:h-24"></div>

      {/* Floating Navigation Indicator (Desktop) */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="group relative"
              title={item.name}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === item.id
                  ? "bg-gradient-to-r from-cyan-400 to-purple-400 scale-125"
                  : "bg-white/30 hover:bg-white/50 hover:scale-110"
                }`}></div>

              {/* Tooltip */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-black/90 backdrop-blur-lg text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap border border-white/10">
                  {item.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      <Outlet />
    </>
  );
};

export default Navbar;