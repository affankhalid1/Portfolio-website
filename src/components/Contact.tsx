"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import ContactForm from './ContactForm'
import Link from 'next/link'

const Contact = () => {

    const [color, setcolor] = useState(["#d3d3d3","#d3d3d3","#d3d3d3","#d3d3d3"])

    const handleMouseOver = (index:number) => {
        const newcolor = [...color]
        newcolor[index] = "#ee4818"
        setcolor(newcolor)
    }

    const handleMouseLeave = (index:number) => {
        const newcolor = [...color]
        newcolor[index] = "#d3d3d3"
        setcolor(newcolor)
    }
  return (
    <section id = "Contact" className="min-h-full mt-20 mb-1 ">
        <div className='px-5 pt-16 pb-2 w-[70vw] xl:w-[1200px] 2xl:w-[1400px] 3xl:w-[1650px] mx-auto'>
        <div className='text-center   mt-7 mb-16 text-[#d3d3d3]   text-[45px] xs:text-[50px] sm:text-[55px] md:text-[60px]'>CONTACT ME</div>

        <div className='flex flex-col xl:flex-row gap-20 '>
            <div className='flex flex-col gap-12'>
                <Image className='rounded-full' src='/profile.jpg' alt='Affan Khalid' width={120} height={120}/>
                <div className='flex flex-col gap-4'>
                    <div className='text-xl'>Are you ready?</div>
                    <div className=' font-[500] text-2xl xs:text-3xl sm:font-normal sm:text-5xl leading-snug'>ELEVATE YOUR DIGITAL PRESENCE WITH INNOVATIVE WEB SOLUTIONS</div>
                    <div className='text-xl'>Hi, I’m Affan Khalid, a web developer specializing in creating seamless, user-friendly websites and applications with modern tools like Next.js and Express.</div>
                </div>
                <div className='flex gap-4  items-center'>
                    <Link target='_blank'  href = {"https://www.facebook.com/"}>
                    <div className='facebook p-2 rounded-full border-[2.5px] flex justify-center items-center border-[#252525]' onMouseOver={()=> {handleMouseOver(0)}} onMouseLeave={()=> {handleMouseLeave(0)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={color[0]} viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
                    </div>
                    </Link>

                    <Link target='_blank'  href = {"https://x.com/"}>
                    <div className= 'X.com p-2 rounded-full border-[2.5px] flex justify-center border-[#252525]' onMouseOver={()=> {handleMouseOver(1)}} onMouseLeave={()=> {handleMouseLeave(1)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={color[1]} viewBox="0 0 256 256"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></svg>
                    </div>
                    </Link>

                    <Link target='_blank'  href = {"https://www.linkedin.com/in/affan-khalid-5886702bb"}>
                    <div className='p-2 rounded-full border-[2.5px] flex justify-center border-[#252525]' onMouseOver={()=> {handleMouseOver(2)}} onMouseLeave={()=> {handleMouseLeave(2)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={color[2]} viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                    </div>
                    </Link>

                    <Link target='_blank'  href = {"https://github.com/affankhalid1"}>
                    <div className='p-2 rounded-full border-[2.5px] flex justify-center border-[#252525]' onMouseOver={()=> {handleMouseOver(3)}} onMouseLeave={()=> {handleMouseLeave(3)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={color[3]} viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
                    </div>
                    </Link>

                </div>
            </div>
        <ContactForm/>
        </div>

        <div className='flex flex-col gap-4 items-center mt-40'>
            <div className='text-xl text-center'>Have a project in mind?</div>
            <Link href={"mailto:affankhalid560@gmail.com"}  className='text-[20px] xs:text-2xl sm:text-4xl md:text-5xl  lg:text-6xl xl:text-7xl hover:text-[#ee4818] transform transition duration-500 font-semibold text-center'>AFFANKHALID560@gmail.com</Link>
        </div>

        <footer className='flex flex-col md:flex-row justify-between text-xs mt-20'>
            <div className='text-center'>Designed & Developed by Affan Khalid</div>
            <div className='text-center'>&copy;Copyright 2025</div>
        </footer>

        </div>
      
    </section>
  )
}

export default Contact
