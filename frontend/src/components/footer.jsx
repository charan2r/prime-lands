import React, { useState } from "react";
import {
  Building2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: "Properties", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const propertyTypes = [
    { name: "Houses", href: "#" },
    { name: "Apartments", href: "#" },
    { name: "Villas", href: "#" },
    { name: "Land", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <Building2 className="w-10 h-10 text-indigo-400 mr-3 transition-all duration-300 group-hover:text-indigo-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Prime Lands
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              Sri Lanka's premier real estate platform connecting buyers,
              sellers, and renters with innovative solutions and exceptional
              service.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`
                      relative w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center
                      transition-all duration-300 group border border-gray-700
                      hover:border-transparent hover:scale-110 hover:shadow-lg
                      ${social.color}
                    `}
                  >
                    <Icon className="w-5 h-5 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center"
                    onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      className={`
                      w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 mr-0 rounded-full
                      transition-all duration-300
                      ${hoveredLink === `quick-${index}` ? "w-4 mr-2" : ""}
                    `}
                    ></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Property Types
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {propertyTypes.map((type, index) => (
                <li key={index}>
                  <a
                    href={type.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center"
                    onMouseEnter={() => setHoveredLink(`property-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      className={`
                      w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 mr-0 rounded-full
                      transition-all duration-300
                      ${hoveredLink === `property-${index}` ? "w-4 mr-2" : ""}
                    `}
                    ></span>
                    {type.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-indigo-400 mt-0.5 group-hover:text-indigo-300 transition-colors duration-300" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                  123 Galle Road, Colombo 03, Sri Lanka
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                  +94 76 123 4567
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                  info@primelands.lk
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Prime Lands. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
