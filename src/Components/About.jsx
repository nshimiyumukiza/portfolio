
import { SiHtml5, SiTailwindcss, SiDevexpress } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-3xl text-orange-500" />, level: "w-11/12" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl text-blue-500" />, level: "w-10/12" },
    { name: "Java Script", icon: <FaNodeJs className="text-3xl text-yellow-500" />, level: "w-11/12" },
    { name: "React JS", icon: <FaReact className="text-3xl text-cyan-500" />, level: "w-10/12" },
    { name: "Node JS", icon: <SiDevexpress className="text-3xl text-green-500" />, level: "w-9/12" },
  ];

  return (
    <div className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold mb-12 text-center text-green-400 uppercase">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="./image.png"
            alt="Profile"
            className="w-72 h-96 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="flex-1">
            <p className="text-lg leading-relaxed mb-8">
              I am a passionate student-developer focused on building modern and responsive web applications.
              With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
            </p>
            <h2 className="text-2xl font-bold text-blue-400 text-center mb-4">Skills</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  {skill.icon}
                  <span className="w-1/4 text-lg font-bold">{skill.name}</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-full ${skill.level} rounded-full transition-transform duration-300 hover:scale-105`}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-around text-center">
              <div>
                <h1 className="text-3xl font-bold text-green-400">1+</h1>
                <p>Years Experience</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-green-400">2+</h1>
                <p>Projects</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-green-400">3+</h1>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

