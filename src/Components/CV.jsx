

import React, { useState } from 'react';
import { MdEmail, MdPhoneInTalk, MdLocationOn, MdDownload, MdSchool, MdWork } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaGithub, FaLinkedin, FaCalendarAlt, FaGraduationCap, FaCode, FaLanguage } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const CV = () => {
  const [activeSection, setActiveSection] = useState('contact');

  const personalInfo = {
    name: "Nshimiyumukiza Erneste",
    title: "FullStack Developer",
    birthDate: "March 30, 2004",
    location: "Kigali, Rwanda",
    image: "./image.png"
  };

  const contactInfo = [
    {
      icon: <MdEmail className="w-5 h-5" />,
      label: "Email",
      value: "nshimiyumukizaerneste99@gmail.com",
      href: "mailto:nshimiyumukizaerneste99@gmail.com",
      color: "text-red-400"
    },
    {
      icon: <MdPhoneInTalk className="w-5 h-5" />,
      label: "Phone",
      value: "+250 794 650 639",
      href: "tel:+250794650639",
      color: "text-green-400"
    },
    {
      icon: <MdLocationOn className="w-5 h-5" />,
      label: "Location",
      value: "Kigali, Rwanda",
      href: "#",
      color: "text-blue-400"
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "nshimiyumukiza",
      href: "https://github.com/nshimiyumukiza",
      color: "text-purple-400"
    },
    {
      icon: <ImFacebook2 className="w-5 h-5" />,
      label: "Facebook",
      value: "Eneste Sagaga",
      href: "#",
      color: "text-cyan-400"
    },
  ];

  const education = [
    {
      period: "2021-2024",
      school: "ES APEM Ngarama",
      degree: "A2 Level",
      combination: "MCE (Mathematics, Economics, and Computer Science)",
      icon: <FaGraduationCap className="w-6 h-6" />
    },
    {
      period: "2024-2025",
      school: "Nyabiheke Coding School",
      degree: "Full Stack Development",
      combination: "Modern Web Technologies",
      icon: <FaCode className="w-6 h-6" />
    }
  ];

  const skills = {
    general: [
      "Effective Communication",
      "Leadership",
      "Time Management",
      "Conflict Resolution",
      "Problem Solving",
      "Team Collaboration"
    ],
    technical: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Git & GitHub"
    ]
  };

  const languages = [
    { name: "English", level: "Fluent", percentage: 90 },
    { name: "Kinyarwanda", level: "Native", percentage: 100 }
  ];

  const handleDownloadCV = () => {
    // In a real application, this would trigger a PDF download
    alert('CV download feature would be implemented here!');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src={personalInfo.image}
              alt="Profile Picture"
              className="relative w-48 h-48 rounded-full object-cover mx-auto border-4 border-white/20 backdrop-blur-sm shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20"
            />
          </div>

          <div className="mt-8 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              {personalInfo.name}
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <HiSparkles className="text-yellow-400 animate-spin" />
              <p className="text-2xl text-gray-300 font-light">{personalInfo.title}</p>
              <HiSparkles className="text-yellow-400 animate-spin" />
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <FaCalendarAlt className="w-4 h-4" />
              <p>Born: {personalInfo.birthDate}</p>
              <span className="mx-2">•</span>
              <MdLocationOn className="w-4 h-4" />
              <p>{personalInfo.location}</p>
            </div>
          </div>

          {/* Download CV Button */}
          <button
            onClick={handleDownloadCV}
            className="mt-8 group relative inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <MdDownload className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 xl:col-span-1 space-y-6">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center space-x-2">
                <MdEmail className="w-6 h-6" />
                <span>Contact</span>
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className={`${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-white truncate group-hover:text-cyan-300 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center space-x-2">
                <FaLanguage className="w-6 h-6" />
                <span>Languages</span>
              </h2>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="text-sm text-gray-400">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000 hover:shadow-lg hover:shadow-purple-500/30"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-1 xl:col-span-1">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 h-full">
              <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center space-x-2">
                <MdSchool className="w-6 h-6" />
                <span>Education</span>
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                      <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm bg-green-400/20 text-green-300 px-2 py-1 rounded-full font-medium">
                            {edu.period}
                          </span>
                        </div>
                        <h3 className="text-white font-semibold mb-1 group-hover:text-green-300 transition-colors duration-300">
                          {edu.school}
                        </h3>
                        <p className="text-green-300 text-sm font-medium mb-1">{edu.degree}</p>
                        <p className="text-gray-400 text-sm">{edu.combination}</p>
                      </div>
                    </div>
                    {index < education.length - 1 && (
                      <div className="absolute left-7 top-16 w-px h-8 bg-gradient-to-b from-green-400 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-6">
            {/* General Skills */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center space-x-2">
                <HiSparkles className="w-6 h-6" />
                <span>General Skills</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.general.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-lg px-4 py-3 text-center hover:from-yellow-400/20 hover:to-orange-400/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 group"
                  >
                    <span className="text-white text-sm font-medium group-hover:text-yellow-300 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
              <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center space-x-2">
                <FaCode className="w-6 h-6" />
                <span>Technical Skills</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.technical.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 rounded-lg px-4 py-3 text-center hover:from-blue-400/20 hover:to-cyan-400/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group"
                  >
                    <span className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
            <blockquote className="text-xl md:text-2xl text-gray-300 font-light italic mb-4">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <cite className="text-cyan-400 font-medium">— Cory House</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;