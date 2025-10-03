import React from 'react'
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

export default function Team() {
  return (
        <section className='common-section bg-[#f8f8f8]'>
        <div className="text-center mb-4">
        <h3 className="title text-[#889F2D]">Team</h3>
        <h2 className="center-section-heading">
          MEET THE EXPERTS
        </h2>

      </div>

{/* Team */}
      {/* Team */}
       <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-10  mt-10 ">

        {/* Box-1 */}
        <div className='flex flex-col items-center shadow-[0px_4px_10px_rgba(0,0,0,0.3)] rounded-b-[10px] py-1 px-3 bg-[#ffffff] '>
         
             <Image
            width={260}
            height={205}
            src="/assets/aboutus/AboutUsTeam.png"
            alt="About Us"
            className="w-full h-[225px] object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.3)] mt-2 "/>
          
            <h3 className='title mt-4 text-[#7B0000]'>Name</h3>

            <p className='content'>CEO & Founder</p>
         
            <div className='rounded-full  p-2  bg-[#7b0000] my-2.5'>
            <Link href="#"><FaLinkedinIn className="  text-[#7b0000] p-1 text-2xl bg-[#ffffff] rounded-[2px] " /></Link>
          </div>

        </div>

        <div>

          {/* Box-2 */}
          <div className='flex flex-col items-center shadow-[0px_4px_10px_rgba(0,0,0,0.3)] rounded-b-[10px] py-1 px-3 bg-[#ffffff]  '>
         
             <Image
            width={260}
            height={205}
            src="/assets/aboutus/AboutUsTeam.png"
            alt="About Us"
            className="w-full h-[225px] object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.3)] mt-2 "/>
          
            <h3 className='title mt-4 text-[#7B0000]'>Name</h3>

            <p className='content'>CEO & Founder</p>
         
            <div className='rounded-full  p-2  bg-[#7b0000] my-2.5'>
            <Link href="#"><FaLinkedinIn className="  text-[#7b0000] p-1 text-2xl bg-[#ffffff] rounded-[2px]" /></Link>
          </div>

        </div>
        </div>

{/* Box-3 */}
        <div>
          <div className='flex flex-col items-center shadow-[0px_4px_10px_rgba(0,0,0,0.3)] rounded-b-[10px] py-1 px-3 bg-[#ffffff]'>
         
             <Image
            width={260}
            height={205}
            src="/assets/aboutus/AboutUsTeam.png"
            alt="About Us"
            className="w-full h-[225px] object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.3)] mt-2 "/>
          
            <h3 className='title mt-4 text-[#7B0000]'>Name</h3>

            <p className='content'>CEO & Founder</p>
         
            <div className='rounded-full  p-2  bg-[#7b0000] my-2.5'>
            <Link href="#"><FaLinkedinIn className="  text-[#7b0000] p-1 text-2xl bg-[#ffffff] rounded-[2px]" /></Link>
          </div>

        </div>
        </div>

{/* Box-4 */}
        <div>
          <div className='flex flex-col items-center shadow-[0px_4px_10px_rgba(0,0,0,0.3)] rounded-b-[10px] py-1 px-3 bg-[#ffffff] '>
         
             <Image
            width={260}
            height={205}
            src="/assets/aboutus/AboutUsTeam.png"
            alt="About Us"
            className="w-full h-[225px] object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.3)] mt-2 "/>
          
            <h3 className='title mt-4 text-[#7B0000]'>Name</h3>

            <p className='content'>CEO & Founder</p>
         
            {/* <Link href="#" ><FaLinkedinIn className="w-[40px] h-[40px] my-2 bg-[#7B0000]  p-[5px] text-[24px] text-[#ffffff] rounded-full" /></Link> */}
            <div className='rounded-full  p-2  bg-[#7b0000] my-2.5'>
            <Link href="#"><FaLinkedinIn className="  text-[#7b0000] p-1 text-2xl bg-[#ffffff] rounded-[2px]" /></Link>
          </div>

        </div>
        </div>

       </div>


    </section>
  )
}






