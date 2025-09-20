"use client"
import React from 'react'


const Navbar = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div>
      <div className='flex items-center'>
        <img src=".\Logoran-removebg-preview.png" className='absolute  logo' width={"150px"} alt="" />
        <div className='flex w-full flex-col m-3 justify-center items-center'>
          <h1 className='text-5xl mt-4 font-semibold namesoc ' >RANGMANCH</h1>
          <h1 className='text-5xl m-4 font-semibold namesoc' >MANIT BHOPAL</h1>
        </div>
        <img src=".\MANIT+LOGO-removebg-preview.png" width={"150px"} className='absolute right-2 logo' alt="" />
      </div>
      <div className='h-0.5 w-full bg-gray-500'></div>
    </div>
  )
}

export default Navbar
