import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-8">
      <div  className="pt-12 pb-18 space-y-4">
        <div className='flex gap-1 items-center'> 
        <AiOutlineMessage className='text-blue-500  w-[50px]' />
         <p>i'm living in east of rwanda gatsibo district
             i'm student in nyabiheke coding schooll</p>
             </div>
             <div className='flex gap-1 items-center'>
             <MdEmail  className='text-blue-500 w-[50px]'/>
             <p>nshimiyumukizaerneste99gmail.com</p>
             </div>
             <div className='flex gap-1 items-center'>
             <MdPhoneInTalk  className='text-blue-500  w-[50px]'/>
             <p>0794650639</p>
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
    </div>
    
  )
}

export default Footer
