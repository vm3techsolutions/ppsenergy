"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from "lucide-react";

export default function MepIntroduction() {
  return (
    <section className='common-section'>
    <div className="text-center mb-10">

      <h2 className="center-section-heading text-center ">
      About our MEP Services
      </h2>
    </div>

       
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN - TEXT */}
 <div>
      {/* Description */}
          <p className="content text-[#3D3D3D]  text-left ">
           At <span className="font-semibold text-[#889F2D]">PPS Energy Solutions</span>, we specialize in providing comprehensive MEP (Mechanical, Electrical, and Plumbing) engineering services. MEP services refer to the essential systems that make a building functional, safe, and comfortable.</p><br />

           

              {/* Highlights */}
          <ul className="space-y-3 content text-[#3D3D3D]  mt-4">
            {[
              "Mechanical services include heating, ventilation, air conditioning (HVAC), and fire-fighting systems.",
              "Electrical services cover power supply, lighting, backup systems, and communication networks",
              "Plumbing services include water supply, drainage, sanitation, and gas systems."
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-[#889F2D] w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

          <p className="content text-[#3D3D3D]  text-left lg:mt-5 ">Together, MEP services ensure efficient operation, safety, comfort, and proper maintenance of buildings and facilities.</p>

 </div>

        {/* RIGHT COLUMN - IMAGE */}
        
          <Image
                    width={678}
                    height={574}
                    src="/assets/services/mep/mepInfo.jpeg"
                    alt="About Us"
                    className="w-full max-w-md md:max-w-full h-[350px] lg:h-[450px] rounded-bl-[120px] rounded-tl-[40px] shadow-lg object-cover"/>
         
      </div>
    </section>
  )
}
