import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
  return (
    <form className="mx-auto w-full">
      <div className="bg-[#0f0f0f] mx-auto w-full flex  flex-col items-center gap-8 px-6 pt-8 md:px-12 md:pt-16 pb-12 rounded-xl border-[0.2px] border-[#252525]">
        <div className="flex  flex-col md:flex-row w-full gap-8">
          <div className="flex flex-col w-full md:w-[50%] gap-5 ">
            <label htmlFor="Full Name">FULL Name</label>

            <div className="border-[0.2px] border-[#252525]  flex justify-between  px-5 rounded-lg py-4 placeholder:">
              <input
                type="text"
                className="bg-transparent  outline-none "
                placeholder="Aliyan Robinson"
              />
              <Image
              className="hidden sm:block"
                src="/SVG/person.svg"
                alt="person"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[50%] gap-5">
            <label htmlFor="Email Address">EMAIL ADDRESS</label>

            <div className="border-[0.2px] border-[#252525] flex justify-between px-5 rounded-lg py-4 ">
              <input
                type="email"
                className="bg-transparent  outline-none "
                placeholder="hello@gmail.com"
              />
              <Image
              className="hidden sm:block"
               src="/SVG/email.svg" 
               alt="email" 
               width={20} 
               height={20} />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center gap-5">
          <label htmlFor="Subject">SUBJECT</label>
          <input
            className="border-[0.2px] border-[#252525] flex justify-between px-5 rounded-lg py-4 bg-transparent  outline-none "
            type="text"
            placeholder="Your Subject"
          />
        </div>

        <div className="w-full flex flex-col justify-center gap-5">
          <label htmlFor="Subject">YOUR MESSAGE</label>
          <input
            className="border-[0.2px] border-[#252525] flex justify-between px-5 rounded-lg pt-4 pb-28 bg-transparent  outline-none "
            type="text"
            placeholder="Write Your Message"
          />
        </div>

        <Link href={"/"}>
          <button className="bg-[#ee4818] hover:bg-[#0f0f0f] hover:border-[0.02px] hover:border-[#646464] text-[#d3d3d3] text-xs md:text-sm py-4 px-6 md:py-5 md:px-8 rounded-sm ">
            Send Me Message
          </button>
        </Link>
      </div>
    </form>
  );
};

export default ContactForm;
