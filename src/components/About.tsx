"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';


const About = () => {
  // const [percent, setPercent] = useState(0)

  // useEffect(() => {
  //   let end = 91
  //   let initial = 0

  // const interval = setInterval(() => {
  //   setPercent(initial++)
    

  //   if (initial == end) {
  //     clearInterval(interval)

  //   }
  // });
  // }, [])
  

  return (
    <section id = "About" className="bg-[#0f0f0f] min-h-[80vh] my-20 ">
        <div className='px-5 pt-16 pb-24 w-[70vw] mx-auto'>
        <div className='text-center   mt-7 mb-16 text-[#d3d3d3]   text-[45px] xs:text-[50px] sm:text-[55px] md:text-[60px]'>ABOUT</div>

        <div className='grid lg:grid-cols-[1.2fr,2.8fr] gap-16'>
          <Image width={400} height={400} className='' src='/profile.jpg' alt='Affan Khalid'/>
          <div className='text-[#d3d3d3] flex flex-col justify-between'>
          <div className='text-xl 2xl:text-2xl '>I'm Affan Khalid, a web developer passionate about creating responsive websites with Next.js and Tailwind CSS. With experience in HTML, CSS, JavaScript, React, and Express, I build high-performance web apps. I'm also exploring generative AI and aiming to contribute to society through technology, especially in Pakistan.</div>
          <div className='flex sm:flex-row gap-2 flex-col justify-between mt-12'>
            <div className='flex flex-col items-center'>
              <div className=' text-[40px] 2xl:text-5xl font-bold'>8+</div>
              <div className='  '>Years of Experience</div>
            </div>
            
            <div className='flex flex-col items-center'>
              <div className=' text-[40px] 2xl:text-5xl font-bold'>1k+</div>
              <div className='  '>Complete Projects</div>
            </div>

            <div className='flex flex-col items-center'>
              <div className=' text-[40px] 2xl:text-5xl font-bold'>90%</div>
              <div className='  '>Client Satisfactions</div>
            </div>

          </div>
          </div>
        </div>

        </div>      
    </section>
  )
}

export default About
