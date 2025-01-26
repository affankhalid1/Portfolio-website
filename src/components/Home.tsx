import React from 'react'
import Navbar from './Navbar1'
import Image from 'next/image'
import Carousel from './Carousel'
import Button from './Button'
import Link from 'next/link'

const Home1 = () => {
  return (
    <section id="Home" className="bg-[url('./bg-1.jpg')] sm:min-h-screen bg-cover bg-center">
      <div>
      <Navbar />
      <div className='w-[65vw] mx-auto'>
        <div className='flex flex-col  mt-20'>
          <div className='flex justify-center xl:justify-end  xl:pr-10 pb-16 xs:pb-28 sm:pb-32 xl:pb-20 2xl:pb-0' >
            <Image src="/profile.jpg" alt="profile" width={200} height={200} className='absolute w-[150px] h-[150px] xs:w-[200px] xs:h-[200px]  rounded-full' />
          </div>
          <div className='mt-28 z-10 flex flex-col gap-4'>
            <div className='text-center text-[30px] xs:text-[45px] sm:text-[70px] md:text-[85px] lg:text-[115px]  xl:text-[130px] leading-[1.2] text-[#d3d3d3]'>FRONT-END <br />
              WEB DEVELOPER
            </div>
            <div className='text-center text-[#c0c0c0] text-sm xs:text-lg sm:text-xl'>
              Hi, I’m Affan, a Web Developer passionate about creating responsive, user-friendly websites.
              </div>
          
          </div>
          <div className='text-center mt-8'>
          <Button text="Get In touch"/>
          </div> 
          <Carousel />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Home1
