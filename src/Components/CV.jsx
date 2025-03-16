

import { motion } from "framer-motion";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

const CV = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const slideInLeftToRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex justify-center"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <img
              src="./image.png"
              alt="Profile Picture"
              className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl fontd-bol">
              Nshimiyumukiza Erneste
            </h1>
            <p className="text-2xl mt-2">FullStack Developer</p>
            <p className="text-xl mt-2">Birth Date: 30/3/2004</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeftToRight}
          className="flex flex-col md:flex-row justify-between mt-8 space-y-8 md:space-y-0 md:space-x-8"
        >
          <motion.div
            variants={fadeInUp}
            className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold underline text-blue-500 mb-6">Contact</h2>
            <div className="space-y-4 text-black">
              <div className="flex items-center space-x-4">
                <MdEmail className="text-blue-500 w-6 h-6" />
                <p>nshimiyumukizaerneste99@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <MdPhoneInTalk className="text-blue-500 w-6 h-6" />
                <p>0794650639</p>
              </div>
              <div className="flex items-center space-x-4">
                <ImFacebook2 className="text-blue-500 w-6 h-6" />
                <p>Eneste Sagaga</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaGithub className="text-blue-500 w-6 h-6" />
                <p>nshimiyumukiza</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold underline text-blue-500 mb-6">Education</h2>
            <div className="space-y-6 text-black">
              <div>
                <span className="text-xl font-bold underline">2021-2024</span>
                <ul className="mt-4 space-y-2">
                  <li>SCHOOL: ES APEM Ngarama</li>
                  <li>Combination: MCE (Mathematics, Economics, and Computer Science)</li>
                  <li>DEGREE: A2</li>
                </ul>
              </div>
              <div>
                <span className="text-xl font-bold underline">2024-2025</span>
                <ul className="mt-4">
                  <li>Nyabiheke Coding School</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold underline text-blue-500 mb-6">General Skills</h2>
            <ul className="space-y-2 text-black">
              <li>Effective Communication</li>
              <li>Leadership</li>
              <li>Time Management</li>
              <li>Conflict Resolution</li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold underline text-blue-500 mb-6">Languages</h2>
            <ul className="space-y-2 text-black">
              <li>English</li>
              <li>Kinyarwanda</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;




