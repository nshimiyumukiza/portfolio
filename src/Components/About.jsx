import { SiHtml5 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiDevexpress } from "react-icons/si";
const About = () => {
  return (
    <div className="bg-black text-white md:py-16 md:px-16 px-4 py-4 ">
      <div className="md:mx-auto py-8 md:px-16">
        <h1 className="text-4xl font-semibold mb-12 text-center text-green-400">about me</h1>
        <div className="flex flex-col md:flex-row items-center space-x-12">
            <img src="public/sagaga.jpg" alt="" className="w-72 h-96 rounded object-cover mb-8 md:mb-0" />
            <div className="flex-1">
              <p className="text-xl mb-8">
                I am a possionate student-developer with a focus on bluilding
                mordern and responsive web appliction. with astrong foundention in both frontend
                and backend technologies, I strive to create seamless and efficient user exprience
            </p>
            <div>
              <p className="text-center m-3 text-2xl font-bold text-blue-400">skilss</p>
            </div>
            <div className="space-y-4 w">
            <div className="space-x-3">
              <div className="flex items-center flex-wrap">
                <div>
                <SiHtml5 className="text-2xl text-blue-500"/>
                </div>
                <label className="w-2/12 text-xl font-bold">HTML </label>
                <div className=" grow bg-gray-800 rounded-full h-2.5  ">
                  <div className="bg-gradient-to-r form bg-green-400 to-blue-500 h-2.5 bg
                  rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">

                  </div>
                  
                </div>
              </div>
            </div>
            
          
           <div className="space-x-1 sm:space-x-4">
             <div className="flex items-center flex-wrap">
              <div>
              <SiTailwindcss className="text-2xl text-blue-500"/>
              </div>
               <label className="w-2/12 text-xl font-bold">Tailwind</label>
               <div className="grow bg-gray-800 rounded-full h-2.5">
                <div className="bg-gradient-to-r from bg-green-400 to-blue-500 h-2.5 rounded-full
                   transform transition-transform duration-300 hover:scale-75 w-11/12"></div>
               </div>
             </div>
           </div>
           <div className="space-x-4">
              <div className="flex items-center flex-wrap">
                <div>
                <FaNodeJs className="text-2xl text-blue-500"/>
                </div>
                <label className="w-2/12 text-xl font-bold">Javascript</label>
                <div className=" grow bg-gray-800 rounded-full h-2.5  ">
                  <div className="bg-gradient-to-r form bg-green-400 to-blue-500 h-2.5 bg
                  rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">

                  </div>
                  
                </div>
              </div>
            </div>
        
            <div className="space-x-4">
              <div className="flex items-center flex-wrap">
                <div>
                <FaReact className="text-2xl text-blue-500"/>
                </div>
                <label className="w-2/12 text-xl font-bold">React JS</label>
                <div className=" grow bg-gray-800 rounded-full h-2.5  ">
                  <div className="bg-gradient-to-r form bg-green-400 to-blue-500 h-2.5 bg
                  rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">

                  </div>
                  
                </div>
              </div>
            </div>
            <div className="space-x-4">
              <div className="flex items-center flex-wrap">
                <div>
                <SiDevexpress className="text-2xl text-blue-500"/>
                </div>
                <label className="w-2/12 text-xl font-bold">Node JS</label>
                <div className=" grow bg-gray-800 rounded-full h-2.5  ">
                  <div className="bg-gradient-to-r form bg-green-400 to-blue-500 h-2.5 bg
                  rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">

                  </div>
                  
                </div>
              </div>
            </div>
          
            
            </div>
            <div className="mt-12 flex justify-around text-center">
<div>
<h1 className="text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">1+</h1>
<p>years experiance</p>
</div>
<div>
<h1 className="text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">2+</h1>
<p>projects</p>
</div>
<div>
<h1 className="text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">3+</h1>
<p>happy client</p>
</div>
            </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default About
