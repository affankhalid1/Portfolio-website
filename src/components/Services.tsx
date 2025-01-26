"use client"
import React from 'react'
import { useState } from 'react'

const Services = () => {
  const [currentColors, setCurrentColors] = useState(["#d3d3d3","#d3d3d3","#d3d3d3","#d3d3d3"])
  const [rotation, setrotation] = useState([0,0,0,0])

  const handleMouseHover = (index:number) => {
    const newcolor = [...currentColors]
    const newrotation = [...rotation]
    newcolor[index] = "#ee4818"
    newrotation[index] = 45
    setCurrentColors(newcolor)
    setrotation(newrotation )

  }
  const handleMouseLeave= (index:number) => {
    const newcolor = [...currentColors]
    const newrotation = [...rotation]
    newcolor[index] = "#d3d3d3"
    newrotation[index] = 0
    setCurrentColors(newcolor)
    setrotation(newrotation )
  }

  return (
    <section id = "Services" className="bg-[url('./bg-2.jpg')] sm:min-h-screen bg-cover bg-center">
      <div className='w-[80vw] md:w-[720px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1400px] mx-auto text-[#d3d3d3]'>
        <div className='text-center xs:mt-8 sm:mt-12 pt-5 text-[45px] xs:text-[50px] sm:text-[55px] md:text-[60px]'>SERVICES</div>
        <div className='box-container flex flex-col gap-8 mt-10 sm:mt-16 mb-16 md:mb-32'>

          <div className='box-row-1 grid gap-8 lg:grid-cols-[2.5fr,1.2fr]'>

            <div onMouseOver={() => handleMouseHover(0)} onMouseLeave={() => handleMouseLeave(0)} className='box-1 bg-[#0f0f0f] border-[0.2px] border-[#252525] rounded-3xl p-8 xl:px-10 xl:py-16 flex flex-col  gap-16'>
              <div className='flex justify-between'>
                <div className='flex justify-center items-center bg-[#ee4818] size-14 rounded-md text-3xl text-[#0f0f0f]'>01</div>
                <div className='arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill={currentColors[0]} style={{ transform: `rotate(${rotation[0]}deg)`, transition: "transform 0.3s ease" }} viewBox="0 0 256 256" className="icopos " ><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                </div>
              </div>
              <div className='flex flex-col  gap-4 '>
                <div className="heading font-[500] md:font-[400] text-[22px] md:text-[23px] lg:text-[25px] xl:text-[30px] 2xl:text-[40px] " >RESPONSIVE DESIGN</div>
                <div className="description">Crafting websites that are fully optimized for all devices, ensuring a seamless user experience on desktops, tablets, and mobile phones.</div>
              </div>
            </div>


            <div onMouseOver={() => handleMouseHover(1)} onMouseLeave={() => handleMouseLeave(1)} className='box-2 bg-[#0f0f0f] border-[0.2px] border-[#252525] rounded-3xl p-8 xl:px-10 xl:py-16 flex flex-col  gap-16'>
              <div className='flex justify-between'>
                <div className='flex justify-center items-center bg-[#ee4818] size-14 rounded-md text-3xl text-[#0f0f0f]'>02</div>
                <div className='arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill={currentColors[1]} style={{ transform: `rotate(${rotation[1]}deg)`, transition: "transform 0.3s ease" }} viewBox="0 0 256 256" className="icopos " ><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                </div>
              </div>
              <div className='flex flex-col  gap-4 text-[#d3d3d3]'>
                <div className="heading font-[500] md:font-[400] text-[22px] md:text-[23px] lg:text-[25px] xl:text-[30px] 2xl:text-[40px] ">FULL-STACK DEV</div>
                <div className="description">Building web apps using Next.js, React, Node.js, and MongoDB.</div>
              </div>
            </div>

          </div>

          <div className='box-row-2 grid gap-8 lg:grid-cols-[1.2fr,2.5fr]'>

            <div onMouseOver={() => handleMouseHover(2)} onMouseLeave={() => handleMouseLeave(2)} className='box-1 bg-[#0f0f0f] border-[0.2px] border-[#252525] rounded-3xl p-8 xl:px-10 xl:py-16 flex flex-col  gap-16'>
              <div className='flex justify-between'>
                <div className='flex justify-center items-center bg-[#ee4818] size-14 rounded-md text-3xl text-[#0f0f0f]'>03</div>
                <div className='arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill={currentColors[2]} style={{ transform: `rotate(${rotation[2]}deg)`, transition: "transform 0.3s ease" }} viewBox="0 0 256 256" className="icopos " ><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                </div>
              </div>
              <div className='flex flex-col  gap-4 text-[#d3d3d3]'>
                <div className="heading font-[500] md:font-[400] text-[22px] md:text-[23px] lg:text-[25px] xl:text-[30px] 2xl:text-[40px] ">AI INTEGRATION</div>
                <div className="description">Adding AI features like recommendations or automated responses to web apps.</div>
              </div>
            </div>

            <div onMouseOver={() => handleMouseHover(3)} onMouseLeave={() => handleMouseLeave(3)} className='box-1 bg-[#0f0f0f] border-[0.2px] border-[#252525] rounded-3xl p-8 xl:px-10 xl:py-16 flex flex-col  gap-16'>
              <div className='flex justify-between'>
                <div className='flex justify-center items-center bg-[#ee4818] size-14 rounded-md text-3xl text-[#0f0f0f]'>04</div>
                <div className='arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill={currentColors[3]} style={{ transform: `rotate(${rotation[3]}deg)`, transition: "transform 0.3s ease" }} viewBox="0 0 256 256" className="icopos " ><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                </div>
              </div>
              <div className='flex flex-col  gap-4 text-[#d3d3d3]'>
                <div className="heading font-[500] md:font-[400] text-[22px] md:text-[23px] lg:text-[25px] xl:text-[30px] 2xl:text-[40px] ">CHATBOT DEVELOPMENT</div>
                <div className="description"> Creating AI-powered chatbots for customer support, e-commerce, or social media platforms using Python and large language models (LLMs).</div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
