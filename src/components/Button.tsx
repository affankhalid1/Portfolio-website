"use client"
import React from 'react'

const Button = ({text}:any) => {
    const handleScroll = () => {
      let id = document.getElementById("Contact");
      id?.scrollIntoView({ behavior: "smooth" });
    }
  return (
    <div>
      <button onClick={handleScroll} className='bg-[#ee4818] hover:bg-[#0f0f0f] border-[0.02px] hover:border-[#646464] border-[#ee4818] text-[#d3d3d3] text-sm py-4 px-5 xs:py-5 xs:px-8 rounded-sm '>
            {text}
            </button>
    </div>
  )
}

export default Button
