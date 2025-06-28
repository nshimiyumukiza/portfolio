
// import { SiHtml5, SiTailwindcss, SiDevexpress } from "react-icons/si";
// import { FaNodeJs, FaReact } from "react-icons/fa";

// const About = () => {
//   const skills = [
//     { name: "HTML", icon: <SiHtml5 className="text-3xl text-orange-500" />, level: "w-11/12" },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl text-blue-500" />, level: "w-10/12" },
//     { name: "Java Script", icon: <FaNodeJs className="text-3xl text-yellow-500" />, level: "w-11/12" },
//     { name: "React JS", icon: <FaReact className="text-3xl text-cyan-500" />, level: "w-10/12" },
//     { name: "Node JS", icon: <SiDevexpress className="text-3xl text-green-500" />, level: "w-9/12" },
//   ];

//   return (
//     <div className="bg-black text-white py-12 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-semibold mb-12 text-center text-green-400 uppercase">
//           About Me
//         </h1>
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <img
//             src="./image.png"
//             alt="Profile"
//             className="w-72 h-96 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
//           />
//           <div className="flex-1">
//             <p className="text-lg leading-relaxed mb-8">
//               I am a passionate student-developer focused on building modern and responsive web applications.
//               With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
//             </p>
//             <h2 className="text-2xl font-bold text-blue-400 text-center mb-4">Skills</h2>
//             <div className="space-y-6">
//               {skills.map((skill, index) => (
//                 <div key={index} className="flex items-center gap-4">
//                   {skill.icon}
//                   <span className="w-1/4 text-lg font-bold">{skill.name}</span>
//                   <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
//                     <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-full ${skill.level} rounded-full transition-transform duration-300 hover:scale-105`}></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-12 flex justify-around text-center">
//               <div>
//                 <h1 className="text-3xl font-bold text-green-400">1+</h1>
//                 <p>Years Experience</p>
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold text-green-400">2+</h1>
//                 <p>Projects</p>
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold text-green-400">3+</h1>
//                 <p>Happy Clients</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React, { useState, useEffect } from 'react';
import { SiHtml5, SiTailwindcss, SiNodedotjs, SiJavascript, SiExpress } from 'react-icons/si';
import { FaReact, FaAward, FaUsers, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setAnimateSkills(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { 
      name: "HTML5", 
      icon: <SiHtml5 className="text-4xl text-orange-500" />, 
      level: 95,
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss className="text-4xl text-cyan-400" />, 
      level: 90,
      color: "from-cyan-400 to-blue-500"
    },
    { 
      name: "JavaScript", 
      icon: <SiJavascript className="text-4xl text-yellow-400" />, 
      level: 88,
      color: "from-yellow-400 to-orange-500"
    },
    { 
      name: "React JS", 
      icon: <FaReact className="text-4xl text-cyan-300" />, 
      level: 85,
      color: "from-cyan-300 to-blue-400"
    },
    { 
      name: "Node.js", 
      icon: <SiNodedotjs className="text-4xl text-green-500" />, 
      level: 80,
      color: "from-green-500 to-green-600"
    },
    { 
      name: "Express.js", 
      icon: <SiExpress className="text-4xl text-gray-400" />, 
      level: 78,
      color: "from-gray-400 to-gray-600"
    }
  ];

  const achievements = [
    {
      icon: <FaAward className="text-3xl text-yellow-400" />,
      number: "1+",
      label: "Years Experience",
      description: "Building modern web applications"
    },
    {
      icon: <FaProjectDiagram className="text-3xl text-purple-400" />,
      number: "5+",
      label: "Projects Completed",
      description: "Full-stack applications delivered"
    },
    {
      icon: <FaUsers className="text-3xl text-green-400" />,
      number: "3+",
      label: "Happy Clients",
      description: "Satisfied with quality results"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img 
                src="./image.png" 
                alt="Profile" 
                className="relative w-full max-w-md mx-auto h-[500px] rounded-2xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Description */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate student-developer dedicated to crafting exceptional digital experiences. 
                With a strong foundation in modern web technologies, I transform ideas into elegant, 
                responsive applications that users love.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in web development is driven by curiosity and a commitment to continuous learning. 
                I believe in writing clean, maintainable code and creating intuitive user interfaces that 
                make technology accessible to everyone.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">⚡</span>
                </div>
                Technical Skills
              </h4>
              
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-white font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animateSkills ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {achievement.number}
                      </h4>
                      <p className="text-white font-semibold text-lg">{achievement.label}</p>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
            <span>Let's Work Together</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-sm">→</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

