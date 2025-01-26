import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Recentwork = () => {
  return (
    <section id = "Project" className="bg-[#0f0f0f] sm:min-h-screen bg-cover bg-center">
      <div className='px-5 pb-20 w-[70vw] mx-auto'>
      <div className='text-center  pt-10 sm:pt-16 lg:pt-24 text-[#d3d3d3]  text-[30px] xs:text-[42px] sm:text-[55px] md:text-[60px]'>PORTFOLIO</div>
            <div className='grid  lg:grid-cols-2 gap-8 mt-6 sm:mt-16 '>
                    <div  className='flex justify-center'>
                    <Link target='_blank' href= "https://comfortys.vercel.app/"><Image width={1000} height={1000} className='rounded-lg' src='/comforty.jpg' alt='1'/></Link>
                    </div>
                    <div className='flex flex-col justify-center relative'>
                    <Link target='_blank' href= "https://resume-builder-app2.vercel.app/"><Image width={1000} height={1000} className='rounded-lg' src='/ResumeBuilder.jpg' alt='1'/></Link>
                    </div>
                    <div  className='flex justify-center'>
                    <Link target='_blank' href= "https://ai-mentor.streamlit.app/"><Image width={1000} height={1000} className='rounded-lg' src='/AI Mentor.jpg' alt='1'/></Link>
                    </div>
                    <div className='flex flex-col justify-center relative'>
                    <Link target='_blank' href= "https://ai-cooking-assistant-chatbot.streamlit.app/"><Image width={1000} height={1000} className='rounded-lg' src='/AI Cooking Assistant.jpg' alt='1'/></Link>
                    </div>
            </div>
      </div>
    </section>
  )
}

export default Recentwork
