import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-cover bg-center">
         <div className='px-5 pt-10 pb-24 w-[80vw]  md:w-[70vw] mx-auto text-[#d3d3d3]'>
      <div className='text-center   mt-7 mb-16  text-[30px] xs:text-[42px] sm:text-[55px] md:text-[60px]'>TESTIMONIALS</div>
      <div className='flex flex-col gap-8'>
        <div className='grid lg:grid-cols-2 gap-8'>

            <div className='review-box flex flex-col gap-8 border-[0.2px] px-6 py-8 rounded-2xl border-[#252525] bg-[#0f0f0f]'>
                <div>Affan delivered an exceptional website for our company. The design is sleek, responsive, and perfectly captures our brand's essence. Highly recommend his services!</div>
                <div className=''><Image  className='rounded-full' width={70} height={70} src='/Testimonials/author1.webp' alt='1'/></div>
                <div className='flex flex-col gap-1'>
                    <div className="heading text-xl">LUCAS ANDERSON</div>
                    <div className="heading">CTO, TechSphere </div>
                </div>
            </div>

            <div className='review-box flex flex-col gap-8 border-[0.2px] px-6 py-8 rounded-2xl border-[#252525] bg-[#0f0f0f]'>
                <div>Affan's exceptional web development expertise brought our vision to life. The end product was not only visually beautiful but also highly functional and incredibly user-friendly.</div>
                <div className=''><Image  className='rounded-full' width={70} height={70} src='/Testimonials/author2.webp' alt='1'/></div>
                <div className='flex flex-col gap-1'> 
                    <div className="heading text-xl">EMILY CARTER</div>
                    <div className="heading">Founder, InnovateHub</div>
                </div>
            </div>

        </div>

        <div className='grid lg:grid-cols-2 2xl:grid-cols-3 gap-8'>
        <div className='review-box flex flex-col gap-8 border-[0.2px] px-6 py-8 rounded-2xl border-[#252525] bg-[#0f0f0f]'>
                <div>Working with Affan was a game-changer for our business. The AI chatbot he developed for us improved customer engagement tremendously!</div>
                <div className=''><Image  className='rounded-full' width={70} height={70} src='/Testimonials/author4.webp' alt='1'/></div>
                <div className='flex flex-col gap-1'>
                    <div className="heading text-xl">SARAH MILLER</div>
                    <div className="heading">CEO, AI NextGen</div>
                </div>
            </div>
            
        <div className='review-box flex flex-col gap-8 border-[0.2px] px-6 py-8 rounded-2xl border-[#252525] bg-[#0f0f0f]'>
                <div>Affan transformed our ideas into a fully functional web app. His attention to detail and commitment to delivering high-quality work are unmatched.</div>
                <div className=''><Image  className='rounded-full' width={70} height={70} src='/Testimonials/author3.webp' alt='1'/></div>
                <div className='flex flex-col gap-1'>
                    <div className="heading text-xl">RYAN COOPER</div>
                    <div className="heading">Managing Director, FinEdge Solutions</div>
                </div>
            </div>

            <div className='hidden 2xl:block px-6 py-8 border-[0.2px] rounded-2xl border-[#252525] bg-[#0f0f0f]'>
            <div className='review-box flex flex-col   gap-8  '>
                <div>Affan integrated AI capabilities into our platform, streamlining our processes and boosting customer satisfaction. Truly impressive work!</div>
                <div className=''><Image  className='rounded-full' width={70} height={70} src='/Testimonials/author5.webp' alt='1'/></div>
                <div className='flex flex-col gap-1'>
                    <div className="heading text-xl">JAMES WILSON</div>
                    <div className="heading">Founder, SmartAssist Solutions</div>
                </div>
            </div>
            </div>


        </div>
        
        <div className='2xl:hidden block'>
        <div className='review-box flex flex-col mx-auto lg:w-[55%] gap-8 border-[0.2px] px-6 py-8 rounded-2xl border-[#252525] bg-[#0f0f0f]'>
                <div>Affan integrated AI capabilities into our platform, streamlining our processes and boosting customer satisfaction. Truly impressive work!</div>
                <div className=''><Image  className='rounded-full' width={70} height={70} src='/Testimonials/author5.webp' alt='1'/></div>
                <div className='flex flex-col gap-1'>
                    <div className="heading text-xl">JAMES WILSON</div>
                    <div className="heading">Founder, SmartAssist Solutions</div>
                </div>
            </div>
      </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
