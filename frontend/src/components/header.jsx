import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Navigation items with their routes
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".nav-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`
                fixed top-0 left-0 right-0 z-50
                backdrop-blur-xl border-b border-white/20
                transition-all duration-300 ease-in-out
                ${
                  isScrolled
                    ? "bg-white/98 shadow-2xl"
                    : "bg-white/95 shadow-lg hover:shadow-xl"
                }
            `}
    >
      <div className="nav-container max-w-6xl mx-auto px-5 flex justify-between items-center h-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          Prime Lands
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative font-semibold text-base py-3 transition-all duration-300 hover:text-indigo-500 hover:-translate-y-0.5 group ${
                location.pathname === item.path
                  ? "text-indigo-500"
                  : "text-gray-800"
              }`}
              onClick={closeMobileMenu}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}

          <Link
            to="/register"
            className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/40 overflow-hidden group"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-500 group-hover:translate-x-full"></div>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col p-2 rounded-lg transition-all duration-300 hover:bg-indigo-500/10 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-1 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-1 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`
                md:hidden fixed top-20 left-0 right-0 h-screen
                bg-white/98 backdrop-blur-xl shadow-2xl
                transition-all duration-400 ease-in-out
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
      >
        <div className="flex flex-col items-center pt-12 px-5 space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative font-semibold text-lg py-4 transition-all duration-300 hover:text-indigo-500 group ${
                location.pathname === item.path
                  ? "text-indigo-500"
                  : "text-gray-800"
              }`}
              onClick={closeMobileMenu}
            >
              {item.name}
              <span
                className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}

          <Link
            to="/register"
            className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg mt-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/40 overflow-hidden group"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-500 group-hover:translate-x-full"></div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
