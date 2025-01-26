"use client"
import React from 'react'
import Image from 'next/image'

const ScrollToTop = () => {
    const ScrolltoTop = () => {
      window.scrollTo({
        top:0,
        behavior: "smooth"
      })
    }
  return (
    <div>
    <button onClick={ScrolltoTop} className="border-2 border-[#252525] bg-[#0f0f0f]  p-2 rounded-full">
    <Image width={35} height={35} className='' src='/SVG/arrowtop.svg' alt='1'/>
   </button>
    </div>
  )
}

export default ScrollToTop
