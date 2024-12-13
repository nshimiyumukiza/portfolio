import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-white px-8 pt-8">
      <div  className="py-2 flex flex-col text-center px-8 md:justify-between items-center pb-10 ">
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
             </div>
      </div>
    </div>
  )
}

export default Footer
