"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ComprehensiveEnergyAudit() {
  return (
    <section className='common-section'>
        <div className="text-center">
        {/* <h3 className="title text-[#889F2D]">Our Journey</h3> */}
        <h2 className="center-section-heading">
        COMPREHENSIVE ENERGY AUDIT SERVICES TO REDUCE<br/>
        COSTS, IMPROVE EFFICIENCY AND DRIVE SUSTAINABILITY
        </h2>

      </div>

       {/* Text Section */}
       <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-2 gap-10  mt-10">
      {/* <div className="flex flex-col justify-center md:w-1/2"> */}
        <div className="text-center md:text-left mr-[100px]">
          
          <p className="content text-[#3D3D3D]  text-left text-sm sm:text-base md:text-lg mt-[10px]">
            An Energy Audit is a systematic assessment of your facility’s energy use to identify areas of wastage, inefficiency, and potential savings. Our experts analyze your energy consumption patterns and recommend actionable solutions that help reduce costs, increase operational efficiency, and improve environmental sustainability.<br/><br/>
            The essential foundation required to identify energy-saving opportunities is to analyse the current situation. An energy audit is key to the energy management system. The energy audit is designed to determine why, when, where and how energy is used in the industry.
          </p>
        </div>
    

      {/* Image Section */}
      <div className=" ">
        <Image
          width={678}
          height={574}
          src="/assets/services/energyAudit/EnergyAuditSecondSection.png"
          alt="About Us"
          className="w-full max-w-md md:max-w-full h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"
        />
      </div>
      </div>
    </section>
  )
}
