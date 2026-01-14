"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from "lucide-react";

export default function IntroPMC() {
  return (
   <section className='common-section'>
    <div className="text-center mb-10">
      <h2 className="center-section-heading text-center ">About our Project Management Consultancy services
      </h2>
    </div>

       
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN - TEXT */}
 <div>
      {/* Description */}
          <p className="content text-[#3D3D3D]  text-left ">
           At <span className="font-semibold text-[#889F2D]">PPS Energy Solutions</span>, we provide end-to-end Project Management Consultancy (PMC) services that bring together planning, engineering, execution, and control — ensuring that every project is completed safely, on time, and within budget. <br /><br />
           Our experienced team acts as an extension of your organization, offering technical expertise, strategic oversight, and practical guidance across every phase of the project lifecycle.
           </p>

              {/* Highlights */}
          <ul className="space-y-3 content text-[#3D3D3D]  mt-10">
            {[

              "Optimize time, cost, and quality outcomes",
              "Ensure smooth coordination between stakeholders",
              "Minimize project risks and cost overruns",
              "Maintain transparency and accountability",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-[#889F2D] w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

 </div>

        {/* RIGHT COLUMN - IMAGE */}
        
          <Image
                    width={678}
                    height={574}
                    src="/assets/services/pmc/pmcInfo.jpeg"
                    alt="About Us"
                    className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"/>
         
      </div>
    </section>
  )
}
