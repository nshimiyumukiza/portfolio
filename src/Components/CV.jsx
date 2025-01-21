import { AiOutlineMessage } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

const CV = () => {
  return (
    <div>
        <div >
            <div className="flex justify-center mt-6">
                <div>
                <img src="./image.png" alt=""className='mx-autor mb-8 w-48 h-48 rounded-full object-cover transifrom transition-transiform 
      duretion-300 hover:scale-105 ' />
      <p className='text-transparent bg-clip-text bg-gradient-to-r from bg-green-400 to-blue-500>nshimiyumukiza erneste text-4xl'>Nshimiyumukiza Erneste</p>
      <p className="text-2xl ">FullStack Developer</p>
      <span className="text-xl mb-4">Birth Date: 30/3/2004</span>
      </div>
                
      
      </div>
      <div className="flex flex-col md:flex-row space-x-12 mt-8 md:mt-14 md:mx-auto md:w-11/12">
      <div className="space-y-4 text-xl">
      <div className='flex-col space-y-4'>
<div>
<p className='text-3xl m-5 font-bold underline text-blue-500'>Contact</p>
<div className='flex gap-1 items-center'>
<MdEmail  className='text-blue-500 w-[50px]'/>
<p>nshimiyumukizaerneste99gmail.com</p>

</div>

</div>

<div className='flex gap-1 items-center'>

<MdPhoneInTalk  className='text-blue-500  w-[50px]'/>
       <p>0794650639</p>
</div>
      
       <div className='flex gap-1 items-center'>
       <ImFacebook2  className='text-blue-500  w-[50px]'/>
       <h1>Eneste Sagaga</h1>
      
       </div>
       <div className='flex gap-1 items-center'>
       <FaGithub  className='text-blue-500  w-[50px]'/>
       <h1>nshimiyumukiza</h1>
       </div>
       </div>
      </div>
  <div>
  <div>
      <p className='text-3xl ml-12 m-5 font-bold underline text-blue-500'>Education</p>
      <div>
        <div className="m-7 ml-10">
        <span className="text-xl font-bold mb-4 underline ">2021-2024</span>
        <ul className=" text-xl space-y-4 mt-4">
            <li>SCHOOL: ES APEM Ngarama</li>
            <li className="w-64">combination: MCE Mathemetics Economics And Computer sciance</li>
            <li>DEGREE: A2</li>
        </ul>
        </div>
        <div className="mb-4 space-y-4 ml-12">
            <span className="text-xl font-bold underline">2024-205</span>
           <ul className="mt-4">
            <li>Nyabiheke Coding School</li>
           </ul>
        </div>
        </div>
      </div>
      </div>
      <div>
        <div>
        <p className='text-3xl ml-12 m-5 font-bold underline text-blue-500'>General skills</p>
        </div>
        <div>
            <ul className="space-y-4 text-xl ml-11">
                <li>Effective commonication</li>
                <li>Leadership</li>
                <li>Time Management</li>
                <li>Sloving Conflict</li>
            </ul>
        </div>
      </div>
      <div>
        <div>
        <p className='text-3xl ml-12 m-5 font-bold underline text-blue-500'>Languange</p>
        </div>
        <div>
            <ul className="space-y-4 text-xl ml-10">
                <li>English</li>
                <li>Kinyarwanda</li>
                
            </ul>
        </div>
      </div>
  </div>
     
    
        </div>
    </div>
  )
}

export default CV