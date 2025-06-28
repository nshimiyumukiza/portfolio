

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaGithub />, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: <MdEmail />, text: 'nshimiyumukizaerneste99@gmail.com', href: 'mailto:erneste.dev@email.com' },
    { icon: <MdPhone />, text: '+250 794 650 639', href: 'tel:+250xxxxxxxxx' },
    { icon: <MdLocationOn />, text: 'Kigali, Rwanda', href: '#' },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Erneste
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 group-hover:w-32 transition-all duration-500"></div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Passionate student-developer crafting modern and responsive web applications with cutting-edge technologies.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 ${social.color} group`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="group-hover:animate-bounce">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <span className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {contact.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-black px-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <FaHeart className="text-black text-sm animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Erneste. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with <FaHeart className="inline text-red-500 animate-pulse mx-1" /> and lots of coffee
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <FaArrowUp className="text-sm group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;