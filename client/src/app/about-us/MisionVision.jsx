"use client"
import React from 'react'
import Image from 'next/image'

export default function MisionVision() {
  return (
    <section className='py-[75px]'>
        <div className="text-center mb-4 section ">
        <h3 className="title text-[#889F2D]">Our Mission & Vision</h3>
        <h2 className="center-section-heading">
          DRIVING PURPOSE, SHAPING FUTURE
        </h2>
      </div>

      <div className="grid grid-cols-3 items-start gap-6 py-10">

      {/* Mission Box */}
   
      <div className="bg-[#6C9D2E] text-white p-6 rounded-r-[120px] shadow-md flex flex-col items-center text-center  ">
        <Image
          width={50}
          height={50}
          src="/assets/aboutus/Mision.png"
          alt="About Us"
          className="w-full h-[50px] object-contain "/>
        <h3 className="title mt-3">Mission</h3>
        <p className="content mt-2">
          To empower industries, businesses, and communities with sustainable
          and innovative energy solutions that drive growth while protecting our
          planet.
        </p>
      </div>
    

      {/* Center Image */}
      <div className="flex justify-center ">
        <Image
          src="/assets/aboutus/AboutUsMisionVision.png"
          alt="Team working"
          width={300}
          height={400}
          className="rounded-[150px] shadow-lg object-cover"
        />
      </div>

      {/* Vision Box */}
     
      <div className="bg-[#6C9D2E] text-white p-6 rounded-l-[120px] shadow-md flex flex-col text-center mt-[300px] ">
        <Image
          width={50}
          height={50}
          src="/assets/aboutus/Vision.png"
          alt="About Us"
          className="w-full h-[50px] object-contain "/>
        <h3 className="title mt-3">Vision</h3>
        <p className="content mt-2">
          To empower industries, businesses, and communities with sustainable
          and innovative energy solutions that drive growth while protecting our
          planet.
        </p>
      </div>
      </div>




    </section>
  )
}
