

const About = () => {
  return (
    <div className="bg-black text-white py-16 px-16"id="about me">
      <div className="mx-auto py-8 md:16">
        <h1 className="text-4xl font-semibold mb-12 text-center text-green-400">about me</h1>
        <div className="flex flex-col md:flex-row items-center space-x-12">
            <img src="./image.png" alt="" className="w-72 h-80 rounded object-cover mb-8 md:mb-0" />
            <div className="flex-1">
              <p className="text-xl mb-8">
                I am a possionate student-developer with a focus on bluilding
                mordern and responsive web appliction. with astrong foundention in both frontend
                and backend technologies, I strive to create seamless and efficient user exprience
            </p>
            <div className="space-x-4">
              <div className="flex items-center">
                <label className="w-2/12">HTML & CSS</label>
                <div className=" grow bg-gray-800 rounded-full h-2.5  ">
                  <div className="bg-gradient-to-r form bg-green-400 to-blue-500 h-2.5 bg
                  rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">

                  </div>
                  
                </div>
              </div>
            </div>
           <div className="space-x-4">
            <div className="flex items-center">
              <label className="w-2/12">Tailwind & JS</label>
                 <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from bg-green-400 to-blue-500 h-2.5 rounded-full 
              transform transition-transform duration-300 hover:scale-75 w-11/12">
              </div>
             </div>
            </div>
           </div>
           <div className="space-x-4">
             <div className="flex items-center">
               <label className="w-2/12">React</label>
               <div className="grow bg-gray-800 rounded-full h-2.5">
                <div className="bg-gradient-to-r from bg-green-400 to-blue-500 h-2.5 rounded-full
                   transform transition-transform duration-300 hover:scale-75 w-11/12"></div>
               </div>
             </div>
           </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
