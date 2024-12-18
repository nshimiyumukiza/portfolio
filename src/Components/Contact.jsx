import React from 'react'
const Contact = () => {
  return (
    <div className='bg-sky-900 text-white '>
      <div className='flex flex-col justify-center pt-12'>
        <h1 className='text-3xl text-center font-bold p-8'>Contact with me</h1>
        <div className=' w-[300px] h-[450]px m-auto'>
            <form className='space-y-4 border p-3'>
                <input className=' rounded-md border outline-none text-black font-bold p-4' type="text"placeholder='Enter Name' /><br />
                <input className=' rounded-md border outline-none text-black font-bold p-4' type="text" placeholder='Enter Email'/><br />
                <textarea className=' rounded-md border outline-none text-black font-bold p-4' name="" id=""placeholder='type message'></textarea><br />
                <button className=' rounded-md px-4 bg-blue-600'>Send</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
