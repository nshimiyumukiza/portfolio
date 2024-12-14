import React from 'react'
const Contact = () => {
  return (
    <div className='bg-sky-900 text-white '>
      <div className='flex flex-col justify-center pt-12'>
        <h1 className='text-3xl text-center font-bold p-8'>Contact with me</h1>
        <div className='p-8 w-[300px] h-[450]px border items-center flex justify-center'>
            <form className='space-y-4 '>
        <input className='border outline-none text-black font-bold p-4' type="text"placeholder='Enter Name' /><br />
        <input className='border outline-none text-black font-bold p-4' type="text" placeholder='Enter Email'/><br />
        <textarea className='border outline-none text-black font-bold p-4' name="" id=""placeholder='type message'></textarea><br />
        <button className='p-2 bg-blue-600'>Send</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
