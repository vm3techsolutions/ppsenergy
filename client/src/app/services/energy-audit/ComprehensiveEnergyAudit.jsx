"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ComprehensiveEnergyAudit() {
  return (
    <section className='common-section'>
        <div className="text-center mb-10">
        {/* <h3 className="title text-[#889F2D]">Our Journey</h3> */}
        <h2 className="center-section-heading">Comprehensive energy audit services to reduce<br/>
        costs, improve efficiency and drive sustainability</h2>
        </div>

       {/* Text Section */}
       <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        {/* <div className="text-center md:text-left lg:mr-[100px]"> */}
          
          <p className="content text-[#3D3D3D]  text-left  lg:mr-[100px] ">
            An energy audit is a structured review of how energy is used in a facility to identify wastage, inefficiencies, and opportunities for cost savings. Our experts analyze your energy consumption patterns and recommend actionable solutions that help reduce costs, increase operational efficiency, and improve environmental sustainability.<br/><br/>
            Energy audit supports environmental sustainability by reducing energy consumption and emissions, and it assists organizations in planning effective energy-saving measures while ensuring better compliance with energy regulations.
          </p>
       
    

      {/* Image Section */}
      
        <Image
          width={678}
          height={574}
          src="/assets/services/energyAudit/infoEnergyAudit.jpeg"
          alt="About Us"
          className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"/>
      </div>
    </section>
  )
}
